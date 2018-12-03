EESchema Schematic File Version 2
LIBS:power
LIBS:device
LIBS:switches
LIBS:relays
LIBS:motors
LIBS:transistors
LIBS:conn
LIBS:linear
LIBS:regul
LIBS:74xx
LIBS:cmos4000
LIBS:adc-dac
LIBS:memory
LIBS:xilinx
LIBS:microcontrollers
LIBS:dsp
LIBS:microchip
LIBS:analog_switches
LIBS:motorola
LIBS:texas
LIBS:intel
LIBS:audio
LIBS:interface
LIBS:digital-audio
LIBS:philips
LIBS:display
LIBS:cypress
LIBS:siliconi
LIBS:opto
LIBS:atmel
LIBS:contrib
LIBS:valves
LIBS:neuro
LIBS:neurolab-cache
EELAYER 25 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 14
Title "FOSSASIA - NeuroLab"
Date "2018-11-17"
Rev "1"
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Sheet
S 1610 2570 685  185 
U 5B10060A
F0 "External Power" 39
F1 "ExternalPower.sch" 39
F2 "VIN" O R 2295 2620 39 
F3 "12V" I L 1610 2620 39 
F4 "5.5V" I L 1610 2705 39 
F5 "GND" I R 2295 2705 39 
$EndSheet
$Comp
L GND #PWR01
U 1 1 5B10240C
P 2425 2745
F 0 "#PWR01" H 2425 2495 50  0001 C CNN
F 1 "GND" H 2425 2595 39  0000 C CNN
F 2 "" H 2425 2745 50  0001 C CNN
F 3 "" H 2425 2745 50  0001 C CNN
	1    2425 2745
	1    0    0    -1  
$EndComp
$Sheet
S 2565 2530 765  270 
U 5B103929
F0 "Power Regulator" 39
F1 "PowerRegulator.sch" 39
F2 "VIN" I L 2565 2620 39 
F3 "VCCIO" O R 3330 2580 39 
F4 "GND" I L 2565 2705 39 
F5 "5V" O R 3330 2665 39 
F6 "3.3V" O R 3330 2750 39 
$EndSheet
$Sheet
S 4115 2530 660  525 
U 5B108F6C
F0 "Attenuator" 39
F1 "Attenuator.sch" 39
F2 "GND" I L 4115 3005 39 
F3 "+IN0.4XA" I L 4115 2750 39 
F4 "-IN0.4XA" I L 4115 2665 39 
F5 "+IN0.4XB" I L 4115 2920 39 
F6 "VCCIO" I L 4115 2580 39 
F7 "+OUTB" O R 4775 2920 39 
F8 "+OUTA" O R 4775 2750 39 
F9 "-OUTA" O R 4775 2665 39 
F10 "-OUTB" O R 4775 2835 39 
F11 "-IN0.4XB" I L 4115 2835 39 
$EndSheet
$Sheet
S 5430 2615 710  355 
U 5B112CE8
F0 "RC Filter 1" 39
F1 "RCFilterBlock1.sch" 39
F2 "+OUTA'" O R 6140 2750 39 
F3 "-OUTA'" O R 6140 2665 39 
F4 "+OUTB'" O R 6140 2920 39 
F5 "-OUTB'" O R 6140 2835 39 
F6 "+OUTA" I L 5430 2750 39 
F7 "-OUTA" I L 5430 2665 39 
F8 "+OUTB" I L 5430 2920 39 
F9 "-OUTB" I L 5430 2835 39 
$EndSheet
$Sheet
S 5430 3120 710  530 
U 5B10B2AE
F0 "MAX7480 Block" 39
F1 "MAX7480Block.sch" 39
F2 "CLKIN" I L 5430 3595 39 
F3 "+5V" I L 5430 3510 39 
F4 "OUT1" O R 6140 3215 39 
F5 "OUT2" O R 6140 3300 39 
F6 "OUT3" O R 6140 3385 39 
F7 "OUT4" O R 6140 3470 39 
F8 "IN3" I L 5430 3340 39 
F9 "IN2" I L 5430 3255 39 
F10 "IN1" I L 5430 3170 39 
F11 "IN4" I L 5430 3425 39 
F12 "GND" I R 6140 3555 39 
$EndSheet
$Sheet
S 4195 3460 760  275 
U 5B10D013
F0 "Clock Block" 39
F1 "ClockBlock.sch" 39
F2 "+5V" I L 4195 3510 39 
F3 "EXCLK" I L 4195 3595 39 
F4 "GND" I L 4195 3680 39 
F5 "CLK" O R 4955 3595 39 
$EndSheet
$Sheet
S 6585 3165 695  440 
U 5B117A7C
F0 "RC Filter 2" 39
F1 "RCFilterBlock2.sch" 39
F2 "OUT1'" O R 7280 3250 39 
F3 "OUT2'" O R 7280 3340 39 
F4 "OUT3'" O R 7280 3425 39 
F5 "OUT4'" O R 7280 3515 39 
F6 "IN1" I L 6585 3215 39 
F7 "IN2" I L 6585 3300 39 
F8 "IN3" I L 6585 3385 39 
F9 "IN4" I L 6585 3470 39 
F10 "GND" I L 6585 3555 39 
$EndSheet
$Sheet
S 1605 3020 760  530 
U 5B117C68
F0 "Amplifier Block 1" 39
F1 "Amplifier.sch" 39
F2 "IN-" I L 1605 3240 39 
F3 "IN+" I L 1605 3325 39 
F4 "V+" I R 2365 3070 39 
F5 "V-" I R 2365 3240 39 
F6 "GND" I R 2365 3155 39 
F7 "OP" O R 2365 3325 39 
F8 "+O" O R 2365 3495 39 
F9 "-O" O R 2365 3410 39 
$EndSheet
$Sheet
S 1600 3675 765  530 
U 5B117CFE
F0 "Amplifier Block 2" 39
F1 "Amplifier.sch" 39
F2 "IN-" I L 1600 3895 39 
F3 "IN+" I L 1600 3980 39 
F4 "V+" I R 2365 3725 39 
F5 "V-" I R 2365 3895 39 
F6 "GND" I R 2365 3810 39 
F7 "OP" O R 2365 3980 39 
F8 "+O" O R 2365 4150 39 
F9 "-O" O R 2365 4065 39 
$EndSheet
Text GLabel 765  595  0    39   Input ~ 0
+12V
Text GLabel 765  745  0    39   Input ~ 0
-12V
Text GLabel 765  900  0    39   Input ~ 0
+5.5V
$Comp
L GND #PWR02
U 1 1 5B198EFA
P 765 1250
F 0 "#PWR02" H 765 1000 50  0001 C CNN
F 1 "GND" H 765 1100 39  0000 C CNN
F 2 "" H 765 1250 50  0001 C CNN
F 3 "" H 765 1250 50  0001 C CNN
	1    765  1250
	1    0    0    -1  
