EESchema Schematic File Version 4
LIBS:neurolab-cache
EELAYER 26 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 11 15
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
L neuro:AD7173 U16
U 1 1 5BF155C3
P 4450 3670
F 0 "U16" H 4025 2625 39  0000 C CNN
F 1 "AD7173" H 4450 4720 39  0000 C CNN
F 2 "SMD_Packages:LFCSP-40-1EP" H 4450 3670 39  0001 C CNN
F 3 "" H 4450 3670 39  0001 C CNN
	1    4450 3670
	1    0    0    -1  
$EndComp
Text HLabel 2050 5355 0    39   Input ~ 0
GND
Text HLabel 3330 3570 0    39   Input ~ 0
+5.0V
Text HLabel 2050 5095 0    39   Input ~ 0
+3.3V
$Comp
L neurolab-rescue:C_Small C31
U 1 1 5BF15E16
P 5585 4745
F 0 "C31" H 5595 4815 39  0000 L CNN
F 1 "0.1u" H 5595 4665 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 5585 4745 50  0001 C CNN
F 3 "" H 5585 4745 50  0001 C CNN
	1    5585 4745
	1    0    0    -1  
$EndComp
$Comp
L neurolab-rescue:C_Small C32
U 1 1 5BF15EDF
P 5935 4745
F 0 "C32" H 5945 4815 39  0000 L CNN
F 1 "1u" H 5945 4665 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 5935 4745 50  0001 C CNN
F 3 "" H 5935 4745 50  0001 C CNN
	1    5935 4745
	1    0    0    -1  
$EndComp
Wire Wire Line
	5585 4645 5585 4520
Wire Wire Line
	5125 4520 5935 4520
Wire Wire Line
	5935 4520 5935 4645
Connection ~ 5585 4520
Wire Wire Line
	5935 5355 5935 4845
Wire Wire Line
	4450 5355 4450 4870
Wire Wire Line
	5585 4845 5585 5355
Connection ~ 5585 5355
Wire Wire Line
	6320 5355 6320 2820
Wire Wire Line
	6320 2820 5125 2820
Connection ~ 5935 5355
Connection ~ 4450 5355
Wire Wire Line
	5125 4620 5220 4620
Wire Wire Line
	5220 4620 5220 5355
Connection ~ 5220 5355
$Comp
L neurolab-rescue:C_Small C23
U 1 1 5BF16D21
P 2540 3520
F 0 "C23" H 2550 3590 39  0000 L CNN
F 1 "0.1u" H 2550 3440 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 2540 3520 50  0001 C CNN
F 3 "" H 2540 3520 50  0001 C CNN
	1    2540 3520
	1    0    0    -1  
$EndComp
$Comp
L neurolab-rescue:C_Small C22
U 1 1 5BF16FBD
P 2220 3520
F 0 "C22" H 2230 3590 39  0000 L CNN
F 1 "1u" H 2230 3440 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 2220 3520 50  0001 C CNN
F 3 "" H 2220 3520 50  0001 C CNN
	1    2220 3520
	1    0    0    -1  
$EndComp
Wire Wire Line
	2220 3320 3775 3320
Wire Wire Line
	2220 3320 2220 3420
Wire Wire Line
	2540 3420 2540 3320
Connection ~ 2540 3320
Wire Wire Line
	2220 3620 2220 3805
Wire Wire Line
	2985 3805 1975 3805
Wire Wire Line
	2540 3805 2540 3620
Wire Wire Line
	3775 3420 2890 3420
Wire Wire Line
	2890 3420 2890 3805
Connection ~ 2540 3805
Text HLabel 1975 3805 0    39   Input ~ 0
GND
Connection ~ 2220 3805
Wire Wire Line
	3330 3570 3430 3570
Wire Wire Line
	3430 3520 3430 3620
Wire Wire Line
	3430 3520 3775 3520
Wire Wire Line
	3430 3620 3775 3620
Connection ~ 3430 3570
$Comp
L neurolab-rescue:Crystal_GND24_Small Y1
U 1 1 5BF17B3B
P 3430 3870
AR Path="/5BF17B3B" Ref="Y1"  Part="1" 
AR Path="/5BF2F8C6/5BF17B3B" Ref="Y1"  Part="1" 
F 0 "Y1" V 3460 3965 39  0000 L CNN
F 1 "FA-20H" V 3465 3555 39  0000 L CNN
F 2 "Crystals:Crystal_SMD_SeikoEpson_FA238-4pin_3.2x2.5mm" H 3430 3870 50  0001 C CNN
F 3 "" H 3430 3870 50  0001 C CNN
	1    3430 3870
	0    1    1    0   
