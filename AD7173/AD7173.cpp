/*
=================================
library to control the AD7173 ADC
=================================
*/
#include "AD7173.h"

AD7173Class AD7173;

void AD7173Class::print_byte(byte value) {
    char format[10];
    sprintf(format, "0x%.2X ", value);
    Serial.print(format);
}

void AD7173Class::reset() {
    for (int i = 0; i < 16; i++) {
        SPI.transfer(0xFF);
    }
}

void AD7173Class::resync() {
    /* toggle the chip select */
    digitalWrite(SS, HIGH);
    delay(1);
    digitalWrite(SS, LOW);
}

int AD7173Class::set_register(byte reg, byte *value, int write_len) {
    /* when desired register is invalid */
    if (reg < 0x00 || reg > 0x3F) {
        if (DEBUG_ENABLED) {
            print_byte(reg);
            Serial.println("write register out of range");
        }
        return 1;
    }
    /* send communication register id 0x00 */
    SPI.transfer(0x00);
    /* send write command to the desired register 0x00 - 0xFF */
    SPI.transfer(0x00 | reg);
    /* write the desired amount of bytes */
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

int AD7173Class::get_register(byte reg, byte *value, int read_len) {
    /* when desired register is invalid */
    if (reg < 0x00 || reg > 0x3F) {
        if (DEBUG_ENABLED) {
            print_byte(reg);
            Serial.println("read register out of range");
        }
        return 1;
    }
    /* send communication register id 0x00 */
    SPI.transfer(0x00);
    /* send read command to the desired register 0x00 - 0xFF */
    SPI.transfer(0x40 | reg);
    /* read the desired amount of bytes */
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

int AD7173Class::enable_channel(int channel, bool status, byte ain1 = NULL, byte ain2 = NULL) {
    /* when channel out of range */
    if (channel < 0 || channel > 15) {
        if (DEBUG_ENABLED) {
            print_byte(channel);
            Serial.println("enable channel out of range");
        }
        return 1;
    }
    byte value[2];
    /* convert channel number to channel register value */
    byte channel_reg = 0x10 | channel;
    /* read desired channel configuration */
    get_register(channel_reg, value, 2);
    /* clear the enable bit */
    value[0] &= ~(1 << 7);
    /* enable or disable this channel */
    value[0] |= (status << 7);
    /* define the default analog input */
    byte ain = (channel << 1);
    /* set default AINs */
    value[0] = 0xFC;
    value[1] = 0x00;

    /* user desired analog input values */
    if (ain1 != NULL) {
        value[0] |= (ain1 >> 3);
        value[1] |= (ain1 << 5);
        /* when 2 analog input values were set */
        if (ain2 != NULL) {
            value[1] |= ain2;
        }
    /* set automatic values for BIPOLAR output */
    } else if (adc_setup_coding_output == BIPOLAR_CODED_OUTPUT) {
        value[0] |= (ain >> 3);
        value[1] |= (ain << 5);
        value[1] |= (ain + 1);
    /* set automatic value for UNIPOLAR output */
    } else {
        value[0] |= (channel >> 3);
        value[1] |= (channel << 5);
        value[1] |= channel;
    }

    /* update desired channel configuration */
    set_register(channel_reg, value, 2);
    /* return error code */
    return 0;
}

int AD7173Class::set_filter_speed(byte filtcon, byte data_speed) {
    byte value[2];
    /* read the current register value */
    get_register(filtcon, value, 2);
    /* set the speed to default */
    value[1] &= 0xE0;
    /* set the desired speed */
    value[1] |= data_speed;
    /* write the new register value */
    set_register(filtcon, value, 2);
    /* return error code */
    return 0;
}

int AD7173Class::set_setup_codig(byte setupcon, int coding_mode) {
    byte value[2];
    /* read the current register value */
    get_register(setupcon, value, 2);
    /* set the coding mode to default */
    value[0] &= 0x7F;
    /* set the desired coding */
    value[0] |= (coding_mode << 7);
    /* write the new register value */
    set_register(setupcon, value, 2);
    /* set to new coding mode */
    adc_setup_coding_output = coding_mode;
    /* return error code */
    return 0;
}

int AD7173Class::set_data_mode(int mode) {
    byte if_mode_value[2];
    byte adc_mode_value[2];
    /* read current register values */
    get_register(IFMODE_REG, if_mode_value, 2);
    get_register(ADCMODE_REG, adc_mode_value, 2);
    /* set to default read mode */
    adc_mode_value[1] &= 0x8F;

    /* when continuous read mode, the data register can be read directly when DATA_READY */
    if (mode == CONTINUOUS_READ_MODE) {
        /* set the ADC to continuous read mode */
        if_mode_value[1] |= 0x80;
    /* when single conversion mode, the ADC conversion has to be triggered manually */
    } else if (mode == SINGLE_CONVERSION_MODE) {
        /* diable continuous read mode */
        if_mode_value[1] &= 0xF7;
        /* set the ADC to single conversion mode */
        adc_mode_value[1] |= 0x10;
    /* when continuous conversion mode, the communication register has to be notified for a ADC read */
    } else if (mode == CONTINUOUS_CONVERSION_MODE) {
        /* diable continuous read mode */
        if_mode_value[1] &= 0xF7;
    /* unknown data conversion mode */
    } else {
        /* return error code */
        return 1;
    }
    adc_data_mode = mode;
    /* write the desired register value */
    set_register(ADCMODE_REG, adc_mode_value, 2);
    set_register(IFMODE_REG, if_mode_value, 2);
    /* return error code */
    return 0;
}

int AD7173Class::get_data(byte *value) {
    /* when not in continuous read mode, send the read command */
    if (adc_data_mode != CONTINUOUS_READ_MODE) {
        /* send communication register id 0x00 */
        SPI.transfer(0x00);
        /* send read command 0x40 to the data register 0x04 */
        SPI.transfer(0x40 | DATA_REG);
    }
    /* read the received value (24 bits) */
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

int AD7173Class::get_current_data_channel(int &channel) {
    byte value[1];
    /* read ADC status register */
    get_register(STATUS_REG, value, 1);
    /* filter out channel register value */
    channel = value[0] & 0x0F;
    /* return error code */
    return 0;
}

bool AD7173Class::init() {
    /* initiate SPI communication */
    SPI.begin();
    /* use SPI mode 3 */
    SPI.setDataMode(SPI_MODE3);
    /* resync the ADC */
    resync();

    byte id[2];
     /* read the ADC device ID */
    get_register(ID_REG, id, 2);
    /* check if the id matches 0x30DX, where X is don't care */
    id[1] &= 0xF0;
    bool valid_id = id[0] == 0x30 && id[1] == 0xD0;
    
    /* when debug enabled */
    if (DEBUG_ENABLED) {
        if (valid_id) {
            Serial.println("ADC device ID is valid :)");
        } else {
            Serial.print("ADC device ID is invalid :( ");
            print_byte(id[0]);
            print_byte(id[1]);
            Serial.println();
        }
    }
    /* return if ADC id was valid */
    return valid_id;
}