$EndComp
$Comp
L PWR_FLAG #FLG03
U 1 1 5B199772
P 840 1190
F 0 "#FLG03" H 840 1265 50  0001 C CNN
F 1 "PWR_FLAG" V 835 1445 39  0000 C CNN
F 2 "" H 840 1190 50  0001 C CNN
F 3 "" H 840 1190 50  0001 C CNN
	1    840  1190
	0    1    1    0   
$EndComp
$Comp
L PWR_FLAG #FLG04
U 1 1 5B199CDA
P 840 900
F 0 "#FLG04" H 840 975 50  0001 C CNN
F 1 "PWR_FLAG" V 835 1155 39  0000 C CNN
F 2 "" H 840 900 50  0001 C CNN
F 3 "" H 840 900 50  0001 C CNN
	1    840  900 
	0    1    1    0   
$EndComp
$Comp
L PWR_FLAG #FLG05
U 1 1 5B19A242
P 840 745
F 0 "#FLG05" H 840 820 50  0001 C CNN
F 1 "PWR_FLAG" V 835 1000 39  0000 C CNN
F 2 "" H 840 745 50  0001 C CNN
F 3 "" H 840 745 50  0001 C CNN
	1    840  745 
	0    1    1    0   
$EndComp
$Comp
L PWR_FLAG #FLG06
U 1 1 5B19A3D6
P 840 595
F 0 "#FLG06" H 840 670 50  0001 C CNN
F 1 "PWR_FLAG" V 835 850 39  0000 C CNN
F 2 "" H 840 595 50  0001 C CNN
F 3 "" H 840 595 50  0001 C CNN
	1    840  595 
	0    1    1    0   
$EndComp
Text GLabel 1495 2705 0    39   Input ~ 0
+5.5V
Text GLabel 1495 2620 0    39   Input ~ 0
+12V
$Comp
L GND #PWR07
U 1 1 5B1A7762
P 4020 3085
F 0 "#PWR07" H 4020 2835 50  0001 C CNN
F 1 "GND" H 4020 2935 39  0000 C CNN
F 2 "" H 4020 3085 50  0001 C CNN
F 3 "" H 4020 3085 50  0001 C CNN
	1    4020 3085
	1    0    0    -1  
