/*
===================================================================================
library to control the AD7173 ADC

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

#ifndef _AD7173_H_INCLUDED
#define _AD7173_H_INCLUDED

#include "SPI.h"

#if ARDUINO >= 100
#include "Arduino.h"
#else
#include "WProgram.h"
#endif

/* enable or disable debug */
#define DEBUG_ENABLED 0

/* delay for reading and writing registers  */
#define READ_WRITE_DELAY 1

/* ADC channel registers */
#define CH0 0x10
#define CH1 0x11
#define CH2 0x12
#define CH3 0x13
#define CH4 0x14
#define CH5 0x15
#define CH6 0x16
#define CH7 0x17
#define CH8 0x18
#define CH9 0x19
#define CH10 0x1A
#define CH11 0x1B
#define CH12 0x1C
#define CH13 0x1D
#define CH14 0x1E
#define CH15 0x1F

/* ADC analog input registers */
#define AIN0 0x00
#define AIN1 0x01
#define AIN2 0x02
#define AIN3 0x03
#define AIN4 0x04
#define AIN5 0x05
#define AIN6 0x06
#define AIN7 0x07
#define AIN8 0x08
#define AIN9 0x09
#define AIN10 0x0A
#define AIN11 0x0B
#define AIN12 0x0C
#define AIN13 0x0D
#define AIN14 0x0E
#define AIN15 0x0F
#define AIN16 0x10

/* ADC gain registers */
#define GAIN0 0x38
#define GAIN1 0x39
#define GAIN2 0x3A
#define GAIN3 0x3B
#define GAIN4 0x3C
#define GAIN5 0x3D
#define GAIN6 0x3E
#define GAIN7 0x3F

/* ADC setup config register */
#define SETUP0 0x20
#define SETUP1 0x21
#define SETUP2 0x22
#define SETUP3 0x23
#define SETUP4 0x24
#define SETUP5 0x25
#define SETUP6 0x26
#define SETUP7 0x27

/* ADC filter config registers */
#define FILTER0 0x28
#define FILTER1 0x29
#define FILTER2 0x2A
#define FILTER3 0x2B
#define FILTER4 0x2C
#define FILTER5 0x2D
#define FILTER6 0x2E
#define FILTER7 0x2F

/* ADC offset registers */
#define OFFSET0 0x30
#define OFFSET1 0x31
#define OFFSET2 0x32
#define OFFSET3 0x33
#define OFFSET4 0x34
#define OFFSET5 0x35
#define OFFSET6 0x36
#define OFFSET7 0x37

/* ADC filter speed values (samples per second) */
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

/* other ADC registers */
#define ID_REG 0x07
#define DATA_REG 0x04
#define COMMS_REG 0x00
#define IFMODE_REG 0x02
#define STATUS_REG 0x00
#define ADCMODE_REG 0x01
#define GPIOCON_REG 0x06
#define REGCHECK_REG 0x03

/* other ADC channel input registers */
#define REF_POS 0x15
#define REF_NEG 0x16
#define TEMP_SENSOR_POS 0x11
#define TEMP_SENSOR_NEG 0x12

/* ADC setup coding modes */
#define BIPOLAR 1
#define UNIPOLAR 0

/* ADC data conversion modes */
#define CONTINUOUS_READ_MODE 0
#define SINGLE_CONVERSION_MODE 1
#define CONTINUOUS_CONVERSION_MODE 2

/* ADC data ready indicator */
#define DATA_READY digitalRead(MISO) == LOW

class AD7173Class {
public:
	/*
	=====================================
	constructor
	set default ADC setup coding mode
	set default ADC data conversion mode
	=====================================
	*/
	AD7173Class() : m_adc_data_mode(CONTINUOUS_CONVERSION_MODE), m_adc_setup_coding_output(BIPOLAR) {
		/* ... */
	}

	/*
	============================================
	initializes the SPI connection with the ADC
	@return bool - is ADC ID valid
	============================================
	*/
	bool init();

	/*
	==================================================
	cancels the current transaction to resync the ADC
	==================================================
	*/
	void resync();

	/*
	==============================================
	resets the ADC registers to the default state
	==============================================
	*/
	void reset();

	/*
	=====================================
	enables or disables ADC channels
	@param byte - channel
	@param bool - status
	@param byte - optional analog input 1
	@param byte - optional analog input 2
	@return int - error code
	=====================================
	*/
	int enable_channel(byte, bool, byte = NULL, byte = NULL);

	/*
	==========================================
	sets the ADC filters data conversion rate
	@param int - speed of conversion
	@return int - error code
	==========================================
	*/
	int set_filter_speed(byte, byte);

	/*
	================================
	sets the ADC setups coding mode
	@param byte - setup register
	@param int - coding mode
	@return int - error code
	================================
	*/
	int set_setup_coding(byte, int);

	/*
	=========================
	sets the ADC data mode
	@param int - data mode
	@return int - error code
	=========================
	*/
	int set_data_mode(int);

	/*
	==========================================
	gets the ADC conversion result
	@return byte[] - the ADC conversion result
	==========================================
	*/
	int get_data(byte *);

	/*
	=============================================
	gets the current conversion results channel
	@param byte - current data channel
	@return int - error code
	=============================================
	*/
	int get_current_data_channel(byte &);

private:
	/* ADC data mode */
	int m_adc_data_mode;

	/* ADC setup coding mode */
	int m_adc_setup_coding_output;

	/*
	===========================
	print bytes in nice format
	@param byte - byte to print
	===========================
	*/
	void print_byte(byte);

	/*
	=========================================
	writes to a desired ADC register
	@param byte - the register where to write
	@param  byte[] - the bytes to write
	@param int - the length of bytes to write
	=========================================
	*/
	int write_register(byte, byte *, int);

	/*
	=============================================
	reads from a desired ADC register
	@param byte - the register to read
	@param int - the length of bytes to read
	@return byte[] - the ADC register read result
	=============================================
	*/
	int read_register(byte, byte *, int);
};

extern AD7173Class AD7173;

#endif