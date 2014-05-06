/*
===================================================================================
library to control AD7173-8 ADC chips

                              G    A    A    A    A    A    A
                    R    R    P    I    I    I    I    I    I    A
                    E    E    I    N    N    N    N    N    N    I
                    F    F    O    1    1    1    1    1    1    N
                    +    -    3    5    4    3    2    1    0    9
                    |    |    |    |    |    |    |    |    |    |
               _________________________________________________________
              /    40.  39.  38.  37.  36.  35.  34.  33.  32.  31.     |
             |                                                          |
     AIN16 --| 1.                                                   30. |-- AIN8
AIN0/REF2- --| 2.                                                   29. |-- AIN7
AIN1/REF2+ --| 3.                                                   28. |-- AIN6
      AIN2 --| 4.                                                   27. |-- AIN5
      AIN3 --| 5.                                                   26. |-- AIN4
    REFOUT --| 6.                                                   25. |-- GPIO2
   REGCAPA --| 7.                                                   24. |-- GPIO1
      AVSS --| 8.                                                   23. |-- GPIO0
     AVDD1 --| 9.                                                   22. |-- REGCAPD
     AVDD2 --| 10.                                                  21. |-- DGND
             |                                                          |
             |     11.  12.  13.  14.  15.  16.  17.  18.  19.  20.     |
             |__________________________________________________________|
                    |    |    |    |    |    |    |    |    |    |
                    P    X    X    D    D    S    C    E    S    I
                    D    T    T    O    I    C    S    R    Y    O
                    S    A    A    U    N    L         R    N    V
                    W    L    L    T         K         O    C    D
                    1    2                             R         D
                         /
                         C
                         L
                         K
                         I
                         O
===================================================================================
*/
#include <SPI.h>

/* ADC registers */
#define ID_REG 0x07
#define CH0_REG 0x10
#define CH1_REG 0x11
#define CH2_REG 0x12
#define CH3_REG 0x13
#define CH4_REG 0x14
#define CH5_REG 0x15
#define CH6_REG 0x16
#define CH7_REG 0x17
#define CH8_REG 0x18
#define CH9_REG 0x19
#define CH10_REG 0x1A
#define CH11_REG 0x1B
#define CH12_REG 0x1C
#define CH13_REG 0x1D
#define CH14_REG 0x1E
#define CH15_REG 0x1F
#define DATA_REG 0x04
#define COMMS_REG 0x00
#define GAIN0_REG 0x38
#define GAIN1_REG 0x39
#define GAIN2_REG 0x3A
#define GAIN3_REG 0x3B
#define GAIN4_REG 0x3C
#define GAIN5_REG 0x3D
#define GAIN6_REG 0x3E
#define GAIN7_REG 0x3F
#define IFMODE_REG 0x02
#define ADCMODE_REG 0x01
#define OFFSET0_REG 0x30
#define OFFSET1_REG 0x31
#define OFFSET2_REG 0x32
#define OFFSET3_REG 0x33
#define OFFSET4_REG 0x34
#define OFFSET5_REG 0x35
#define OFFSET6_REG 0x36
#define OFFSET7_REG 0x37
#define GPIOCON_REG 0x06
#define REGCHECK_REG 0x03
#define FILTCON0_REG 0x28
#define FILTCON1_REG 0x29
#define FILTCON2_REG 0x2A
#define FILTCON3_REG 0x2B
#define FILTCON4_REG 0x2C
#define FILTCON5_REG 0x2D
#define FILTCON6_REG 0x2E
#define FILTCON7_REG 0x2F
#define SETUPCON0_REG 0x20
#define SETUPCON1_REG 0x21
#define SETUPCON2_REG 0x22
#define SETUPCON3_REG 0x23
#define SETUPCON4_REG 0x24
#define SETUPCON5_REG 0x25
#define SETUPCON6_REG 0x26
#define SETUPCON7_REG 0x27