$EndComp
Text GLabel 2415 3070 2    39   Input ~ 0
+12V
Text GLabel 2415 3240 2    39   Input ~ 0
-12V
Text GLabel 2415 3895 2    39   Input ~ 0
-12V
Text GLabel 2415 3725 2    39   Input ~ 0
+12V
$Comp
L GND #PWR08
U 1 1 5B1B631E
P 2725 3195
F 0 "#PWR08" H 2725 2945 50  0001 C CNN
F 1 "GND" H 2810 3185 39  0000 C CNN
F 2 "" H 2725 3195 50  0001 C CNN
F 3 "" H 2725 3195 50  0001 C CNN
	1    2725 3195
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR09
U 1 1 5B1B6BA1
P 2725 3850
F 0 "#PWR09" H 2725 3600 50  0001 C CNN
F 1 "GND" H 2810 3840 39  0000 C CNN
F 2 "" H 2725 3850 50  0001 C CNN
F 3 "" H 2725 3850 50  0001 C CNN
	1    2725 3850
	1    0    0    -1  
$EndComp
Text GLabel 765  1055 0    39   Input ~ 0
+5V
$Comp
L PWR_FLAG #FLG010
U 1 1 5B1BEBFC
P 840 1055
F 0 "#FLG010" H 840 1130 50  0001 C CNN
F 1 "PWR_FLAG" V 835 1310 39  0000 C CNN
F 2 "" H 840 1055 50  0001 C CNN
F 3 "" H 840 1055 50  0001 C CNN
	1    840  1055
	0    1    1    0   
$EndComp
Text GLabel 3400 2665 2    39   Input ~ 0
+5V
Text GLabel 4085 3510 0    39   Input ~ 0
+5V
$Comp
L GND #PWR011
U 1 1 5B1D8B2E
P 4060 3815
F 0 "#PWR011" H 4060 3565 50  0001 C CNN
F 1 "GND" H 4145 3805 39  0000 C CNN
F 2 "" H 4060 3815 50  0001 C CNN
F 3 "" H 4060 3815 50  0001 C CNN
	1    4060 3815
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR012
U 1 1 5B1FF5E0
P 6340 3650
F 0 "#PWR012" H 6340 3400 50  0001 C CNN
F 1 "GND" H 6340 3500 39  0000 C CNN
F 2 "" H 6340 3650 50  0001 C CNN
F 3 "" H 6340 3650 50  0001 C CNN
	1    6340 3650
	1    0    0    -1  
$EndComp
$Sheet
S 7975 2275 650  865 
U 5BF2F8C6
F0 "ADConverter" 39
F1 "ADConverter.sch" 39
F2 "GND" I R 8625 2410 39 
F3 "+5.0V" I R 8625 3005 39 
F4 "+3.3V" I R 8625 2920 39 
F5 "AIN13" O L 7975 3090 39 
F6 "AIN12" O L 7975 3005 39 
F7 "AIN11" O L 7975 2920 39 
F8 "AIN10" O L 7975 2835 39 
F9 "AIN9" O L 7975 2750 39 
F10 "AIN8" O L 7975 2665 39 
F11 "AIN7" O L 7975 2580 39 
F12 "AIN6" O L 7975 2495 39 
F13 "AIN4" O L 7975 2325 39 
F14 "AIN5" O L 7975 2410 39 
F15 "DO" O R 8625 2835 39 
F16 "DI" I R 8625 2750 39 
F17 "SCL" I R 8625 2665 39 
F18 "CS" I R 8625 2580 39 
F19 "VIN" I R 8625 2495 39 
$EndSheet
Text GLabel 3400 2750 2    39   Input ~ 0
+3V
Text GLabel 8880 3005 2    39   Input ~ 0
+5V
Text GLabel 8875 2920 2    39   Input ~ 0
+3V
$Comp
L GND #PWR013
U 1 1 5BF43BE5
P 1345 3630
F 0 "#PWR013" H 1345 3380 50  0001 C CNN
F 1 "GND" H 1430 3620 39  0000 C CNN
F 2 "" H 1345 3630 50  0001 C CNN
F 3 "" H 1345 3630 50  0001 C CNN
	1    1345 3630
	1    0    0    -1  
