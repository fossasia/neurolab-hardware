/*
=================================
library to control the AD7173 ADC
=================================
*/
#include "AD7173.h"

AD7173Class AD7173;

bool AD7173Class::init() {
	/* initiate SPI communication */
	SPI.begin();
	/* use SPI mode 3 */
	SPI.setDataMode(SPI_MODE3);
	/* resync the ADC */
	this->resync();

	byte id[2];
	 /* read the ADC device ID */
	this->read_register(ID_REG, id, 2);
	/* check if the id matches 0x30DX, where X is don't care */
	id[1] &= 0xF0;
	bool valid_id = id[0] == 0x30 && id[1] == 0xD0;
	
	/* when debug enabled */
	if (DEBUG_ENABLED) {
		if (valid_id) {
			Serial.println("init: ADC device ID is valid :)");
		} else {
			Serial.print("init: ADC device ID is invalid :( ");
			this->print_byte(id[0]);
			this->print_byte(id[1]);
			Serial.println();
		}
	}
	/* return validity of ADC device ID */
	return valid_id;
}

void AD7173Class::reset() {
	/* sending at least 64 high bits returns ADC to default state */
	for (int i = 0; i < 8; i++) {
		SPI.transfer(0xFF);
	}
}

void AD7173Class::resync() {
	/* toggle the chip select */
	digitalWrite(SS, HIGH);
	delay(1);
	digitalWrite(SS, LOW);
}

void AD7173Class::print_byte(byte value) {
	char format[10];
	sprintf(format, "0x%.2X ", value);
	Serial.print(format);
}

int AD7173Class::write_register(byte reg, byte *value, int write_len) {
	/* when desired register is invalid */
	if (reg < 0x00 || reg > 0x3F) {
		/* when debug enabled */
		if (DEBUG_ENABLED) {
			this->print_byte(reg);
			Serial.println("write register: register out of range");
		}
		/* return error code */
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
		Serial.print("write register: wrote [ ");
		for (int i = 0; i < write_len; i++) {
			this->print_byte(value[i]);
		}
		Serial.print("] to reg [ ");
		this->print_byte(reg);
		Serial.println("]");
	}
	/* TODO: find out correct delay */
	delay(READ_WRITE_DELAY);
	/* return error code */
	return 0;
}

int AD7173Class::read_register(byte reg, byte *value, int read_len) {
	/* when desired register is invalid */
	if (reg < 0x00 || reg > 0x3F) {
		/* when debug enabled */
		if (DEBUG_ENABLED) {
			this->print_byte(reg);
			Serial.println("read register: register out of range");
		}
		/* return error code */
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
		Serial.print("read register: read [ ");
		for (int i = 0; i < read_len; i++) {
			this->print_byte(value[i]);
		}
		Serial.print("] from reg [ ");
		this->print_byte(reg);
		Serial.println("]");
	}
	/* TODO: find out correct delay */
	delay(READ_WRITE_DELAY);
	/* return error code */
	return 0;
}

int AD7173Class::enable_channel(byte channel, bool status, byte ain1, byte ain2) {
	/* when channel out of range */
	if (channel < CH0 || channel > CH15) {
		/* when debug enabled */
		if (DEBUG_ENABLED) {
			this->print_byte(channel);
			Serial.println("enable channel: channel out of range");
		}
		/* return error code */
		return 1;
	}
	byte value[2];
	/* read desired channel configuration */
	this->read_register(channel, value, 2);
	/* clear the enable bit */
	value[0] &= ~(1 << 7);
	/* enable or disable this channel */
	value[0] |= (status << 7);
	/* define the default analog input */
	byte ain = ((channel & 0x0F) << 1);
	/* set to default state */
	value[0] &= 0xFC;
	value[1] = 0x00;

	/* when analog input 1 was given */
	if (ain1 != NULL) {
		/* set first analog input */
		value[0] |= (ain1 >> 3);
		value[1] |= (ain1 << 5);
		/* when unipolar coding */
		if (this->m_adc_setup_coding_output == UNIPOLAR) {
			/* set second analog input to same as first */
			value[1] |= ain1;
		/* when not unipolar coding and analog input 2 was given */
		} else if (ain2 != NULL) {
			/* set second analog input */
			value[1] |= ain2;
		}
	/* when no analog inputs were given and in BIPOLAR mode */
	} else if (this->m_adc_setup_coding_output == BIPOLAR) {
		/* set automatic values for BIPOLAR output */
		value[0] |= (ain >> 3);
		value[1] |= (ain << 5);
		value[1] |= (ain + 1);
	/* otherwise */
	} else {
		/* set automatic value for UNIPOLAR output */
		value[0] |= ((channel & 0x0F) >> 3);
		value[1] |= ((channel & 0x0F) << 5);
		value[1] |= (channel & 0x0F);
	}

	/* update desired channel configuration */
	this->write_register(channel, value, 2);
	/* return error code */
	return 0;
}

