/*
==============================
library to control AD7173-8 ADC chips
==============================
*/
#include <SPI.h>

/*
==========================
resets the ADC to the default state
==========================
*/
void reset_adc() {
  for (int i = 0; i < 16; i++) {
    SPI.transfer(0xFF);
  }
}

/*
======================================
cancels the current transaction to resync the ADC
======================================
*/
void resync_adc() {
  digitalWrite(SS, HIGH);
  delay(100);
  digitalWrite(SS, LOW);
}

/*
================================
initializes the SPI connection with the ADC
================================
*/
void init_adc() {
  SPI.begin();
  /* use SPI mode 3 */
  SPI.setDataMode(SPI_MODE3);
  /* resync the device */
  resync_adc();
}

/*
=======================
validates the ADC chip ID
@return bool - is ADC ID valid
=======================
*/
bool is_valid_adc_id() {
  /* send communication register id 0x00 */
  SPI.transfer(0x00);
  /* send read command to the ID register 0x07 */
  SPI.transfer(0x47);
  /* read the received id 16 bits */
  byte id[2];
  id[0] = SPI.transfer(0x00);
  id[1] = SPI.transfer(0x00);
  //Serial.write(id[0]);
  //Serial.write(id[1]);
  /* erease the last 4 bits */
  id[1] &= 0xF0;
  /* check if the id matches 0x30DX where X is don't care */
  return id[0] == 0x30 && id[1] == 0xD0;
}

/*
==================
configures the ADC chip
==================
*/
void set_adc_mode() {
  // FOR SPS
  /* send communication register id 0x00 */
  SPI.transfer(0x00);
  /* send write command to the ADCMODEregister 0x01 */
  SPI.transfer(0x28);
  /* send the 16 bits configuration */
  SPI.transfer(0x00);//0010 0000 0000 1100
  SPI.transfer(0x08);

  // SET TO EXTERNAL OSCILLATOR  
  SPI.transfer(0x00);
  /* send write command to the ADCMODEregister 0x01 */
  SPI.transfer(0x01);
  /* send the 16 bits configuration */
  SPI.transfer(0x20);//0010 0000 0000 1100
  SPI.transfer(0x00);
  
  // SET TO UNIPOLAR CODED OUTPUT
  SPI.transfer(0x00);
  /* send write command to the ADCMODEregister 0x01 */
  SPI.transfer(0x20);
  /* send the 16 bits configuration */
  SPI.transfer(0x10);//0010 0000 0000 1100
  SPI.transfer(0x00);

  // CONFIGURE CH0 - CH15
  // 1000 0010 0011 0010
  //SPI.transfer(0x00);
  //SPI.transfer(0x10);
  // NORMAL MODE
  //SPI.transfer(0x80); // 1000 0010
  //SPI.transfer(0x01); // 0011 0010
  // READ FEF
  //SPI.transfer(0x82); // 1000 0010
  //SPI.transfer(0xB6); // 1011 0110

  // CONFIGURE SETUP CONNECTION 0
  //SPI.transfer(0x00);
  //SPI.transfer(0x20);
  //SPI.transfer(0x10);
  //SPI.transfer(0x00);
  
  //SPI.transfer(0x00);
  //SPI.transfer(0x11);
  //SPI.transfer(0x80); // 1000 0010
  //SPI.transfer(0x01); // 0011 0010

  // register 0x20 is interesting xD
}

/*
==================
reads the ADC channels
==================
*/
int read_adc_channel(int channel) {
  /* when specified channel is out of range */
  if (channel < 0 || channel > 15) {
    return 0;
  }
  /* send communication register id 0x00 */
  SPI.transfer(0x00);
  /* send read command to the CH0 - CH15 register 0x10 - 0x1F */
  SPI.transfer(0x50 | channel);
  /* read the received value 16 bits */
  byte high = SPI.transfer(0x00);
  byte low = SPI.transfer(0x00);
  /* shift the high and low bytes into an integer */
  return (high << 8) | low;
}

long read_adc_data() {
  /* send communication register id 0x00 */
  SPI.transfer(0x00);
  /* send read command to the CH0 - CH15 register 0x10 - 0x1F */
  SPI.transfer(0x44);
  /* read the received value 24 bits */
  byte high = SPI.transfer(0x00);
  byte mid = SPI.transfer(0x00);
  byte low = SPI.transfer(0x00);
  /* shift the high and low bytes into an integer */
  Serial.write(high);
  Serial.write(mid);
  Serial.write(low);
  Serial.println();
  long value = ((long)high << 16) | ((long)mid << 8) | low;
  return value;
}

void setup() {
  Serial.begin(115200);

  init_adc();
  if (is_valid_adc_id()) {
    Serial.println("ADC device ID is valid :)");
  } 
  else {
    Serial.println("ADC device ID is invalid :(");
  }
  reset_adc();
  delay(1000);
  digitalWrite(SS, HIGH);
  delay(1000);
  digitalWrite(SS, LOW);
  //set_adc_mode();
  delay(1000);
  analogWrite(5, 10);
}

void loop() {  
  if (digitalRead(MISO) == LOW) {
    long value = read_adc_data();
    //Serial.println(value);
    if (value == 0) {
      resync_adc();
    }
  delay(100);
  }
}

