#include <Arduino.h>
#line 1 "G:\\eletron\\D-blockly\\resources\\app\\ino\\text.ino"
#line 1 "G:\\eletron\\D-blockly\\resources\\app\\ino\\text.ino"
#line 1 "G:\\eletron\\D-blockly\\resources\\app\\ino\\text.ino"
void setup();
#line 6 "G:\\eletron\\D-blockly\\resources\\app\\ino\\text.ino"
void loop();
#line 1 "G:\\eletron\\D-blockly\\resources\\app\\ino\\text.ino"
void setup()
{
  pinMode(10, OUTPUT);
}

void loop()
{
  for (int time = 1000; time >= 100; time = time + (1)) {
    digitalWrite(10,HIGH);
    delay(time);
    digitalWrite(10,LOW);
    delay(time);
  }

}