int AD7173Class::set_filter_speed(byte filter, byte data_speed) {
	/* when filter out of range */
	if (filter < FILTER0 || filter > FILTER7) {
		/* when debug enabled */
		if (DEBUG_ENABLED) {
			this->print_byte(filter);
			Serial.println("set filter speed: filter out of range");
		}
		/* return error code */
		return 1;
	}
	byte value[2];
	/* get the current register value */
	this->read_register(filter, value, 2);
	/* set the speed to default */
	value[1] &= 0xE0;
	/* set the desired speed */
	value[1] |= data_speed;
	/* write the new register value */
	this->write_register(filter, value, 2);
	/* return error code */
	return 0;
}

int AD7173Class::set_setup_coding(byte setup, int coding_mode) {
	/* when setup out of range */
	if (setup < SETUP0 || setup > SETUP7) {
		/* when debug enabled */
		if (DEBUG_ENABLED) {
			this->print_byte(setup);
			Serial.println("set setup coding: setup out of range");
		}
		/* return error code */
		return 1;
	}
	byte value[2];
	/* get the current register value */
	this->read_register(setup, value, 2);
	/* set the coding mode to default */
	value[0] &= 0x7F;
	/* set the desired coding */
	value[0] |= (coding_mode << 7);
	/* write the new register value */
	this->write_register(setup, value, 2);
	/* set to new coding mode */
	this->m_adc_setup_coding_output = coding_mode;
	/* return error code */
	return 0;
}

int AD7173Class::set_data_mode(int data_mode) {
	/* when data mode out of range */
	if (data_mode < 0 || data_mode > 2) {
		/* when debug enabled */
		if (DEBUG_ENABLED) {
			Serial.print(data_mode + " ");
			Serial.println("set data mode: data mode out of range");
		}
		/* return error code */
		return 1;
	}
	byte if_mode_value[2];
	byte adc_mode_value[2];
	/* get current register values */
	this->read_register(IFMODE_REG, if_mode_value, 2);
	this->read_register(ADCMODE_REG, adc_mode_value, 2);
	/* set to default read mode */
	adc_mode_value[1] &= 0x8F;

	/* when continuous read mode, the data register can be read directly when DATA_READY */
	if (data_mode == CONTINUOUS_READ_MODE) {
		/* set the ADC to continuous read mode */
		if_mode_value[1] |= 0x80;
	/* when single conversion mode, the ADC conversion has to be triggered manually */
	} else if (data_mode == SINGLE_CONVERSION_MODE) {
		/* diable continuous read mode */
		if_mode_value[1] &= 0xF7;
		/* set the ADC to single conversion mode */
		adc_mode_value[1] |= 0x10;
	/* when continuous conversion mode, the communication register has to be notified for a ADC read */
	} else if (data_mode == CONTINUOUS_CONVERSION_MODE) {
		/* diable continuous read mode */
		if_mode_value[1] &= 0xF7;
	/* unknown data conversion mode */
	} else {
		/* return error code */
		return 1;
	}
	this->m_adc_data_mode = data_mode;
	/* write the desired register value */
	this->write_register(ADCMODE_REG, adc_mode_value, 2);
	this->write_register(IFMODE_REG, if_mode_value, 2);
	/* return error code */
	return 0;
}

int AD7173Class::get_data(byte *value) {
	/* when not in continuous read mode, send the read command */
	if (this->m_adc_data_mode != CONTINUOUS_READ_MODE) {
		/* send communication register id 0x00 */
		SPI.transfer(0x00);
		/* send read command 0x40 to the data register 0x04 */
		SPI.transfer(0x40 | DATA_REG);
	}
	/* get the ADC conversion result (24 bits) */
	value[0] = SPI.transfer(0x00);
	value[1] = SPI.transfer(0x00);
	value[2] = SPI.transfer(0x00);

	/* when debug enabled */
	if (DEBUG_ENABLED) {
		Serial.print("get data: read [ ");
		this->print_byte(value[0]);
		this->print_byte(value[1]);
		this->print_byte(value[2]);
		Serial.println("] from reg [ 0x04 ]");
	}
	/* return error code */
	return 0;
}

int AD7173Class::get_current_data_channel(byte &channel) {
	byte value[1];
	/* read ADC status register */
	this->read_register(STATUS_REG, value, 1);
	/* assign to return channel register value */
	channel = value[0] & 0x0F;
	/* return error code */
	return 0;
}