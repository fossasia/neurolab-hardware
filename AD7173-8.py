import serial

# establish a connection to the arduino
arduino = serial.Serial("/dev/ttyACM0", 115200)

while True:
	# read a line from Arduino
	result = arduino.readline()
	# when sensor data was received
	if len(result) == 5:
		# add the 24 bits sensor data together
		value = ord(result[0]) << 16 | ord(result[1]) << 8 | ord(result[2])
		# erease the highest bit
		value = value & 0x7FFFFF
		# when the highest bit is 0, the value is negative
		if (ord(result[0]) ^ 0xFF) & 0x80:
			# flip all the bits
			value = value ^ 0x7FFFFF
			# change the value to negative
			value = -value
		# print the value in hexadecimal and decimal format
		print "HEX:", result[0].encode('hex'), result[1].encode('hex'), result[2].encode('hex'), "DEC:", value
	# when debub message was received
	else:
		# remove the newline and print result
		print result[:-1]