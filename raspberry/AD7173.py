import time
# http://tightdev.net/SpiDev_Doc.pdf
import spidev

class ADC7173:
    # enables/disables debug prints
    DEBUG_ENABLED = 0
    # TODO: find out correct delay
    TRANSFER_DELAY = 0.001

    # ADC channel registers
    CH0 = 0x10
    CH1 = 0x11
    CH2 = 0x12
    CH3 = 0x13
    CH4 = 0x14
    CH5 = 0x15
    CH6 = 0x16
    CH7 = 0x17
    CH8 = 0x18
    CH9 = 0x19
    CH10 = 0x1A
    CH11 = 0x1B
    CH12 = 0x1C
    CH13 = 0x1D
    CH14 = 0x1E
    CH15 = 0x1F

    # ADC analog input registers
    AIN0 = 0x00
    AIN1 = 0x01
    AIN2 = 0x02
    AIN3 = 0x03
    AIN4 = 0x04
    AIN5 = 0x05
    AIN6 = 0x06
    AIN7 = 0x07
    AIN8 = 0x08
    AIN9 = 0x09
    AIN10 = 0x0A
    AIN11 = 0x0B
    AIN12 = 0x0C
    AIN13 = 0x0D
    AIN14 = 0x0E
    AIN15 = 0x0F
    AIN16 = 0x10

    # ADC gain registers
    GAIN0 = 0x38
    GAIN1 = 0x39
    GAIN2 = 0x3A
    GAIN3 = 0x3B
    GAIN4 = 0x3C
    GAIN5 = 0x3D
    GAIN6 = 0x3E
    GAIN7 = 0x3F

    # ADC setup config register
    SETUP0 = 0x20
    SETUP1 = 0x21
    SETUP2 = 0x22
    SETUP3 = 0x23
    SETUP4 = 0x24
    SETUP5 = 0x25
    SETUP6 = 0x26
    SETUP7 = 0x27

    # ADC filter config registers
    FILTER0 = 0x28
    FILTER1 = 0x29
    FILTER2 = 0x2A
    FILTER3 = 0x2B
    FILTER4 = 0x2C
    FILTER5 = 0x2D
    FILTER6 = 0x2E
    FILTER7 = 0x2F

    # ADC offset registers
    OFFSET0 = 0x30
    OFFSET1 = 0x31
    OFFSET2 = 0x32
    OFFSET3 = 0x33
    OFFSET4 = 0x34
    OFFSET5 = 0x35
    OFFSET6 = 0x36
    OFFSET7 = 0x37

    # ADC filter speed values (samples per second)
    SPS_1 = 0x16
    SPS_2 = 0x15
    SPS_5 = 0x14
    SPS_10 = 0x13
    SPS_16 = 0x12
    SPS_20 = 0x11
    SPS_50 = 0x10
    SPS_60 = 0x0F
    SPS_100 = 0x0E
    SPS_200 = 0x0D
    SPS_381 = 0x0C
    SPS_504 = 0x0B
    SPS_1007 = 0x0A
    SPS_2597 = 0x09
    SPS_5208 = 0x08
    SPS_10417 = 0x07
    SPS_15625 = 0x06
    SPS_31250 = 0x00

    # other ADC registers
    ID_REG = 0x07
    DATA_REG = 0x04
    COMMS_REG = 0x00
    IFMODE_REG = 0x02
    STATUS_REG = 0x00
    ADCMODE_REG = 0x01
    GPIOCON_REG = 0x06
    REGCHECK_REG = 0x03

    # other ADC channel input registers
    REF_POS = 0x15
    REF_NEG = 0x16
    TEMP_SENSOR_POS = 0x11
    TEMP_SENSOR_NEG = 0x12

    # ADC setup coding modes
    BIPOLAR = 1
    UNIPOLAR = 0

    # ADC data conversion modes
    CONTINUOUS_READ_MODE = 0
    SINGLE_CONVERSION_MODE = 1
    CONTINUOUS_CONVERSION_MODE = 2

    # TODO: setup coding is different 4 each setup
    adc_coding_mode = BIPOLAR
    adc_data_mode = CONTINUOUS_CONVERSION_MODE

    # SPI object
    spi = None

    def init(self):
        self.spi = spidev.SpiDev() # create SPI object
        self.spi.open(0, 0) # open SPI port 0, device (CS) 0
        self.spi.mode = 3 # use SPI mode 3, sets Clock Polarity and Phase [CPOL|CPHA] configuration

        # resync the ADC
        self.resync()
        # read the ADC device ID */
        value = self.read_register(self.ID_REG, 2);
        # check if the id matches 0x30DX, where X is don't care
        value[1] &= 0xF0
        valid_id = value[0] == 0x30 and value[1] == 0xD0

        # when debug enabled
        if self.DEBUG_ENABLED:
            if valid_id:
                print "init: ADC device ID is valid :)"
            else:
                print "init: ADC device ID is invalid :(", map(hex, value)

        # return validity of ADC device ID
        return valid_id

    # returns ADC to default state
    def reset(self):
        # sending at least 64 high bits
        self.spi.xfer2([0xFF] * 8)

    # resyncs the ADC communication
    def resync(self):
        # toggle the chip select
        self.spi.cshigh = True
        time.sleep(self.TRANSFER_DELAY)
        self.spi.cshigh = False

    # reads a register from the ADC
    def write_register(self, reg, value):
        # when desired register is invalid
        if reg < 0x00 or reg > 0x3F:
            # when debug enabled
            if self.DEBUG_ENABLED: print "write_register: register out of range", hex(reg)
            return

        # send communication register id 0x00
        # send desired register 0x00 - 0xFF
        # write the desired value
        self.spi.xfer2([0x00, (0x00 | reg)] + value)
        # when debug enabled
        if self.DEBUG_ENABLED: print "write_register: wrote", map(hex, value), "to reg", hex(reg)
        time.sleep(self.TRANSFER_DELAY)

    def read_register(self, reg, read_len):
        # when desired register is invalid
        if reg < 0x00 or reg > 0x3F:
            # when debug enabled
            if self.DEBUG_ENABLED: print "read_register: register out of range", hex(reg)
            return []

        # register value
        value = []
        # send communication register id 0x00
        # send desired register 0x00 - 0xFF
        # read the desired value
        value = self.spi.xfer2([0x00, (0x40 | reg)] + ([0x00] * read_len))
        # ignore first 2 bytes
        value = [value[2], value[3]]
        # when debug enabled
        if self.DEBUG_ENABLED: print "read_register: read", map(hex, value), "from reg", hex(reg)
        time.sleep(self.TRANSFER_DELAY)
        # return the register value
        return value

    def enable_channel(self, channel, enable, ain1, ain2):
        # when channel out of range
        if channel < self.CH0 or channel > self.CH15:
            # when debug enabled
            if self.DEBUG_ENABLED: print "enable_channel: channel out of range", hex(channel)
            return

        # read desired channel configuration
        value = self.read_register(channel, 2)
        # clear the enable bit
        value[0] = value[0] & ~(1 << 7)
        # enable or disable this channel
        value[0] = value[0] | (enable << 7)
        # define the default analog input
        ain = ((channel & 0x0F) << 1)
        # set to default state
        value[0] = value[0] & 0xFC
        value[1] = 0x00

        # when analog input 1 was given
        if ain1 != None:
            # set first analog input
            value[0] = value[0] | (ain1 >> 6)
            value[1] = value[1] | (ain1 << 5)
            # when unipolar coding
            if self.adc_coding_mode == self.UNIPOLAR:
                # set second analog input to same as first
                value[1] = value[1] | ain1
            # when not unipolar coding and analog input 2 was given
            elif ain2 != None:
                # set second analog input
                value[1] = value[1] | ain2
        # when no analog inputs were given and in BIPOLAR mode
        elif self.adc_coding_mode == self.BIPOLAR:
            # set automatic values for BIPOLAR output
            value[0] = value[0] | (ain >> 6)
            value[1] = value[1] | (ain << 5)
            value[1] = value[1] | (ain + 1)
        # otherwise
        else:
            # set automatic value for UNIPOLAR output
            value[0] = value[0] | ((channel & 0x0F) >> 6)
            value[1] = value[1] | ((channel & 0x0F) << 5)
            value[1] = value[1] | (channel & 0x0F)

        # update desired channel configuration
        self.write_register(channel, [value[0], value[1]])

    def set_filter_speed(self, filter, data_speed):
        # when filter out of range
        if filter < self.FILTER0 or filter > self.FILTER7:
            # when debug enabled
            if self.DEBUG_ENABLED: print "set_filter_speed: filter out of range", hex(filter)
            return

        # get the current filter configuration
        value = self.read_register(filter, 2)
        # set the speed to default
        value[1] = value[1] & 0xE0
        # set the desired speed
        value[1] = value[1] | data_speed
        # set the new filter configuration
        self.write_register(filter, [value[0], value[1]])

    def set_setup_coding_mode(self, setup, coding_mode):
        # when setup out of range
        if setup < self.SETUP0 or setup > self.SETUP7:
            # when debug enabled
            if self.DEBUG_ENABLED: print "set_setup_coding_mode: setup out of range", hex(setup)
            return

        # get the current setup configuration
        value = self.read_register(setup, 2)
        # set the coding mode to default
        value[0] = value[0] & 0x7F
        # set the desired coding
        value[0] = value[0] | (coding_mode << 7)
        # write the new setup configuration
        self.write_register(setup, [value[0], value[1]])
        # remember the new coding mode
        self.adc_coding_mode = coding_mode

    def set_data_mode(self, data_mode):
        # when data mode out of range
        if data_mode < 0 or data_mode > 2:
            # when debug enabled
            if self.DEBUG_ENABLED: print "set_data_mode: data mode out of range", data_mode
            return

        # get current register values
        if_mode_value = self.read_register(self.IFMODE_REG, 2)
        adc_mode_value = self.read_register(self.ADCMODE_REG, 2)
        # set to default read mode
        adc_mode_value[1] = adc_mode_value[1] & 0x8F

        # when continuous read mode, the data register can be read directly when DATA_READY
        if data_mode == self.CONTINUOUS_READ_MODE:
            # set the ADC to continuous read mode
            if_mode_value[1] = if_mode_value[1] | 0x80
        # when single conversion mode, the ADC conversion has to be triggered manually
        elif data_mode == self.SINGLE_CONVERSION_MODE:
            # diable continuous read mode
            if_mode_value[1] = if_mode_value[1] & 0xF7
            # set the ADC to single conversion mode
            adc_mode_value[1] = adc_mode_value[1] | 0x10
        # when continuous conversion mode, the communication register has to be notified for a ADC read
        elif data_mode == self.CONTINUOUS_CONVERSION_MODE:
            # diable continuous read mode
            if_mode_value[1] = if_mode_value[1] & 0xF7

        # remember the new data mode
        self.adc_data_mode = data_mode
        # write the desired register value
        self.write_register(self.ADCMODE_REG, adc_mode_value)
        self.write_register(self.IFMODE_REG, if_mode_value)

    def get_data(self):
        value = None
        # when not in continuous read mode, send the read command
        if self.adc_data_mode != self.CONTINUOUS_READ_MODE:
            # send communication register id 0x00
            # send read command 0x40 to the data register 0x04
            # get the ADC conversion result (24 bits)
            value = self.spi.xfer2([0x00, (0x40 | self.DATA_REG), 0x00, 0x00, 0x00])
            # ignore first 2 bytes
            value = [value[2], value[3], value[4]]
        else:
            # get the ADC conversion result (24 bits)
            value = self.spi.xfer2([0x00] * 3)

        # when debug enabled
        if self.DEBUG_ENABLED: print "get_data: read", map(hex, value), "from reg 0x04"
        # return the conversion result
        return value

    def get_current_data_channel(self):
        # read ADC status register
        value = self.read_register(self.STATUS_REG, 1)
        # return channel register value
        return value & 0x0F

