#include <SPI.h>
#include <AD7173.h>

void setup() {
    /* initiate serial communication */
    Serial.begin(115200);
    /* initiate ADC, return true if device ID is valid */
    AD7173.init();
    /* reset ADC registers to the default state */
    AD7173.reset();
    /* set ADC configuration */
    /* enable ch0 and ch1 and connect each to 2 analog inputs for bipolar input */
    /* AIN0, AIN1, AIN2, AIN3, AIN4, AIN5, AIN6, AIN7, AIN8, AIN9, AIN10, AIN11, AIN12 */
    /* AIN13, AIN14, AIN15, AIN16, REF_POS, REF_NEG, TEMP_SENSOR_POS, TEMP_SENSOR_NEG */
    AD7173.enable_channel(0, true, AIN0, AIN1);
    AD7173.enable_channel(1, true, AIN2, AIN3);
    /* set the ADC data mode */
    /* CONTINUOUS_READ_MODE, SINGLE_CONVERSION_MODE, CONTINUOUS_CONVERSION_MODE */
    AD7173.set_data_mode(CONTINUOUS_READ_MODE);
    /* set the ADC filter samplingrate to 1007 Hz*/
    /* SPS_1, SPS_2, SPS_5, SPS_10, SPS_16, SPS_20, SPS_50, SPS_60, SPS_100, SPS_200 */
    /* SPS_381, SPS_504, SPS_1007, SPS_2597, SPS_5208, SPS_10417, SPS_15625, SPS_31250 */
    AD7173.set_filter_speed(FILTCON0_REG, SPS_1007);
    /* set the ADC setup coding to BIPLOAR output*/
    /* BIPOLAR_CODED_OUTPUT, UNIPOLAR_CODED_OUTPUT */
    AD7173.set_setup_codig(SETUPCON0_REG, BIPOLAR_CODED_OUTPUT);
    /* wait for ADC */
    delay(10);
}

void loop() {
    byte data[3];
    /* when ADC conversion is finished */
    if (DATA_READY) {
        /* read ADC conversion result */
        AD7173.get_data(data);
        int current_channel;
        AD7173.get_current_data_channel(current_channel);
        if (current_channel == 0) {
            /* something lol... */
        }
        //Serial.write(data[0]);
        //Serial.write(data[1]);
        //Serial.write(data[2]);
    }
}