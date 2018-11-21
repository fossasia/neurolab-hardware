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
Sheet 13 14
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L USB_OTG J18
U 1 1 5BF6F769
P 5035 3930
F 0 "J18" H 4835 4380 39  0000 L CNN
F 1 "USB_OTG" H 4835 4280 39  0000 L CNN
F 2 "Connectors:USB_Micro-B" H 5185 3880 50  0001 C CNN
F 3 "" H 5185 3880 50  0001 C CNN
	1    5035 3930
	1    0    0    -1  
$EndComp
Wire Wire Line
	5660 3730 5335 3730
Text HLabel 6260 3630 2    39   Output ~ 0
+5V
Wire Wire Line
	6260 3630 5960 3630
Text HLabel 6260 3870 2    39   Output ~ 0
GND
Wire Wire Line
	6260 3870 5555 3870
Wire Wire Line
	5555 3870 5555 4425
Wire Wire Line
	4935 4425 6615 4425
Wire Wire Line
	5035 4425 5035 4330
Wire Wire Line
	4935 4425 4935 4330
Connection ~ 5035 4425
NoConn ~ 5335 3930
NoConn ~ 5335 4030
NoConn ~ 5335 4130
$Comp
L Conn_01x02 J17
U 1 1 5BF6FEF6
P 4885 2520
F 0 "J17" H 4885 2620 39  0000 C CNN
F 1 "Conn_01x02" H 4885 2320 39  0000 C CNN
F 2 "Pin_Headers:Pin_Header_Straight_1x02_Pitch2.54mm" H 4885 2520 50  0001 C CNN
F 3 "" H 4885 2520 50  0001 C CNN
	1    4885 2520
	-1   0    0    1   
$EndComp
$Comp
L GS3 J19
U 1 1 5BF7029C
P 5810 3630
F 0 "J19" H 5860 3830 50  0000 C CNN
F 1 "GS3" H 5860 3431 50  0000 C CNN
F 2 "Connectors:GS3" V 5898 3556 50  0001 C CNN
F 3 "" H 5810 3630 50  0001 C CNN
	1    5810 3630
	1    0    0    -1  
$EndComp
Wire Wire Line
	5660 3530 5355 3530
Wire Wire Line
	5355 3530 5355 2520
Wire Wire Line
	5355 2520 5085 2520
Wire Wire Line
	5085 2420 6615 2420
Wire Wire Line
	6615 2420 6615 4425
Connection ~ 5555 4425
$Comp
L C_Small C63
U 1 1 5BF76035
P 6090 3750
F 0 "C63" H 6100 3820 39  0000 L CNN
F 1 "4.7u" H 6100 3670 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 6090 3750 50  0001 C CNN
F 3 "" H 6090 3750 50  0001 C CNN
	1    6090 3750
	1    0    0    -1  
$EndComp
Wire Wire Line
	6090 3650 6090 3630
Connection ~ 6090 3630
Wire Wire Line
	6090 3850 6090 3870
Connection ~ 6090 3870
$EndSCHEMATC