# start mingling with the SPI
adc = ADC7173()
# initiate ADC, returns true if the device ID is valid
adc.init()
# reset ADC registers to the default state
adc.reset()
# set ADC configuration
# enable channel 0 and channel 1 and connect each to 2 analog inputs for bipolar input
# CH0 - CH15
# AIN0 - AIN16, REF_POS, REF_NEG, TEMP_SENSOR_POS, TEMP_SENSOR_NEG
adc.enable_channel(ADC7173.CH0, True, ADC7173.AIN0, ADC7173.AIN1)
adc.enable_channel(ADC7173.CH1, True, ADC7173.AIN2, ADC7173.AIN3)
# set the ADC filter samplingrate to 1007 Hz*/
# FILTER0 - FILTER7
# SPS_1, SPS_2, SPS_5, SPS_10, SPS_16, SPS_20, SPS_50, SPS_60, SPS_100, SPS_200
# SPS_381, SPS_504, SPS_1007, SPS_2597, SPS_5208, SPS_10417, SPS_15625, SPS_31250
adc.set_filter_speed(ADC7173.FILTER0, ADC7173.SPS_1007)
# set the ADC setup coding to BIPLOAR output*/
# SETUP0 - SETUP7
# BIPOLAR, UNIPOLAR
adc.set_setup_coding_mode(ADC7173.SETUP0, ADC7173.BIPOLAR)
# set the ADC data mode
# CONTINUOUS_READ_MODE, SINGLE_CONVERSION_MODE, CONTINUOUS_CONVERSION_MODE
adc.set_data_mode(ADC7173.CONTINUOUS_CONVERSION_MODE)
# wait for the ADC
time.sleep(0.01)
# keep polling CH0 and CH1 values
channel1 = None
channel2 = None
counter = 0
while True:
    print adc.get_data()