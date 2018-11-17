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
Sheet 2 10
Title "FOSSASIA - NeuroFox"
Date "2018-05-31"
Rev "2"
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L GS3 J1
U 1 1 5B1009A5
P 4995 3260
F 0 "J1" H 5045 3460 50  0000 C CNN
F 1 "GS3" H 5045 3061 50  0000 C CNN
F 2 "Connectors:GS3" V 5083 3186 50  0001 C CNN
F 3 "" H 4995 3260 50  0001 C CNN
	1    4995 3260
	0    1    1    0   
$EndComp
$Comp
L C C1
U 1 1 5B100AD7
P 4995 4140
F 0 "C1" H 5020 4240 50  0000 L CNN
F 1 "2.2u" H 5020 4040 50  0000 L CNN
F 2 "" H 5033 3990 50  0001 C CNN
F 3 "" H 4995 4140 50  0001 C CNN
	1    4995 4140
	1    0    0    -1  
$EndComp
$Comp
L LED_ALT D1
U 1 1 5B100C3A
P 5535 3880
F 0 "D1" H 5535 3980 50  0000 C CNN
F 1 "Blue" H 5535 3780 50  0000 C CNN
F 2 "" H 5535 3880 50  0001 C CNN
F 3 "" H 5535 3880 50  0001 C CNN
	1    5535 3880
	0    -1   -1   0   
$EndComp
$Comp
L R R1
U 1 1 5B100D1D
P 5535 4350
F 0 "R1" V 5615 4350 50  0000 C CNN
F 1 "20k" V 5535 4350 50  0000 C CNN
F 2 "" V 5465 4350 50  0001 C CNN
F 3 "" H 5535 4350 50  0001 C CNN
	1    5535 4350
	1    0    0    -1  
$EndComp
$Comp
L L L1
U 1 1 5B100E56
P 5875 3570
F 0 "L1" V 5825 3570 50  0000 C CNN
F 1 "BLM15HB121SN1" V 5950 3570 50  0000 C CNN
F 2 "" H 5875 3570 50  0001 C CNN
F 3 "http://pdf.datasheet.live/datasheets-1/murata_manufacturing/BLM15HB121SN1.pdf" H 5875 3570 50  0001 C CNN
	1    5875 3570
	0    -1   -1   0   
$EndComp
$Comp
L C C2
U 1 1 5B100F8E
P 6170 4140
F 0 "C2" H 6195 4240 50  0000 L CNN
F 1 "2.2u" H 6195 4040 50  0000 L CNN
F 2 "" H 6208 3990 50  0001 C CNN
F 3 "" H 6170 4140 50  0001 C CNN
	1    6170 4140
	1    0    0    -1  
$EndComp
Wire Wire Line
	4995 3410 4995 3990
Wire Wire Line
	4995 4290 4995 4730
Wire Wire Line
	4995 4730 6685 4730
Wire Wire Line
	5535 4730 5535 4500
Connection ~ 5535 4730
Wire Wire Line
	5535 4030 5535 4200
Wire Wire Line
	5535 3730 5535 3570
Wire Wire Line
	4995 3570 5725 3570
Connection ~ 4995 3570
Connection ~ 5535 3570
Wire Wire Line
	6170 3990 6170 3570
Wire Wire Line
	6025 3570 6685 3570
Wire Wire Line
	6170 4730 6170 4290
Text HLabel 6685 4730 2    39   Input ~ 0
GND
Connection ~ 6170 4730
Text HLabel 6685 3570 2    39   Input ~ 0
VIN
Connection ~ 6170 3570
Text HLabel 4665 3025 0    39   Input ~ 0
12V
Text HLabel 5270 3025 2    39   Input ~ 0
5.5V
Wire Wire Line
	5270 3025 5095 3025
Wire Wire Line
	5095 3025 5095 3110
Wire Wire Line
	4895 3110 4895 3025
Wire Wire Line
	4895 3025 4665 3025
$EndSCHEMATC
