# 1 "G:\\eletron\\D-blockly\\resources\\app\\ino\\text.ino"
# 1 "G:\\eletron\\D-blockly\\resources\\app\\ino\\text.ino"
void setup()
{
  pinMode(10, 0x1);
}

void loop()
{
  for (int time = 1000; time >= 100; time = time + (1)) {
    digitalWrite(10,0x1);
    delay(time);
    digitalWrite(10,0x0);
    delay(time);
  }

}