/* ADC values */
#define SPS_1 0x16
#define SPS_2 0x15
#define SPS_5 0x14
#define SPS_10 0x13
#define SPS_16 0x12
#define SPS_20 0x11
#define SPS_50 0x10
#define SPS_60 0x0F
#define SPS_100 0x0E
#define SPS_200 0x0D
#define SPS_381 0x0C
#define SPS_504 0x0B
#define SPS_1007 0x0A
#define SPS_2597 0x09
#define SPS_5208 0x08
#define SPS_10417 0x07
#define SPS_15625 0x06
#define SPS_31250 0x00
#define CONTINUOUS_READ_MODE 0
#define SINGLE_CONVERSION_MODE 1
#define CONTINUOUS_CONVERSION_MODE 2
#define DATA_READY digitalRead(MISO) == LOW

/* enable/disable debug */
#define DEBUG_ENABLED 1

/* default adc data conversion mode */
int adc_data_mode = CONTINUOUS_CONVERSION_MODE;

/*
===========================
print bytes in nice format
@param byte - byte to print
===========================
*/
void print_byte(byte value) {
    char format[10];
    sprintf(format, "0x%.2X ", value);
    Serial.print(format);
}

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
    /* toggle the chip select */
    digitalWrite(SS, HIGH);
    delay(1);
    digitalWrite(SS, LOW);
}