$EndComp
$Sheet
S 1760 5130 520  185 
U 5BF55BB5
F0 "Cap Bank" 39
F1 "CapBank.sch" 39
F2 "+12V" I L 1760 5180 30 
F3 "-12V" I L 1760 5260 30 
F4 "GND" I R 2280 5220 30 
$EndSheet
$Comp
L GND #PWR014
U 1 1 5BF5C706
P 2495 5345
F 0 "#PWR014" H 2495 5095 50  0001 C CNN
F 1 "GND" H 2580 5335 39  0000 C CNN
F 2 "" H 2495 5345 50  0001 C CNN
F 3 "" H 2495 5345 50  0001 C CNN
	1    2495 5345
	1    0    0    -1  
$EndComp
Text GLabel 1605 5180 0    39   Input ~ 0
+12V
Text GLabel 1605 5260 0    39   Input ~ 0
-12V
$Sheet
S 1480 6230 560  295 
U 5BF6F22D
F0 "USB Power" 39
F1 "USBPower.sch" 39
F2 "GND" O R 2040 6380 39 
F3 "5.5V" O R 2040 6460 39 
F4 "+5V" I R 2040 6295 39 
F5 "+12V" O L 1480 6335 39 
F6 "-12V" O L 1480 6420 39 
$EndSheet
$Comp
L GS2 J24
U 1 1 5BFCE92A
P 7825 3360
F 0 "J24" H 7925 3510 39  0000 C CNN
F 1 "GS2" H 7925 3211 39  0000 C CNN
F 2 "Connectors:GS2" V 7899 3360 50  0001 C CNN
F 3 "" H 7825 3360 50  0001 C CNN
	1    7825 3360
	1    0    0    -1  
$EndComp
NoConn ~ 7975 3005
Text GLabel 3625 2480 0    39   Input ~ 0
VCCIO
Text GLabel 7690 3635 0    39   Input ~ 0
VCCIO
$Comp
L GS2 J20
U 1 1 5BFDBEA7
P 6620 1750
F 0 "J20" H 6660 1890 39  0000 C CNN
F 1 "GS2" V 6580 1575 39  0000 C CNN
F 2 "Connectors:GS2" V 6694 1750 50  0001 C CNN
F 3 "" H 6620 1750 50  0001 C CNN
	1    6620 1750
	1    0    0    -1  
$EndComp
$Comp
L GS2 J21
U 1 1 5BFDE58D
P 6720 1750
F 0 "J21" H 6760 1890 39  0000 C CNN
F 1 "GS2" V 6680 1575 39  0000 C CNN
F 2 "Connectors:GS2" V 6794 1750 50  0001 C CNN
F 3 "" H 6720 1750 50  0001 C CNN
	1    6720 1750
	1    0    0    -1  
$EndComp
$Comp
L GS2 J22
U 1 1 5BFDE7F0
P 6820 1750
F 0 "J22" H 6860 1890 39  0000 C CNN
F 1 "GS2" V 6780 1575 39  0000 C CNN
F 2 "Connectors:GS2" V 6894 1750 50  0001 C CNN
F 3 "" H 6820 1750 50  0001 C CNN
	1    6820 1750
	1    0    0    -1  
$EndComp
$Comp
L GS2 J23
U 1 1 5BFDEA5A
P 6920 1750
F 0 "J23" H 6960 1890 39  0000 C CNN
F 1 "GS2" V 6880 1575 39  0000 C CNN
F 2 "Connectors:GS2" V 6994 1750 50  0001 C CNN
F 3 "" H 6920 1750 50  0001 C CNN
	1    6920 1750
	1    0    0    -1  
$EndComp
$Comp
L Arduino U18
U 1 1 5BFF0E5C
P 9720 4785
F 0 "U18" H 9720 4110 39  0000 C CNN
F 1 "Arduino" H 9720 5460 39  0000 C CNN
F 2 "Pin_Headers:Pin_Header_Straight_2x12_Pitch2.54mm" H 9720 4785 39  0001 C CNN
F 3 "" H 9720 4785 39  0001 C CNN
	1    9720 4785
	1    0    0    -1  
$EndComp
Text Label 6620 1465 1    39   ~ 0
AD3
Text Label 6720 1465 1    39   ~ 0
AD2
Text Label 6820 1465 1    39   ~ 0
AD1
Text Label 6920 1465 1    39   ~ 0
AD0
Text GLabel 10310 4635 2    39   Input ~ 0
AD3
Text GLabel 10310 4735 2    39   Input ~ 0
AD2
Text GLabel 10310 4835 2    39   Input ~ 0
AD1
Text GLabel 10310 4935 2    39   Input ~ 0
AD0
Text GLabel 6620 1295 1    39   Input ~ 0
AD3
Text GLabel 6720 1295 1    39   Input ~ 0
AD2
Text GLabel 6820 1295 1    39   Input ~ 0
AD1
Text GLabel 6920 1295 1    39   Input ~ 0
AD0
$Comp
L R R44
U 1 1 5BF4D66A
P 8415 5235
F 0 "R44" V 8495 5235 50  0000 C CNN
F 1 "5.1k" V 8415 5235 50  0000 C CNN
F 2 "Resistors_SMD:R_0603_HandSoldering" V 8345 5235 50  0001 C CNN
F 3 "" H 8415 5235 50  0001 C CNN
	1    8415 5235
	-1   0    0    1   
