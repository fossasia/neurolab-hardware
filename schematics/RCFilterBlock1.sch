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
Sheet 5 14
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
L R R2
U 1 1 5B113089
P 5400 2370
F 0 "R2" V 5480 2370 39  0000 C CNN
F 1 "4.7k" V 5400 2370 39  0000 C CNN
F 2 "Resistors_SMD:R_0603_HandSoldering" V 5330 2370 50  0001 C CNN
F 3 "" H 5400 2370 50  0001 C CNN
	1    5400 2370
	0    1    1    0   
$EndComp
Wire Wire Line
	5550 2370 6025 2370
$Comp
L R R3
U 1 1 5B113866
P 5400 3055
F 0 "R3" V 5480 3055 39  0000 C CNN
F 1 "4.7k" V 5400 3055 39  0000 C CNN
F 2 "Resistors_SMD:R_0603_HandSoldering" V 5330 3055 50  0001 C CNN
F 3 "" H 5400 3055 50  0001 C CNN
	1    5400 3055
	0    1    1    0   
$EndComp
Wire Wire Line
	5550 3055 6025 3055
$Comp
L R R4
U 1 1 5B1143E4
P 5410 3775
F 0 "R4" V 5490 3775 39  0000 C CNN
F 1 "4.7k" V 5410 3775 39  0000 C CNN
F 2 "Resistors_SMD:R_0603_HandSoldering" V 5340 3775 50  0001 C CNN
F 3 "" H 5410 3775 50  0001 C CNN
	1    5410 3775
	0    1    1    0   
$EndComp
Wire Wire Line
	5560 3775 6025 3775
$Comp
L R R5
U 1 1 5B1143F2
P 5410 4460
F 0 "R5" V 5490 4460 39  0000 C CNN
F 1 "4.7k" V 5410 4460 39  0000 C CNN
F 2 "Resistors_SMD:R_0603_HandSoldering" V 5340 4460 50  0001 C CNN
F 3 "" H 5410 4460 50  0001 C CNN
	1    5410 4460
	0    1    1    0   
$EndComp
Wire Wire Line
	5560 4460 6025 4460
Text HLabel 6025 2370 2    39   Output ~ 0
+OUTA'
Text HLabel 6025 3055 2    39   Output ~ 0
-OUTA'
Text HLabel 6025 3775 2    39   Output ~ 0
+OUTB'
Text HLabel 6025 4460 2    39   Output ~ 0
-OUTB'
Text HLabel 4785 2370 0    39   Input ~ 0
+OUTA
Text HLabel 4785 3055 0    39   Input ~ 0
-OUTA
Text HLabel 4785 3775 0    39   Input ~ 0
+OUTB
Text HLabel 4785 4460 0    39   Input ~ 0
-OUTB
Wire Wire Line
	4785 4460 5260 4460
Wire Wire Line
	4785 3775 5260 3775
Wire Wire Line
	4785 3055 5250 3055
Wire Wire Line
	4785 2370 5250 2370
$Comp
L C_Feedthrough C10
U 1 1 5BF0F3CE
P 5905 2720
F 0 "C10" H 5905 3020 39  0000 C CNN
F 1 "0.1u" H 5905 2945 39  0000 C CNN
F 2 "Neuro:Decouple_Cap_0603" V 5905 2720 50  0001 C CNN
F 3 "100X14W104MV4T" V 5905 2720 50  0001 C CNN
	1    5905 2720
	0    -1   -1   0   
$EndComp
$Comp
L C_Feedthrough C11
U 1 1 5BF0F79C
P 5905 4140
F 0 "C11" H 5905 4440 39  0000 C CNN
F 1 "0.1u" H 5905 4365 39  0000 C CNN
F 2 "Neuro:Decouple_Cap_0603" V 5905 4140 50  0001 C CNN
F 3 "100X14W104MV4T" V 5905 4140 50  0001 C CNN
	1    5905 4140
	0    -1   -1   0   
$EndComp
Wire Wire Line
	5805 2520 5805 2370
Connection ~ 5805 2370
Wire Wire Line
	5805 2920 5805 3055
Connection ~ 5805 3055
Wire Wire Line
	5805 3940 5805 3775
Connection ~ 5805 3775
Wire Wire Line
	5805 4340 5805 4460
Connection ~ 5805 4460
Wire Wire Line
	6005 2720 6655 2720
Wire Wire Line
	6655 2720 6655 4460
Wire Wire Line
	6655 4140 6005 4140
Connection ~ 6655 4140
$Comp
L GND #PWR019
U 1 1 5BFB2CC9
P 6655 4460
F 0 "#PWR019" H 6655 4210 50  0001 C CNN
F 1 "GND" H 6655 4310 50  0000 C CNN
F 2 "" H 6655 4460 50  0001 C CNN
F 3 "" H 6655 4460 50  0001 C CNN
	1    6655 4460
	1    0    0    -1  
$EndComp
$EndSCHEMATC
