import serial

# establish a connection to the arduino
arduino = serial.Serial("/dev/ttyACM0", 115200)

while True:
	# read a line from Arduino
	result = arduino.readline()
	# when 1 bit register data was received
	if len(result) == 3:
		print "1 bit register:", result[0].encode('hex')
	# when 2 bit register data was received
	elif len(result) == 4:
		print "2 bit register:", result[0].encode('hex'), result[1].encode('hex')
	# when 3 bit ADC conversion data was received
	elif len(result) == 5:
		# add the 24 bits sensor data together
		value = ord(result[0]) << 16 | ord(result[1]) << 8 | ord(result[2])
		# convert from offset binary
		value -= 8388608
		# print the value in hexadecimal and decimal format
		print "HEX:", result[0].encode('hex'), result[1].encode('hex'), result[2].encode('hex'), "DEC:", value
	# when debub message was received
	else:
		# remove the newline and print result
		print result[:-1]