$EndComp
$Comp
L neurolab-rescue:C_Small C24
U 1 1 5BF17CE4
P 3160 3715
F 0 "C24" H 3170 3785 39  0000 L CNN
F 1 "8pF" H 3170 3635 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 3160 3715 50  0001 C CNN
F 3 "" H 3160 3715 50  0001 C CNN
	1    3160 3715
	0    1    1    0   
$EndComp
$Comp
L neurolab-rescue:C_Small C25
U 1 1 5BF17DB9
P 3160 4030
F 0 "C25" H 3170 4100 39  0000 L CNN
F 1 "8pF" H 3170 3950 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 3160 4030 50  0001 C CNN
F 3 "" H 3160 4030 50  0001 C CNN
	1    3160 4030
	0    1    1    0   
$EndComp
Wire Wire Line
	3060 3715 2985 3715
Wire Wire Line
	2985 3620 2985 4030
Wire Wire Line
	2985 4030 3060 4030
Connection ~ 2985 3805
Connection ~ 2890 3805
Wire Wire Line
	3260 3715 3615 3715
Wire Wire Line
	3430 3715 3430 3770
Wire Wire Line
	3430 3970 3430 4030
Wire Wire Line
	3430 4030 3260 4030
Wire Wire Line
	3305 3870 2985 3870
Connection ~ 2985 3870
Wire Wire Line
	3555 3870 3555 3660
Wire Wire Line
	3555 3660 3305 3660
Wire Wire Line
	3305 3660 3305 3620
Wire Wire Line
	3305 3620 2985 3620
Connection ~ 2985 3715
Wire Wire Line
	3775 3820 3615 3820
Wire Wire Line
	3615 3820 3615 3715
Connection ~ 3430 3715
Wire Wire Line
	3430 4025 3610 4025
Wire Wire Line
	3610 4025 3610 3920
Wire Wire Line
	3610 3920 3775 3920
Connection ~ 3430 4025
NoConn ~ 3775 3720
NoConn ~ 5125 4420
NoConn ~ 5125 4320
NoConn ~ 5125 4220
NoConn ~ 5125 3120
NoConn ~ 5125 3020
NoConn ~ 5125 2920
Text HLabel 5125 3220 2    39   Output ~ 8
AIN13
Text HLabel 5125 3720 2    39   Output ~ 8
AIN12
Text HLabel 5125 3420 2    39   Output ~ 8
AIN11
Text HLabel 5125 3320 2    39   Output ~ 8
AIN10
Text HLabel 5125 3920 2    39   Output ~ 8
AIN9
Text HLabel 5125 3820 2    39   Output ~ 8
AIN8
Text HLabel 5125 3620 2    39   Output ~ 8
AIN7
Text HLabel 5125 3520 2    39   Output ~ 8
AIN6
Text HLabel 5125 4020 2    39   Output ~ 8
AIN4
Text HLabel 5125 4120 2    39   Output ~ 8
AIN5
Text HLabel 3775 4020 0    39   Output ~ 0
DO
Text HLabel 3775 4120 0    39   Input ~ 0
DI
Text HLabel 3775 4220 0    39   Input ~ 0
SCL
Text HLabel 3150 4320 0    39   Input ~ 0
CS
$Comp
L neurolab-rescue:R R42
U 1 1 5BF1AD0E
P 3275 4825
F 0 "R42" V 3355 4825 39  0000 C CNN
F 1 "10k" V 3275 4825 39  0000 C CNN
F 2 "Resistors_SMD:R_0603_HandSoldering" V 3205 4825 50  0001 C CNN
F 3 "" H 3275 4825 50  0001 C CNN
	1    3275 4825
	1    0    0    -1  
$EndComp
$Comp
L neurolab-rescue:R R43
U 1 1 5BF1AE5A
P 3505 4825
F 0 "R43" V 3585 4825 39  0000 C CNN
F 1 "10k" V 3505 4825 39  0000 C CNN
F 2 "Resistors_SMD:R_0603_HandSoldering" V 3435 4825 50  0001 C CNN
F 3 "" H 3505 4825 50  0001 C CNN
	1    3505 4825
	1    0    0    -1  
$EndComp
Wire Wire Line
	3275 4975 3275 5095
Wire Wire Line
	2050 5095 3745 5095
Wire Wire Line
	3505 5095 3505 4975
Wire Wire Line
	3775 4620 3745 4620
Wire Wire Line
	3745 4620 3745 5095
Connection ~ 3505 5095
Wire Wire Line
	3275 4675 3275 4320
Wire Wire Line
	3150 4320 3775 4320
Connection ~ 3275 4320
Wire Wire Line
	3505 4675 3505 4520
Wire Wire Line
	3505 4520 3775 4520