$EndComp
$Comp
L LED_ALT D2
U 1 1 5BF4DED8
P 8065 5475
F 0 "D2" H 8065 5575 50  0000 C CNN
F 1 "LED_ALT" H 8065 5375 50  0000 C CNN
F 2 "LEDs:LED_0603" H 8065 5475 50  0001 C CNN
F 3 "" H 8065 5475 50  0001 C CNN
	1    8065 5475
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR015
U 1 1 5BF54099
P 7655 5650
F 0 "#PWR015" H 7655 5400 50  0001 C CNN
F 1 "GND" H 7655 5500 39  0000 C CNN
F 2 "" H 7655 5650 50  0001 C CNN
F 3 "" H 7655 5650 50  0001 C CNN
	1    7655 5650
	1    0    0    -1  
$EndComp
$Sheet
S 9335 2350 655  630 
U 5BF6B982
F0 "SPI Connector" 39
F1 "SPIConnector.sch" 39
F2 "CS" I L 9335 2580 39 
F3 "MISO" I L 9335 2750 39 
F4 "MOSI" I L 9335 2835 39 
F5 "CS'" O R 9990 2540 39 
F6 "MISO'" O R 9990 2710 39 
F7 "MOSI'" O R 9990 2790 39 
F8 "GND" I L 9335 2410 39 
F9 "RST" I L 9335 2920 39 
F10 "VCC" I L 9335 2495 39 
F11 "SCL" I L 9335 2665 39 
F12 "SCL'" O R 9990 2625 39 
$EndSheet
Text GLabel 10315 5335 2    39   Input ~ 0
CS
Text GLabel 10105 2540 2    39   Input ~ 0
CS
Text GLabel 10105 2625 2    39   Input ~ 0
SCL
Text GLabel 10105 2710 2    39   Input ~ 0
MISO
Text GLabel 10105 2790 2    39   Input ~ 0
MOSI
Text GLabel 9060 5235 0    39   Input ~ 0
CS
Text GLabel 10310 5035 2    39   Input ~ 0
SCL
Text GLabel 10315 5235 2    39   Input ~ 0
MISO
Text GLabel 9055 5035 0    39   Input ~ 0
MISO
Text Notes 8840 5085 2    30   Italic 0
MOSI (11)\nTeensy 3.2
Text Notes 8915 5285 2    30   Italic 0
CS (10)\nTeensy 3.2
Text GLabel 10315 5135 2    39   Input ~ 0
MOSI
$Comp
L GS2 J34
U 1 1 5BF8C560
P 10595 4160
F 0 "J34" V 10550 4315 39  0000 C CNN
F 1 "GS2" V 10545 3970 39  0000 C CNN
F 2 "Connectors:GS2" V 10669 4160 50  0001 C CNN
F 3 "" H 10595 4160 50  0001 C CNN
	1    10595 4160
	1    0    0    -1  
$EndComp
Text GLabel 9150 2495 0    39   UnSpc Italic 0
VCC
Text GLabel 10420 3520 0    30   UnSpc Italic 0
VCC
$Comp
L Conn_01x06 J32
U 1 1 5BF9F53E
P 5150 6475
F 0 "J32" H 5150 6775 39  0000 C CNN
F 1 "Bluetooth" V 5245 6435 39  0000 C CNN
F 2 "Pin_Headers:Pin_Header_Straight_1x06_Pitch2.54mm" H 5150 6475 50  0001 C CNN
F 3 "" H 5150 6475 50  0001 C CNN
	1    5150 6475
	0    1    1    0   
$EndComp
Text GLabel 5250 6160 1    30   UnSpc Italic 0
VCC
NoConn ~ 5350 6275
NoConn ~ 4850 6275
$Comp
L GND #PWR016
U 1 1 5BFAA3A6
P 5150 6000
F 0 "#PWR016" H 5150 5750 50  0001 C CNN
F 1 "GND" H 5150 5875 39  0000 C CNN
F 2 "" H 5150 6000 50  0001 C CNN
F 3 "" H 5150 6000 50  0001 C CNN
	1    5150 6000
	-1   0    0    1   
