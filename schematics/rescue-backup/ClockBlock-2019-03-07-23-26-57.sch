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
Sheet 7 14
Title "FOSSASIA - NeuroLab"
Date "2018-11-17"
Rev "2"
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L TLC555CD U9
U 1 1 5B10EA13
P 5175 3950
F 0 "U9" H 4775 4300 39  0000 L CNN
F 1 "TLC555CD" H 5275 4300 39  0000 L CNN
F 2 "Housings_SOIC:SOIC-8_3.9x4.9mm_Pitch1.27mm" H 5175 3950 50  0001 C CNN
F 3 "" H 5175 3950 50  0001 C CNN
	1    5175 3950
	1    0    0    -1  
$EndComp
Text HLabel 4305 3040 0    39   Input ~ 0
+5V
$Comp
L C C18
U 1 1 5B10EA36
P 4545 4775
F 0 "C18" H 4570 4875 39  0000 L CNN
F 1 "0.1u" H 4570 4675 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 4583 4625 50  0001 C CNN
F 3 "" H 4545 4775 50  0001 C CNN
	1    4545 4775
	1    0    0    -1  
$EndComp
$Comp
L C C19
U 1 1 5B10EAEF
P 5760 4775
F 0 "C19" H 5785 4875 39  0000 L CNN
F 1 "2.2n" H 5785 4675 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 5798 4625 50  0001 C CNN
F 3 "" H 5760 4775 50  0001 C CNN
	1    5760 4775
	1    0    0    -1  
$EndComp
$Comp
L R R7
U 1 1 5B10ECC8
P 5880 4215
F 0 "R7" V 5960 4215 39  0000 C CNN
F 1 "100k" V 5880 4215 39  0000 C CNN
F 2 "Resistors_SMD:R_0603_HandSoldering" V 5810 4215 50  0001 C CNN
F 3 "" H 5880 4215 50  0001 C CNN
	1    5880 4215
	1    0    0    -1  
$EndComp
$Comp
L R R8
U 1 1 5B10ED52
P 6130 3390
F 0 "R8" V 6210 3390 39  0000 C CNN
F 1 "10k" V 6130 3390 39  0000 C CNN
F 2 "Resistors_SMD:R_0603_HandSoldering" V 6060 3390 50  0001 C CNN
F 3 "" H 6130 3390 50  0001 C CNN
	1    6130 3390
	1    0    0    -1  
$EndComp
$Comp
L R R6
U 1 1 5B10EDD6
P 5880 3395
F 0 "R6" V 5960 3395 39  0000 C CNN
F 1 "1k" V 5880 3395 39  0000 C CNN
F 2 "Resistors_SMD:R_0603_HandSoldering" V 5810 3395 50  0001 C CNN
F 3 "" H 5880 3395 50  0001 C CNN
	1    5880 3395
	1    0    0    -1  
$EndComp
$Comp
L GS3 J3
U 1 1 5B10EF28
P 6565 3265
F 0 "J3" H 6615 3465 39  0000 C CNN
F 1 "GS3" H 6615 3066 39  0000 C CNN
F 2 "Connectors:GS3" V 6653 3191 50  0001 C CNN
F 3 "" H 6565 3265 50  0001 C CNN
	1    6565 3265
	0    -1   -1   0   
$EndComp
$Comp
L R R9
U 1 1 5B10F044
P 7260 3290
F 0 "R9" V 7340 3290 39  0000 C CNN
F 1 "10k" V 7260 3290 39  0000 C CNN
F 2 "Resistors_SMD:R_0603_HandSoldering" V 7190 3290 50  0001 C CNN
F 3 "" H 7260 3290 50  0001 C CNN
	1    7260 3290
	1    0    0    -1  
$EndComp
Text HLabel 7770 3790 2    39   Input ~ 0
EXCLK
Wire Wire Line
	7770 3790 7560 3790
Wire Wire Line
	7260 3440 7260 3590
Text HLabel 7260 4280 3    39   Input ~ 0
GND
Wire Wire Line
	7260 3990 7260 4280
Text HLabel 7260 3065 1    39   Input ~ 0
+5V
Wire Wire Line
	7260 3065 7260 3140
Wire Wire Line
	6665 3415 6665 3515
Wire Wire Line
	6665 3515 7260 3515
Connection ~ 7260 3515
$Comp
L 2N7002 Q1
U 1 1 5B10FF8E
P 7360 3790
F 0 "Q1" H 7560 3865 39  0000 L CNN
F 1 "2N7002" H 7560 3790 39  0000 L CNN
F 2 "TO_SOT_Packages_SMD:SOT-23" H 7560 3715 50  0001 L CIN
F 3 "" H 7360 3790 50  0001 L CNN
	1    7360 3790
	-1   0    0    -1  
$EndComp
Wire Wire Line
	5675 3750 6465 3750
Wire Wire Line
	6465 3750 6465 3415
Wire Wire Line
	6130 3540 6130 3750
Connection ~ 6130 3750
Wire Wire Line
	5175 3550 5175 3040
Wire Wire Line
	4305 3040 6130 3040
Wire Wire Line
	6130 3040 6130 3240
Wire Wire Line
	5880 3245 5880 3040
Connection ~ 5880 3040
Wire Wire Line
	5880 3545 5880 4065
Wire Wire Line
	5880 3950 5675 3950
Wire Wire Line
	5675 4150 5760 4150
Wire Wire Line
	5760 3485 5760 4625
Wire Wire Line
	5760 3485 4545 3485
Wire Wire Line
	4545 3485 4545 3750
Wire Wire Line
	4545 3750 4675 3750
Connection ~ 5880 3950
Wire Wire Line
	5880 4365 5880 4505
Wire Wire Line
	5880 4505 5760 4505
Connection ~ 5760 4150
Connection ~ 5760 4505
Text HLabel 5760 5065 3    39   Input ~ 0
GND
Wire Wire Line
	5760 5065 5760 4925
Wire Wire Line
	4545 4980 5760 4980
Wire Wire Line
	5175 4980 5175 4350
Connection ~ 5760 4980
Wire Wire Line
	4545 4925 4545 4980
Connection ~ 5175 4980
Wire Wire Line
	4545 4625 4545 3950
Wire Wire Line
	4545 3950 4675 3950
Wire Wire Line
	4675 4150 4420 4150
Wire Wire Line
	4420 4150 4420 3040
Connection ~ 5175 3040
Connection ~ 4420 3040
Text HLabel 6365 2710 0    39   Output ~ 0
CLK
Wire Wire Line
	6365 2710 6565 2710
Wire Wire Line
	6565 2710 6565 3115
$EndSCHEMATC