NoConn ~ 3775 4420
Connection ~ 3275 5095
$Comp
L neuro:ADR445BR U17
U 1 1 5BF1C793
P 7875 3590
F 0 "U17" H 7875 3305 39  0000 C CNN
F 1 "ADR445BR" H 7875 3790 39  0000 C CNN
F 2 "Housings_SSOP:MSOP-8_3x3mm_Pitch0.65mm" H 7875 3590 39  0001 C CNN
F 3 "" H 7875 3590 39  0001 C CNN
	1    7875 3590
	-1   0    0    -1  
$EndComp
Text HLabel 9485 3790 2    39   Input ~ 8
VIN
$Comp
L neurolab-rescue:L_Small L2
U 1 1 5BF1CA9E
P 9075 3790
F 0 "L2" V 9135 3760 39  0000 L CNN
F 1 "BLM15HB121SN1" V 9015 3550 39  0000 L CNN
F 2 "Inductors_SMD:L_0603" H 9075 3790 50  0001 C CNN
F 3 "" H 9075 3790 50  0001 C CNN
	1    9075 3790
	0    -1   -1   0   
$EndComp
Wire Wire Line
	9175 3790 9485 3790
$Comp
L neurolab-rescue:C_Small C50
U 1 1 5BF1D133
P 8455 4025
F 0 "C50" H 8465 4095 39  0000 L CNN
F 1 "0.1u" H 8465 3945 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 8455 4025 50  0001 C CNN
F 3 "" H 8455 4025 50  0001 C CNN
	1    8455 4025
	1    0    0    -1  
$EndComp
$Comp
L neurolab-rescue:C_Small C51
U 1 1 5BF1D2F8
P 8735 4025
F 0 "C51" H 8745 4095 39  0000 L CNN
F 1 "2.2u" H 8745 3945 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 8735 4025 50  0001 C CNN
F 3 "" H 8735 4025 50  0001 C CNN
	1    8735 4025
	1    0    0    -1  
$EndComp
Wire Wire Line
	8455 3590 8455 3925
Wire Wire Line
	8735 3925 8735 3790
Wire Wire Line
	8455 5355 8455 4125
Wire Wire Line
	6685 4270 9390 4270
Wire Wire Line
	8735 4270 8735 4125
Connection ~ 8455 4270
Connection ~ 6320 5355
NoConn ~ 8275 3690
NoConn ~ 7450 3790
$Comp
L neurolab-rescue:C_Small C52
U 1 1 5BF1E4B4
P 9390 4025
F 0 "C52" H 9400 4095 39  0000 L CNN
F 1 "2.2u" H 9400 3945 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 9390 4025 50  0001 C CNN
F 3 "" H 9390 4025 50  0001 C CNN
	1    9390 4025
	1    0    0    -1  
$EndComp
Wire Wire Line
	9390 3790 9390 3925
Connection ~ 9390 3790
Wire Wire Line
	9390 4270 9390 4125
Connection ~ 8735 4270
$Comp
L neurolab-rescue:C_Small C49
U 1 1 5BF1F144
P 6980 4025
F 0 "C49" H 6990 4095 39  0000 L CNN
F 1 "0.1u" H 6990 3945 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 6980 4025 50  0001 C CNN
F 3 "" H 6980 4025 50  0001 C CNN
	1    6980 4025
	1    0    0    -1  
$EndComp
$Comp
L neurolab-rescue:C_Small C48
U 1 1 5BF1F3CE
P 6685 4025
F 0 "C48" H 6695 4095 39  0000 L CNN
F 1 "2.2u" H 6695 3945 39  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 6685 4025 50  0001 C CNN
F 3 "" H 6685 4025 50  0001 C CNN
	1    6685 4025
	1    0    0    -1  
$EndComp
Wire Wire Line
	6685 2720 6685 3925
Wire Wire Line
	6685 3690 7450 3690
Wire Wire Line
	6980 3925 6980 3690
Connection ~ 6980 3690
Wire Wire Line
	6685 4125 6685 4270
Wire Wire Line
	6980 4125 6980 4270
Connection ~ 6980 4270
Connection ~ 6685 3690
Wire Wire Line
	5125 2720 6685 2720
NoConn ~ 3775 3220
NoConn ~ 3775 3120
NoConn ~ 3775 3020
NoConn ~ 3775 2920
NoConn ~ 3775 2820
NoConn ~ 3775 2720
NoConn ~ 7450 3590
NoConn ~ 7450 3490
NoConn ~ 8275 3490
Wire Wire Line
	8275 3590 8455 3590
Wire Wire Line
	8455 3790 8975 3790
Connection ~ 8455 3790
Connection ~ 8735 3790
Wire Wire Line
	8275 3790 8320 3790
Wire Wire Line
	8320 3790 8320 3970
Wire Wire Line
	8320 3970 7450 3970
Wire Wire Line
	7450 3970 7450 4270
Connection ~ 7450 4270
Wire Wire Line
	2050 5355 8455 5355
$EndSCHEMATC