$EndComp
Text GLabel 9055 4235 0    39   Input ~ 0
TxO
Text GLabel 9055 4335 0    39   Input ~ 0
RxI
Text GLabel 5050 6275 1    39   Input ~ 0
TxO
Text GLabel 4950 6275 1    39   Input ~ 0
RxI
$Comp
L GS3 J33
U 1 1 5BFE0942
P 9200 3480
F 0 "J33" V 9200 3280 39  0000 C CNN
F 1 "Reset Select" V 8975 3480 39  0000 C CNN
F 2 "Connectors:GS3" V 9288 3406 50  0001 C CNN
F 3 "" H 9200 3480 50  0001 C CNN
	1    9200 3480
	0    -1   -1   0   
$EndComp
$Comp
L GND #PWR017
U 1 1 5BFEA995
P 10515 2320
F 0 "#PWR017" H 10515 2070 50  0001 C CNN
F 1 "GND" H 10515 2170 39  0000 C CNN
F 2 "" H 10515 2320 50  0001 C CNN
F 3 "" H 10515 2320 50  0001 C CNN
	1    10515 2320
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR018
U 1 1 5BFFAD28
P 2485 6500
F 0 "#PWR018" H 2485 6250 50  0001 C CNN
F 1 "GND" H 2485 6350 39  0000 C CNN
F 2 "" H 2485 6500 50  0001 C CNN
F 3 "" H 2485 6500 50  0001 C CNN
	1    2485 6500
	1    0    0    -1  
$EndComp
Text GLabel 2185 6460 2    39   Input ~ 0
+5.5V
Text GLabel 8740 2495 2    39   Input ~ 0
+5.5V
Text GLabel 2185 6295 2    39   Input ~ 0
+5V
NoConn ~ 9245 4635
NoConn ~ 9245 4735
NoConn ~ 9245 4835
NoConn ~ 9245 5335
NoConn ~ 10195 4235
Text GLabel 9055 5135 0    39   Input ~ 0
EXCLK
Wire Wire Line
	2295 2620 2565 2620
Wire Wire Line
	2295 2705 2565 2705
Wire Wire Line
	1310 3240 1605 3240
Wire Wire Line
	1605 3325 1385 3325
Wire Wire Line
	1385 3895 1600 3895
Wire Wire Line
	1310 3980 1600 3980
Wire Wire Line
	840  595  765  595 
Wire Wire Line
	840  745  765  745 
Wire Wire Line
	840  900  765  900 
Wire Wire Line
	840  1190 765  1190
Wire Wire Line
	765  1190 765  1250
Wire Notes Line
	1280 505  1280 1450
Wire Notes Line
	1280 505  510  505 
Wire Notes Line
	510  505  510  1450
Wire Wire Line
	1495 2620 1610 2620
Wire Wire Line
	1610 2705 1495 2705
Wire Wire Line
	2425 2745 2425 2705
Connection ~ 2425 2705
Wire Wire Line
	4020 3085 4020 3005
Wire Wire Line
	2365 3070 2415 3070
Wire Wire Line
	2415 3240 2365 3240
Wire Wire Line
	2415 3725 2365 3725
Wire Wire Line
	2415 3895 2365 3895
Wire Wire Line
	2725 3850 2725 3810
Wire Wire Line
	2365 3810 2925 3810
Wire Wire Line
	2725 3195 2725 3155
Wire Wire Line
	2365 3155 2925 3155
Wire Wire Line
	840  1055 765  1055
Wire Notes Line
	510  1450 1280 1450
Wire Wire Line
	4115 2665 3625 2665
Wire Wire Line
	3625 2665 3625 3410
Wire Wire Line
	3625 3410 2365 3410
Wire Wire Line
	2365 3495 3705 3495
Wire Wire Line
	3705 3495 3705 2750
Wire Wire Line
	3705 2750 4115 2750
Wire Wire Line
	4020 3005 4115 3005
Wire Wire Line
	4115 2835 3780 2835
Wire Wire Line
	3780 2835 3780 4065
Wire Wire Line
	3780 4065 2365 4065
Wire Wire Line
	2365 4150 3855 4150
Wire Wire Line
	3855 4150 3855 2920
Wire Wire Line
	3855 2920 4115 2920
Wire Wire Line
	2365 3980 2925 3980
Wire Wire Line
	2925 3980 2925 3810
