import sys
import serial

arduino = serial.Serial()
#arduino.port = "/dev/rfcomm0" # when using Bluetooth
arduino.port = "/dev/ttyUSB0" # when usig Arduino Pro Mini
#arduino.port = "/dev/ttyACM0" # when using Arduio UNO
arduino.baudrate = 230401
arduino.timeout = 1

try:
	# establish a connection to the arduino
	arduino.open()
except Exception, error:
	# print error and exit
	print "arduino connection error:", error
	arduino.close()
	sys.exit(1)

while True:
	# read a line from Arduino
	result = ""
	while True:
		# read a byte
		c = arduino.read()
		#print c.encode('hex')
		result += c
		# read until carriage return
		if c == '\r':
			break
	# when 1 bit register data was received
	if len(result) == 3:
		print "1 bit register:", result[0].encode('hex')
	# when 2 bit register data was received
	elif len(result) == 4:
		print "2 bit register:", result[0].encode('hex'), result[1].encode('hex')
	# when 3 bit ADC conversion data was received
	elif len(result) >= 5:
		# add the 24 bits sensor data together
		value = ord(result[0]) << 16 | ord(result[1]) << 8 | ord(result[2])
		# convert from offset binary
		value -= 8388608
		# print the value in hexadecimal and decimal format
		print "HEX:", result[0].encode('hex'), result[1].encode('hex'), result[2].encode('hex'), "DEC:", value
	# when debub message was received
	else:
		# remove the newline and print result
		print "result: ", result[:-1]