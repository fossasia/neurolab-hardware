
void setup() {
  Serial.begin(115200);
  
  byte high = 0x7F;
  byte mid = 0xFF;
  byte low = 0xFF;
  unsigned long value = ((unsigned long)high << 16) | ((unsigned long)mid << 8) | low;
  if (~high & 0x80) {
    Serial.println("high");
    value = ~value;
    //value -= 1;
  }
  value &= ~((unsigned long)1 << 23);
  Serial.println(value);
}

void loop() {
}
