'use strict';

goog.provide('Blockly.Blocks.nova');
goog.require('Blockly.Blocks');

var THREE_PORTS = [["S0", "S0"], ["S1", "S1"], ["S2", "S2"], ["S3", "S3"],
["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"]];

var RTC_TIME = [[Blockly.LKL_NOVA_RTC_SEC, "getsecond()"], [Blockly.LKL_NOVA_RTC_MIN, "getminute()"],
                [Blockly.LKL_NOVA_RTC_HOUR, "gethour()"], [Blockly.LKL_NOVA_RTC_WEEK, "getdatOfweek()"],
                [Blockly.LKL_NOVA_RTC_DAY, "getdayOfMonth()"], [Blockly.LKL_NOVA_RTC_MON, "getmonth()"],
                [Blockly.LKL_NOVA_RTC_YEAR, "getyear()"]];

Blockly.Blocks.nova.HUE = 40;

Blockly.LKL_NOVA_PORT = '端口';
Blockly.LKL_NOVA_STAT = '设为';
Blockly.LKL_NOVA_GET_STAT = '获取';

Blockly.LKL_NOVA_LED = 'LED灯';
Blockly.LKL_NOVA_LED_ON = '开';
Blockly.LKL_NOVA_LED_OFF = '关';

Blockly.LKL_NOVA_RTC = '时钟';
Blockly.LKL_NOVA_RTC_SEC = '秒';
Blockly.LKL_NOVA_RTC_MIN = '分';
Blockly.LKL_NOVA_RTC_HOUR = '时';
Blockly.LKL_NOVA_RTC_WEEK = '星期';
Blockly.LKL_NOVA_RTC_DAY = '日';
Blockly.LKL_NOVA_RTC_MON = '月';
Blockly.LKL_NOVA_RTC_YEAR = '年';

Blockly.Blocks.Nova_led = {
    init: function() {
        this.setColour(Blockly.Blocks.nova.HUE);
        console.log(this)
        this.appendDummyInput("")
            .appendField(Blockly.LKL_NOVA_LED)
            .appendField(new Blockly.FieldImage("../../../img/led2.png", 37, 32))
            .appendField(Blockly.LKL_NOVA_PORT)
            .appendField(new Blockly.FieldDropdown(THREE_PORTS), "PIN")
            .appendField(Blockly.LKL_NOVA_STAT)
            .appendField(new Blockly.FieldDropdown([[Blockly.LKL_NOVA_LED_ON, "On()"], [Blockly.LKL_NOVA_LED_OFF, "Off()"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
}