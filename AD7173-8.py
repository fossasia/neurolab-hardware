import serial

arduino = serial.Serial("/dev/ttyACM0", 115200)
while True:
	result = arduino.readline()
	if len(result) >= 3:
		value = ord(result[0]) << 16 | ord(result[1]) << 8 | ord(result[2])
		value = value & 0x7FFFFF		
		if (ord(result[0]) ^ 0xFF) & 0x80:
			value = value ^ 0x7FFFFF
			value = -value
		print "HEX:", result[0].encode('hex'), result[1].encode('hex'), result[2].encode('hex'), "DEC:", value
