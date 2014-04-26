/*
===============================================
library to control AD7173-8 ADC chips

                                  R R
                                  E E
                                  F F
                                  + -
                                  | |
                           _____________________________
                         /        4 3 3 3 3 3 3 3 3 3         |
                        |        0 9 8 7 6 5 4 3 2 1         |
          AIN16 --| 1.                                    30. |-- AIN8
 AIN0/REF2- --| 2.                                    29. |-- AIN7
AIN1/REF2+ --| 3.                                    28. |-- AIN6
            AIN2 --| 4.                                    27. |-- AIN5
            AIN3 --| 5.                                    26. |-- AIN4
       REFOUT --| 6.                                     25. |-- GPIO2
     REGCAPA --| 7.                                     24. |-- GPIO1
            AVSS --| 8.                                    23. |-- GPIO0
          AVDD1 --| 9.                                    22. |-- REGCAPD
          AVDD2 --| 10.                                  21. |-- DGND
                        |        1 1 1 1 1 1 1 1 1 2         |
                        |        1 2 3 4 5 6 7 8 9 0         |
                        |_____________________________|
===============================================
*/
#include <SPI.h>

/* ADC registers */
#define ID_REG 0x07
#define DATA_REG 0x04
#define COMMS_REG 0x00
#define FILTCON0_REG 0x28

/* other configuration */
#define DEBUG_ENABLED true
#define DATA_READY digitalRead(MISO) == LOW

/*
===================================
resets the ADC to the default state
===================================
*/
void reset_adc() {
    for (int i = 0; i < 16; i++) {
        SPI.transfer(0xFF);
    }
}

/*
==================================================
cancels the current transaction to resync the ADC
==================================================
*/
void resync_adc() {
    digitalWrite(SS, HIGH);
    delay(100);
    digitalWrite(SS, LOW);
}

/*
==============================
validates the ADC chip ID
@return bool - is ADC ID valid
==============================
*/
bool is_valid_adc_id() {
    /* send communication register id 0x00 */
    SPI.transfer(COMMS_REG);
    /* send read command to the ID register 0x07 */
    SPI.transfer(0x4 | ID_REG);
    /* read the received id 16 bits */
    byte id[2];
    id[0] = SPI.transfer(0x00);
    id[1] = SPI.transfer(0x00);
    /* erease the last 4 bits */
    id[1] &= 0xF0;
    /* check if the id matches 0x30DX, where X is don't care */
    return id[0] == 0x30 && id[1] == 0xD0;
}

/*
============================================
initializes the SPI connection with the ADC
@return bool - is ADC ID valid
============================================
*/
bool init_adc() {
    /* initiate SPI communication */
    SPI.begin();
    /* use SPI mode 3 */
    SPI.setDataMode(SPI_MODE3);
    /* resync the ADC */
    resync_adc();
    /* check if ADC device ID is valid */
    bool valid_id = is_valid_adc_id();
    if (DEBUG_ENABLED) {
        if (valid_id) {
            Serial.println("ADC device ID is valid :)");
        } else {
            Serial.println("ADC device ID is invalid :(");
        }
    }
    /* return if ADC id was valid */
    return valid_id;
}

/*
=========================================
configures the ADC chip
@param byte - the register where to write
@param  byte[] - the bytes to write
@param int - the length of bytes to write
=========================================
*/
int write_adc_register(byte reg, byte value[], int write_len) {
    /* when specified register is invalid */
    if (reg < 0x00 || reg > 0xFF) {
        if (DEBUG_ENABLED) {
            Serial.println("register out of range");
        }
        return 1;
    }
    /* send communication register id 0x00 */
    SPI.transfer(0x00);
    /* send write command to the specified register 0x00 - 0xFF */
    SPI.transfer(0x00 | reg);
    /* write the specified amount of bytes */
    for (int i = 0; i < write_len; i++) {
        SPI.transfer(value[i]);
    }
    /* when debug enabled
    /* return if ADC id was valid */
    if (DEBUG_ENABLED) {
        Serial.print("wrote to ADC register: ");
        for (int i = 0; i < write_len; i++) {
            Serial.write(value[i]);
        }
        Serial.println();
    }
    /* return error code */
    return 0;
}

/*
=============================================
reads the ADC channels
@param byte - the register to read
@param int - the length of bytes to read
@return byte[] - the adc register read result
=============================================
*/
int read_adc_register(byte reg, byte value[], int read_len) {
    /* when specified register is invalid */
    if (reg < 0x00 || reg > 0xFF) {
        if (DEBUG_ENABLED) {
            Serial.println("register out of range");
        }
        return 1;
    }
    /* send communication register id 0x00 */
    SPI.transfer(0x00);
    /* send read command to the specified register 0x00 - 0xFF */
    SPI.transfer(0x40 | reg);
    /* read the specified amount of bytes */
    for (int i = 0; i < read_len; i++) {
        value[i] = SPI.transfer(0x00);
    }
    /* when debug enabled */
    if (DEBUG_ENABLED) {
        Serial.print("received ADC register result: ");
        for (int i = 0; i < read_len; i++) {
            Serial.write(value[i]);
        }
        Serial.println();
    }
    /* return error code */
    return 0;
}

/*
==========================================
reads the ADC conversion result
@return byte[] - the ADC conversion result
==========================================
*/
int read_adc_data(byte value[]) {
    /* send communication register id 0x00 */
    SPI.transfer(0x00);
    /* send read command to the data register 0x04 */
    SPI.transfer(0x4 | DATA_REG);
    /* read the received value 24 bits */
    value[0] = SPI.transfer(0x00);
    value[1] = SPI.transfer(0x00);
    value[2] = SPI.transfer(0x00);
    /* when debug enabled */
    if (DEBUG_ENABLED) {
        Serial.print("received ADC conversion result: ");
        Serial.write(value[0]);
        Serial.write(value[1]);
        Serial.write(value[2]);
        Serial.println();
    }
    /* return error code */
    return 0;
}

void setup() {
    /* initiate serial communication */
    Serial.begin(115200);
    /* initiate ADC */
    init_adc();
    /* set ADC configuration */
    byte value[2];
    // SET THE SAMPLERATE, register FILTCON0 0x28, reset  0x0000
    // last 5 bytes, 0x0000 - 31kHz, 0x0004 5208Hz
    read_adc_register(FILTCON0_REG, value, 2);
    value[0] = 0x00;
    value[1] = 0x04;
    write_adc_register(FILTCON0_REG, value, 2);
    read_adc_register(FILTCON0_REG, value, 2);
    /* wait for ADC */
    delay(100);
}

void loop() {
    /* when ADC conversion is finished */
    if (DATA_READY) {
        /* read ADC conversion result */
        byte value[3];
        read_adc_data(value);
        /* when ADC is out of sync */
        if (value == 0) {
            resync_adc();
        }
        delay(100);
    }
}