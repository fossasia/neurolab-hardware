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
Sheet 4 14
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
L AD8475 U3
U 1 1 5B109A29
P 6100 2880
F 0 "U3" H 6100 2580 39  0000 C CNN
F 1 "AD8475" H 6100 3180 39  0000 C CNN
F 2 "Housings_SSOP:MSOP-10_3x3mm_Pitch0.5mm" H 6100 2880 30  0001 C CNN
F 3 "" H 6100 2880 30  0001 C CNN
	1    6100 2880
	1    0    0    -1  
$EndComp
$Comp
L AD8475 U4
U 1 1 5B109B62
P 6100 4050
F 0 "U4" H 6100 3750 39  0000 C CNN
F 1 "AD8475" H 6100 4350 39  0000 C CNN
F 2 "Housings_SSOP:MSOP-10_3x3mm_Pitch0.5mm" H 6100 4050 30  0001 C CNN
F 3 "" H 6100 4050 30  0001 C CNN
	1    6100 4050
	1    0    0    -1  
$EndComp
$Comp
L C C9
U 1 1 5B109DAB
P 5040 4505
F 0 "C9" H 5065 4605 39  0000 L CNN
F 1 "2.2u" H 5065 4405 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 5078 4355 50  0001 C CNN
F 3 "" H 5040 4505 50  0001 C CNN
	1    5040 4505
	1    0    0    -1  
$EndComp
Wire Wire Line
	5550 2980 5040 2980
Wire Wire Line
	5040 2980 5040 4355
Wire Wire Line
	5550 4150 5040 4150
Connection ~ 5040 4150
Text HLabel 4110 4925 0    39   Input ~ 0
GND
Wire Wire Line
	5040 4925 5040 4655
$Comp
L C C7
U 1 1 5B10A2FF
P 4410 4510
F 0 "C7" H 4435 4610 39  0000 L CNN
F 1 "2.2u" H 4435 4410 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 4448 4360 50  0001 C CNN
F 3 "" H 4410 4510 50  0001 C CNN
	1    4410 4510
	1    0    0    -1  
$EndComp
$Comp
L C C8
U 1 1 5B10A578
P 4730 4510
F 0 "C8" H 4755 4610 39  0000 L CNN
F 1 "2.2u" H 4755 4410 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 4768 4360 50  0001 C CNN
F 3 "" H 4730 4510 50  0001 C CNN
	1    4730 4510
	1    0    0    -1  
$EndComp
Wire Wire Line
	4730 4360 4730 4050
Wire Wire Line
	4410 4050 5550 4050
Wire Wire Line
	4110 2880 5550 2880
Wire Wire Line
	4410 4660 4410 4925
Wire Wire Line
	7330 4925 4110 4925
Connection ~ 5040 4925
Wire Wire Line
	4730 4660 4730 4925
Connection ~ 4730 4925
Wire Wire Line
	4410 4360 4410 2880
Connection ~ 4410 4925
Text HLabel 6885 2980 2    39   Output ~ 0
+IN0.4XA
Wire Wire Line
	6885 2980 6650 2980
Text HLabel 5415 2780 0    39   Output ~ 0
-IN0.4XA
Text HLabel 6885 4150 2    39   Output ~ 0
+IN0.4XB
Wire Wire Line
	6885 4150 6650 4150
Text HLabel 5415 3950 0    39   Output ~ 0
-IN0.4XB
Wire Wire Line
	5415 3950 5550 3950
Wire Wire Line
	5415 2780 5550 2780
Wire Wire Line
	6650 2880 7330 2880
Wire Wire Line
	7330 2880 7330 4925
Wire Wire Line
	7330 4050 6650 4050
Connection ~ 7330 4050
Connection ~ 4410 4050
Connection ~ 4730 4050
Text HLabel 4110 2880 0    39   Input ~ 0
VCCIO
Connection ~ 4410 2880
Text HLabel 5415 4250 0    39   Output ~ 0
+OUTB
Wire Wire Line
	5415 4250 5550 4250
Text HLabel 5415 3080 0    39   Output ~ 0
+OUTA
Wire Wire Line
	5415 3080 5550 3080
Text HLabel 6885 2680 2    39   Output ~ 0
-OUTA
Wire Wire Line
	6885 2680 6650 2680
Text HLabel 6885 3850 2    39   Output ~ 0
-OUTB
Wire Wire Line
	6885 3850 6650 3850
NoConn ~ 6650 3950
NoConn ~ 6650 4250
NoConn ~ 5550 3850
NoConn ~ 6650 2780
NoConn ~ 6650 3080
NoConn ~ 5550 2680
$EndSCHEMATC