Connection ~ 2725 3810
Wire Wire Line
	2365 3325 2925 3325
Wire Wire Line
	2925 3325 2925 3155
Connection ~ 2725 3155
Wire Wire Line
	4085 3510 4195 3510
Wire Wire Line
	4060 3815 4060 3680
Wire Wire Line
	4060 3680 4195 3680
Wire Wire Line
	4775 2665 5430 2665
Wire Wire Line
	4775 2750 5430 2750
Wire Wire Line
	4775 2835 5430 2835
Wire Wire Line
	4775 2920 5430 2920
Wire Wire Line
	5430 3170 5340 3170
Wire Wire Line
	5340 3170 5340 2665
Connection ~ 5340 2665
Wire Wire Line
	5430 3255 5265 3255
Wire Wire Line
	5265 3255 5265 2750
Connection ~ 5265 2750
Wire Wire Line
	5430 3340 5190 3340
Wire Wire Line
	5190 3340 5190 2835
Connection ~ 5190 2835
Wire Wire Line
	5430 3425 5115 3425
Wire Wire Line
	5115 3425 5115 2920
Connection ~ 5115 2920
Wire Wire Line
	5430 3595 4955 3595
Wire Wire Line
	4135 3510 4135 3360
Wire Wire Line
	4135 3360 5040 3360
Wire Wire Line
	5040 3360 5040 3510
Wire Wire Line
	5040 3510 5430 3510
Connection ~ 4135 3510
Wire Wire Line
	6140 3215 6585 3215
Wire Wire Line
	6585 3300 6140 3300
Wire Wire Line
	6140 3385 6585 3385
Wire Wire Line
	6585 3470 6140 3470
Wire Wire Line
	6140 3555 6585 3555
Wire Wire Line
	6340 3650 6340 3555
Connection ~ 6340 3555
Wire Wire Line
	3330 2580 4115 2580
Wire Wire Line
	3330 2665 3400 2665
Wire Wire Line
	3400 2750 3330 2750
Wire Wire Line
	2495 5345 2495 5220
Wire Wire Line
	2495 5220 2280 5220
Wire Wire Line
	1605 5180 1760 5180
Wire Wire Line
	1605 5260 1760 5260
Wire Wire Line
	8875 2920 8625 2920
Wire Wire Line
	8625 3005 8880 3005
Wire Wire Line
	6720 2580 7975 2580
Wire Wire Line
	7675 2580 7675 3515
Wire Wire Line
	7675 3515 7280 3515
Wire Wire Line
	7280 3425 7585 3425
Wire Wire Line
	7585 3425 7585 2495
Wire Wire Line
	7585 2495 7975 2495
Wire Wire Line
	6620 2410 7975 2410
Wire Wire Line
	7495 2410 7495 3340
Wire Wire Line
	7495 3340 7280 3340
Wire Wire Line
	7280 3250 7405 3250
Wire Wire Line
	7405 3250 7405 2325
Wire Wire Line
	7405 2325 7975 2325
Wire Wire Line
	6140 2665 7975 2665
Wire Wire Line
	6140 2750 7975 2750
Wire Wire Line
	6140 2835 7975 2835
Wire Wire Line
	6140 2920 7975 2920
Wire Wire Line
	7975 3090 7825 3090
Wire Wire Line
	7825 3090 7825 3160
Wire Wire Line
	3625 2480 3755 2480
Wire Wire Line
	3755 2480 3755 2580
Connection ~ 3755 2580
Wire Wire Line
	7690 3635 7825 3635
Wire Wire Line
	7825 3635 7825 3560
Wire Wire Line
	6620 2410 6620 1950
Connection ~ 7495 2410
Wire Wire Line
	6720 1950 6720 2580
Connection ~ 7675 2580
Wire Wire Line
	6820 1950 6820 2750
Connection ~ 6820 2750
Wire Wire Line
	6920 1950 6920 2920
Connection ~ 6920 2920
Wire Wire Line
	6620 1295 6620 1550
Wire Wire Line
	6720 1550 6720 1295
Wire Wire Line
	6820 1295 6820 1550
Wire Wire Line
	6920 1295 6920 1550
Wire Wire Line
	10310 4635 10195 4635
Wire Wire Line
	10195 4735 10310 4735
Wire Wire Line
	10195 4835 10310 4835
Wire Wire Line
	10195 4935 10310 4935
Wire Wire Line
	8215 5475 8415 5475
Wire Wire Line
	8415 5475 8415 5385
Wire Wire Line
	7915 5475 7655 5475
Wire Wire Line
	7655 4535 7655 5650