/*
=========================================
configures the ADC chip
@param byte - the register where to write
@param  byte[] - the bytes to write
@param int - the length of bytes to write
=========================================
*/
int write_adc_register(byte reg, byte *value, int write_len) {
    /* when specified register is invalid */
    if (reg < 0x00 || reg > 0x3F) {
        if (DEBUG_ENABLED) {
            print_byte(reg);
            Serial.println("write register out of range");
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
    /* when debug enabled */
    if (DEBUG_ENABLED) {
        Serial.print("write: ");
        for (int i = 0; i < write_len; i++) {
            print_byte(value[i]);
        }
        Serial.print("to reg: ");
        print_byte(reg);
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
int read_adc_register(byte reg, byte *value, int read_len) {
    /* when specified register is invalid */
    if (reg < 0x00 || reg > 0x3F) {
        if (DEBUG_ENABLED) {
            print_byte(reg);
            Serial.println("read register out of range");
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
        Serial.print("read: ");
        for (int i = 0; i < read_len; i++) {
            print_byte(value[i]);
        }
        Serial.print("from reg: ");
        print_byte(reg);
        Serial.println();
    }
    /* return error code */
    return 0;
}

/*
=================================
enables or disables ADC channels
@param byte - channel
@param bool - status
@return int - error code
=================================
*/
int enable_adc_channel(byte channel, bool status) {
    /* when channel out of range */
    if (channel < 0x10 || channel > 0x1F) {
        if (DEBUG_ENABLED) {
            print_byte(channel);
            Serial.println("enable channel out of range");
        }
        return 1;
    }
    byte value[2];
    /* read specified channel configuration */
    read_adc_register(channel, value, 2);
    /* clear the enable bit */
    value[0] &= ~(1 << 7);
    /* enable or disable this channel */
    value[0] |= (status << 7);
    /* set the correct analog inputs */
    byte ain = ((channel & 0x0F) << 1);
    value[1] = (ain << 5) | (ain + 1);
    /* update specified channel configuration */
    write_adc_register(channel, value, 2);
    /* return error code */
    return 0;
}

/*
==================================
sets the adc data conversion rate
@param int - speed of conversion
@return int - error code
==================================
*/
int set_adc_data_speed(byte data_speed) {
    byte value[2];
    read_adc_register(FILTCON0_REG, value, 2);
    value[1] &= 0xE0;
    value[1] |= data_speed;
    write_adc_register(FILTCON0_REG, value, 2);
    /* return error code */
    return 0;
}

/*
==================================
sets the adc data converison mode
@param int - data read mode
@return int - error code
==================================
*/
int set_adc_data_mode(int mode) {
    byte if_mode_value[2];
    byte adc_mode_value[2];
    /* read current values */
    read_adc_register(IFMODE_REG, if_mode_value, 2);
    read_adc_register(ADCMODE_REG, adc_mode_value, 2);

    /* when continuous read mode */
    if (mode == CONTINUOUS_READ_MODE) {
        /* set the adc to continuous read mode, the data register can be read directly when DATA_READY */
        if_mode_value[1] |= 0x08;
        /* enable continuouse conversion mode */
        adc_mode_value[1] &= 0x8F;
    /* when single conversion mode */
    } else if (mode == SINGLE_CONVERSION_MODE) {
        /* diable continuous read mode */
        if_mode_value[1] &= 0xF7;
        /* set the adc to single conversion mode, the ADC conversion has to be triggered manually */
        adc_mode_value[1] &= 0x8F;
        adc_mode_value[1] |= 0x10;
    /* when continuous conversion mode */
    } else if (mode == CONTINUOUS_CONVERSION_MODE) {
        /* diable continuous read mode */
        if_mode_value[1] &= 0xF7;
        /* set the adc to continuous conversion mode, the communication register has to be notified for a ADC read */
        adc_mode_value[1] &= 0x8F;
    /* unknown data conversion mode */
    } else {
        /* return error code */
        return 1;
    }
    adc_data_mode = mode;
    /* write the specified value */
    write_adc_register(IFMODE_REG, if_mode_value, 2);
    write_adc_register(ADCMODE_REG, adc_mode_value, 2);
    /* return error code */
    return 0;
}

/*
==========================================
reads the ADC conversion result
@return byte[] - the ADC conversion result
==========================================
*/
int read_adc_data(byte *value) {
    if (adc_data_mode != CONTINUOUS_READ_MODE) {
        /* send communication register id 0x00 */
        SPI.transfer(0x00);
        /* send read command 0x40 to the data register 0x04 */
        SPI.transfer(0x40 | DATA_REG);
    }
    /* read the received value 24 bits */
    value[0] = SPI.transfer(0x00);
    value[1] = SPI.transfer(0x00);
    value[2] = SPI.transfer(0x00);
    /* when debug enabled */
    if (DEBUG_ENABLED) {
        Serial.print("read: ");
        print_byte(value[0]);
        print_byte(value[1]);
        print_byte(value[2]);
        Serial.println("from reg: 0x04");
    }
    /* return error code */
    return 0;
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

    byte id[2];
     /* read the ADC device ID */
    read_adc_register(ID_REG, id, 2);
    /* check if the id matches 0x30DX, where X is don't care */
    id[1] &= 0xF0;
    bool valid_id = id[0] == 0x30 && id[1] == 0xD0;
    
    /* when debug enabled */
    if (DEBUG_ENABLED) {
        if (valid_id) {
            Serial.println("ADC device ID is valid :)");
        } else {
            Serial.print("ADC device ID is invalid :( ");
            print_byte(id[1]);
            print_byte(id[0]);
            Serial.println();
        }
    }
    /* return if ADC id was valid */
    return valid_id;
}

void setup() {
    /* initiate serial communication */
    Serial.begin(115200);
    /* initiate ADC */
    init_adc();
    /* reset ADC to default state */
    reset_adc();
    /* set ADC configuration */
    /* enable ch0 and ch1 */
    enable_adc_channel(CH0_REG, true);
    enable_adc_channel(CH1_REG, true);
    /* set the adc data mode */
    set_adc_data_mode(CONTINUOUS_READ_MODE);
    /* set the adc samplingrate to 1007 Hz*/
    set_adc_data_speed(SPS_1007);
    /* wait for ADC */
    delay(100);
}

void loop() {
    byte data[3];
    /* when ADC conversion is finished */
    if (DATA_READY) {
        /* read ADC conversion result */
        read_adc_data(data);
        //Serial.write(data[0]);
        //Serial.write(data[1]);
        //Serial.write(data[2]);
    }
}