Wire Wire Line
	8415 5085 8415 4935
Wire Wire Line
	8415 4935 9245 4935
Wire Wire Line
	9245 5135 9055 5135
Wire Wire Line
	8625 2410 9335 2410
Wire Wire Line
	8625 2580 9335 2580
Wire Wire Line
	9335 2665 8625 2665
Wire Wire Line
	8625 2750 9335 2750
Wire Wire Line
	9335 2835 8625 2835
Wire Wire Line
	10470 4435 10195 4435
Wire Wire Line
	10470 3660 10470 4435
Wire Wire Line
	9200 2920 9335 2920
Wire Wire Line
	10105 2540 9990 2540
Wire Wire Line
	10315 5335 10195 5335
Wire Wire Line
	10105 2790 9990 2790
Wire Wire Line
	9990 2710 10105 2710
Wire Wire Line
	9990 2625 10105 2625
Wire Wire Line
	9060 5235 9245 5235
Wire Wire Line
	10310 5035 10195 5035
Wire Wire Line
	10315 5235 10195 5235
Wire Wire Line
	9055 5035 9245 5035
Wire Wire Line
	10315 5135 10195 5135
Wire Wire Line
	10195 4535 10595 4535
Wire Wire Line
	10595 4535 10595 4360
Wire Wire Line
	10420 3520 10595 3520
Wire Wire Line
	10595 3520 10595 3960
Wire Wire Line
	5250 6160 5250 6275
Wire Wire Line
	5150 6000 5150 6275
Wire Wire Line
	9055 4235 9245 4235
Wire Wire Line
	9055 4335 9245 4335
Wire Wire Line
	7655 4535 9245 4535
Wire Wire Line
	8550 4535 8550 3970
Wire Wire Line
	8550 3970 10345 3970
Wire Wire Line
	10345 3970 10345 4335
Wire Wire Line
	10345 4335 10195 4335
Connection ~ 8550 4535
Connection ~ 7655 5475
Wire Wire Line
	8650 4435 9245 4435
Wire Wire Line
	8650 3660 8650 4435
Wire Wire Line
	9200 3330 9200 2920
Wire Wire Line
	8650 3660 9100 3660
Wire Wire Line
	9100 3660 9100 3630
Wire Wire Line
	9300 3630 9300 3660
Wire Wire Line
	9300 3660 10470 3660
Wire Wire Line
	10515 2320 10515 2200
Wire Wire Line
	10515 2200 9085 2200
Wire Wire Line
	9085 2200 9085 2410
Connection ~ 9085 2410
Wire Wire Line
	9150 2495 9335 2495
Wire Wire Line
	2185 6460 2040 6460
Wire Wire Line
	2485 6500 2485 6380
Wire Wire Line
	2485 6380 2040 6380
Wire Wire Line
	8740 2495 8625 2495
Wire Wire Line
	2185 6295 2040 6295
Wire Wire Line
	4150 3595 4195 3595
Text GLabel 4150 3595 0    39   Input ~ 0
EXCLK
Text GLabel 1320 6335 0    39   Input ~ 0
+12V
Text GLabel 1320 6420 0    39   Input ~ 0
-12V
Wire Wire Line
	1320 6420 1480 6420
Wire Wire Line
	1480 6335 1320 6335
Wire Wire Line
	1190 3860 1310 3860
Wire Wire Line
	1310 3860 1310 3980
Wire Wire Line
	1190 3760 1385 3760
Wire Wire Line
	1385 3760 1385 3895
$Comp
L Conn_01x06_Female J16
U 1 1 5B188AC3
P 990 3660
F 0 "J16" V 1030 3760 39  0000 C CNN
F 1 "Channel" V 1035 3555 39  0000 C CNN
F 2 "Pin_Headers:Pin_Header_Angled_1x06_Pitch2.54mm" H 990 3660 50  0001 C CNN
F 3 "" H 990 3660 50  0001 C CNN
	1    990  3660
	-1   0    0    1   
$EndComp
Wire Wire Line
	1190 3360 1310 3360
Wire Wire Line
	1310 3360 1310 3240
Wire Wire Line
	1190 3460 1385 3460
Wire Wire Line
	1385 3460 1385 3325
Wire Wire Line
	1190 3560 1235 3560
Wire Wire Line
	1235 3560 1235 3660
Wire Wire Line
	1235 3660 1190 3660
Wire Wire Line
	1345 3630 1345 3610
Wire Wire Line
	1345 3610 1235 3610
Connection ~ 1235 3610
$EndSCHEMATC
