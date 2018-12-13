/**
 * 2018-5-17
 * imu 触碰开关 人体红外 拾音 光敏
 */
'use strict';

goog.provide('Blockly.Blocks.sensor');
goog.provide('Blockly.Blocks.actuator');
goog.require('Blockly.Blocks');
Blockly.Blocks.sensor.HUE = '#2E975B';
let gjall = [
    ['0', "0"],
    ['1', "1"],
    ['2', "2"],
    ['3', "3"],
    ['4', "4"],
    ['5', "5"],
    ['6', "6"],
    ['7', "7"],
    ['8', "8"],
    ['9', "9"],
    ['10', "10"],
    ['11', "11"],
    ['12', "12"],
    ['13', "13"],
    ['A0', "A0"],
    ['A1', "A1"],
    ['A2', "A2"],
    ['A3', "A3"],
    ['A4', "A4"],
    ['A5', "A5"]
]
let gjmn = [
    ['A0', "A0"],
    ['A1', "A1"],
    ['A2', "A2"],
    ['A3', "A3"],
    ['A4', "A4"],
    ['A5', "A5"]
]
let PinNameAll = 'gjall'
let pinNamemn = 'gjmn'
let motor = "motor"


// 触屏开关
Blockly.Blocks.cpkg = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField("当触碰开关");
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjall), PinNameAll)
        this.appendDummyInput()
            .appendField("被按下时");
        this.setInputsInline(true);
        this.setOutput(true);
    }
}

Blockly.Arduino.cpkg = function() {
    let mode = this.getFieldValue(PinNameAll);
    Blockly.Arduino.setups_['setup_output_' + mode] = 'pinMode(' + mode + ', INPUT);';
    return ['digitalRead(' + mode + ')', 0]
}


// 人体红外
Blockly.Blocks.hwjsq = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput("").appendField("当人体红外传感器");
        this.appendDummyInput("").appendField(new Blockly.FieldDropdown(gjall), PinNameAll);
        this.appendDummyInput("").appendField("检测到人体时");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip("返回人体红外的值");
    }
}

Blockly.Arduino.hwjsq = function() {
    var mode = this.getFieldValue(PinNameAll);
    Blockly.Arduino.setups_['setup_output_' + mode] = 'pinMode(' + mode + ', INPUT);';
    return ['digitalRead(' + mode + ')', 0]
}

// 光电开关
Blockly.Blocks.gdkgcgq = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput().appendField("当光电开关");
        this.appendDummyInput("").appendField(new Blockly.FieldDropdown(gjall), PinNameAll);
        this.appendDummyInput("").appendField("检测到白色时")
        this.setInputsInline(true);
        this.setOutput(true);
    }
}

Blockly.Arduino.gdkgcgq = function() {
    var mode = this.getFieldValue(PinNameAll);
    Blockly.Arduino.setups_['setup_output_' + mode] = 'pinMode(' + mode + ', INPUT);';
    return ['digitalRead(' + mode + ')', 0]
}

// 震动开关
Blockly.Blocks.zdkg = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField("当震动开关");
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjall), PinNameAll)
        this.appendDummyInput("")
            .appendField("检测到震动")
        this.setInputsInline(true);
        this.setOutput(true);

    }
}

Blockly.Arduino.zdkg = function() {
    var mode = this.getFieldValue(PinNameAll);
    Blockly.Arduino.setups_['setup_output_' + mode] = 'pinMode(' + mode + ', INPUT);';
    return ['digitalRead(' + mode + ')', 0]
}

// 触摸传感器
Blockly.Blocks.szcpkg = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.HTE_DF_TOUCH);
        this.appendDummyInput("")
            .appendField(Blockly.HTE_PIN)
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjall), PinNameAll)
        this.setInputsInline(true);
        this.setOutput(true);

    }
}

Blockly.Arduino.szcpkg = function() {
    var mode = this.getFieldValue(PinNameAll);
    Blockly.Arduino.setups_['setup_output_' + mode] = 'pinMode(' + mode + ', INPUT);';
    return ['digitalRead(' + mode + ')', 0]

}

// 霍尔传感器
Blockly.Blocks.hecgq = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Doubao_huoer);
        this.appendDummyInput("")
            .appendField(Blockly.HTE_PIN)
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjall), PinNameAll)
        this.setInputsInline(true);
        this.setOutput(true);
    }
}

Blockly.Arduino.hecgq = function() {
    var mode = this.getFieldValue(PinNameAll);
    Blockly.Arduino.setups_['setup_output_' + mode] = 'pinMode(' + mode + ', INPUT);';
    return ['digitalRead(' + mode + ')', 0]

}

// 触碰传感器
Blockly.Blocks.clcgq = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Doubao_IMU_GET_CL + MSG.catSensor);
        this.appendDummyInput("")
            .appendField(Blockly.HTE_PIN)
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjall), PinNameAll)
        this.setInputsInline(true);
        this.setOutput(true);
    }
}

Blockly.Arduino.clcgq = function() {
    var mode = this.getFieldValue(PinNameAll);
    Blockly.Arduino.setups_['setup_output_' + mode] = 'pinMode(' + mode + ', INPUT);';
    return ['digitalRead(' + mode + ')', 0]
}


/*******************************************************************
 * 模拟传感器
 */

// 光敏传感器
Blockly.Blocks.gmmk = {
    init: function() {
        this.setColour('#d8271d');
        this.appendDummyInput("")
            .appendField("光敏传感器")
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjmn), pinNamemn)
        this.appendDummyInput("")
            .appendField("获取到光照强度的值")
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(Blockly.Doubao_IMU_GET_ZHI);
    }
}

Blockly.Arduino.gmmk = function() {
    var mode = this.getFieldValue(pinNamemn);
    return ['analogRead(' + mode + ')', 0]
}

// 灰度传感器

Blockly.Blocks.hdcgq = {
    init: function() {
        this.setColour('#d8271d');
        this.appendDummyInput("")
            .appendField("灰度传感器")
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjmn), pinNamemn)
        this.appendDummyInput("")
            .appendField("获取灰度的值")
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(Blockly.Doubao_IMU_GET_ZHI);
    }
}

Blockly.Arduino.hdcgq = function() {
    var mode = this.getFieldValue(pinNamemn);
    return ['analogRead(' + mode + ')', 0]

}

// 拾音传感器
Blockly.Blocks.sycgq = {
    init: function() {
        this.setColour('#d8271d');
        this.appendDummyInput("")
            .appendField("拾音传感器")
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjmn), pinNamemn)
        this.appendDummyInput("")
            .appendField("获取到音量的值")
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(Blockly.Doubao_IMU_GET_ZHI);
    }
}

Blockly.Arduino.sycgq = function() {
    var mode = this.getFieldValue(pinNamemn);
    return ['analogRead(' + mode + ')', 0]

}

// 水分传感器
Blockly.Blocks.sfcgq = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput("")
            .appendField("水分传感器")
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjmn), pinNamemn)
        this.appendDummyInput("")
            .appendField("的湿度")
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(Blockly.Doubao_IMU_GET_ZHI);
    }
}


Blockly.Arduino.sfcgq = function() {
    var mode = this.getFieldValue(pinNamemn);
    return ['analogRead(' + mode + ')', 0]

}

// 一氧化碳传感器
Blockly.Blocks.yyhtcgq = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput("")
            .appendField("一氧化碳传感器")
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjmn), pinNamemn)
        this.appendDummyInput("")
            .appendField("的含一氧化碳量值")
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(Blockly.Doubao_IMU_GET_ZHI);
    }
}

Blockly.Arduino.yyhtcgq = function() {
    var mode = this.getFieldValue(pinNamemn);
    return ['analogRead(' + mode + ')', 0]

}

// 温度传感器
Blockly.Blocks.wdcgq = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput("")
            .appendField("温度传感器")
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjmn), pinNamemn)
        this.appendDummyInput("")
            .appendField("的温度值")
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(Blockly.Doubao_IMU_GET_ZHI);
    }
}

Blockly.Arduino.wdcgq = function() {
    var mode = this.getFieldValue(pinNamemn);
    return ['analogRead(' + mode + ')', 0]

}

// 火焰传感器
Blockly.Blocks.hycgq = {
    init: function() {
        this.setColour('#d8271d');
        this.appendDummyInput("")
            .appendField("火焰传感器")
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjmn), pinNamemn)
        this.appendDummyInput("")
            .appendField("的火焰强度")
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(Blockly.Doubao_IMU_GET_ZHI);
    }
}

Blockly.Arduino.hycgq = function() {
    var mode = this.getFieldValue(pinNamemn);
    return ['analogRead(' + mode + ')', 0]

}

/**
 * imu 加速度计
 */
Blockly.Blocks.imu = {
    init: function() {
        this.setColour('#d8271d');
        this.appendDummyInput()
            .appendField('IMU(加速度计)');
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown([
                ['X', "MMA8653_x_Gdata()"],
                ['Y', "MMA8653_y_Gdata()"],
                ['Z', "MMA8653_z_Gdata()"]
            ]), 'mode')
        this.appendDummyInput("")
            .appendField("获取轴的加速度值")
        this.appendDummyInput("")
            .appendField(Blockly.Doubao_IMU_GET_JSD + '(-1.00 ~ 1.00)')
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(Blockly.Doubao_IMU_GET_ZHI + '(-1.00 ~ 1.00)');
    }
}


Blockly.Arduino.imu = function() {
    var mode = this.getFieldValue('mode');
    Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);'
    Blockly.Arduino.setups_['setup_Wire'] = 'Wire.begin();'
    Blockly.Arduino.setups_['imu'] = 'initMMA8653();'

    Blockly.Arduino.definitions_['imu'] = '#include "MMA8653Library.h"';
    Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
    return [mode, Blockly.Arduino.ORDER_ATOMIC];
}


/**
 * imu1
 */

Blockly.Blocks.imu1 = {
        init: function() {
            this.setColour('#d8271d');
            this.appendDummyInput()
                .appendField('IMU');
            this.appendDummyInput()
                .appendField('IMU(加速度计)');
            this.appendDummyInput("")
                .appendField(new Blockly.FieldDropdown([
                    ['X', "MMA8653_x_angle()"],
                    ['Y', "MMA8653_y_angle()"]
                ]), 'mode')
            this.appendDummyInput("")
                .appendField("获取轴的角度值")
            this.setInputsInline(true);
            this.setOutput(true);
            this.setTooltip(Blockly.Doubao_IMU_GET_ZHI);
        }
    }
    // imu
Blockly.Arduino.imu1 = function() {
    var mode = this.getFieldValue('mode');
    Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);'
    Blockly.Arduino.setups_['setup_Wire'] = 'Wire.begin();'
    Blockly.Arduino.setups_['imu'] = 'initMMA8653();'
    Blockly.Arduino.definitions_['imu'] = '#include "MMA8653Library.h"';
    Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
    return [mode, Blockly.Arduino.ORDER_ATOMIC];
}

/***************************************************
 * 执行器
 */

Blockly.Blocks.actuator.HUE = 100;

// 舵机
Blockly.Blocks.servo_move = {
    init: function() {
        this.setColour('#fbb217');
        this.appendDummyInput("")
            .appendField(Blockly.HTE_SERVO)
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjall), PinNameAll)
        this.appendValueInput("DEGREE", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.HTE_DEGREE_0_180);
        this.appendValueInput("DELAY_TIME", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.HTE_DELAY + '(' + Blockly.HTE_DELAY_MS + ')');
        this.setInputsInline(true)
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.HTE_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
    }
};

Blockly.Arduino.servo_move = function() {
    var dropdown_pin = this.getFieldValue(PinNameAll);
    var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
    //value_degree = value_degree.replace('(','').replace(')','')
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '0'
        //delay_time = delay_time.replace('(','').replace(')','');

    Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
    Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';';
    Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');';

    var code = 'servo_' + dropdown_pin + '.write(' + value_degree + ');\n' + 'delay(' + delay_time + ');\n';
    return code;
};


// 舵机
Blockly.Blocks.servo_writeMicroseconds = {
    init: function() {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.HTE_SERVO)
            .appendField(Blockly.HTE_PIN)
            .setCheck(Number);
        this.appendValueInput("DEGREE", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('writeMicroseconds');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
    }
};

Blockly.Arduino.servo_writeMicroseconds = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
    Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';';
    Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');';
    var code = 'servo_' + dropdown_pin + '.writeMicroseconds(' + value_degree + ');\n';
    return code;
};



// Blockly.Blocks.servo_read_degrees = {
//   init: function () {
//     this.setColour(Blockly.Blocks.actuator.HUE);
//     this.appendValueInput("PIN", Number)
//       .appendField(Blockly.HTE_SERVO)
//       .appendField(Blockly.HTE_PIN)
//       .setCheck(Number);
//     this.appendDummyInput("")
//       .setAlign(Blockly.ALIGN_RIGHT)
//       .appendField(Blockly.HTE_READ_DEGREES)
//     this.setOutput(true, Number);
//     this.setInputsInline(true);
//     this.setTooltip(Blockly.HTE_TOOLTIP_BLOCKGROUP_SERVO_READ);
//   }
// };

// Blockly.Arduino.servo_read_degrees = function () {
//   var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

//   Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
//   Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';';
//   Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');';

//   var code = 'servo_' + dropdown_pin + '.read()';
//   return [code, Blockly.Arduino.ORDER_ATOMIC];
// };

// 螺旋桨
Blockly.Blocks.propeller = {
    init: function() {
        this.setColour('#fbb217');
        this.appendDummyInput()
            .appendField(Blockly.Doubao_Propeller);
        this.appendDummyInput("")
            .appendField(Blockly.HTE_PIN)
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown([
                ['3', "3"],
                ['5', "5"],
                ['6', "6"],
                ['9', "9"],
                ['10', "10"],
                ['11', "11"]
            ]), PinNameAll)
        this.appendDummyInput("")
            .appendField("转速在（0-255）之间")
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('0', Blockly.FieldTextInput.math_number_validator), 'NUM'),
        this.setInputsInline(true);
        this.setPreviousStatement(true, null); //上连接
        this.setNextStatement(true, null); //下连接
        this.setTooltip(Blockly.Doubao_Propeller_message + Blockly.Doubao_Propeller_Percentage);
    }
}

Blockly.Arduino.propeller = function() {
    var mode = this.getFieldValue(PinNameAll);
    var mode1 = this.getFieldValue('NUM')

    return 'analogWrite(' + mode + ',' + mode1 + ');'
}

// 电机
// Blockly.Blocks.group_stepper_setup = {
//   init: function () {
//     this.setColour(Blockly.Blocks.actuator.HUE);
//     this.appendDummyInput()
//         .appendField(Blockly.HTE_STEPPER_SETUP_STEPPER)
//         .appendField(new Blockly.FieldTextInput('mystepper'), 'VAR');
//     this.appendValueInput("PIN1", Number)
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField(Blockly.HTE_STEPPER_PIN1)
//         .setCheck(Number);
//     this.appendValueInput("PIN2", Number)
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField(Blockly.HTE_STEPPER_PIN2)
//         .setCheck(Number);
//     this.appendValueInput('steps')
//         .setCheck(Number)
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField(Blockly.HTE_STEPSPERREVOLUTION);
//     this.appendValueInput('speed')
//         .setCheck(Number)
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField(Blockly.HTE_STEPPER_SET_SPEED);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//   }
// }

// Blockly.Arduino.group_stepper_setup = function () {
//   var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
//   var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
//   var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
//   var steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
//   var speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC);
//   Blockly.Arduino.definitions_['define_stepper'] = '#include <Stepper.h>';
//   Blockly.Arduino.definitions_['var_stepper' + varName] = 'Stepper ' + varName + '(' + steps + ',' + dropdown_pin1 + ',' + dropdown_pin2 + ');';
//   Blockly.Arduino.setups_['setup_stepper' + varName] = varName + '.setSpeed(' + speed + ');';
//   return '';
// };

// 电机
// Blockly.Blocks.group_stepper_setup2 = {
//   init: function () {
//     this.setColour(Blockly.Blocks.actuator.HUE);
//     this.appendDummyInput()
//       .appendField(Blockly.HTE_STEPPER_SETUP_STEPPER)
//       .appendField(new Blockly.FieldTextInput('mystepper'), 'VAR');
//     this.appendValueInput("PIN1", Number)
//       .setAlign(Blockly.ALIGN_RIGHT)
//       .appendField(Blockly.HTE_STEPPER_PIN1)
//       .setCheck(Number);
//     this.appendValueInput("PIN2", Number)
//       .setAlign(Blockly.ALIGN_RIGHT)
//       .appendField(Blockly.HTE_STEPPER_PIN2)
//       .setCheck(Number);
//     this.appendValueInput("PIN3", Number)
//       .setAlign(Blockly.ALIGN_RIGHT)
//       .appendField(Blockly.HTE_STEPPER_PIN3)
//       .setCheck(Number);
//     this.appendValueInput("PIN4", Number)
//       .setAlign(Blockly.ALIGN_RIGHT)
//       .appendField(Blockly.HTE_STEPPER_PIN4)
//       .setCheck(Number);
//     this.appendValueInput('steps')
//       .setCheck(Number)
//       .setAlign(Blockly.ALIGN_RIGHT)
//       .appendField(Blockly.HTE_STEPSPERREVOLUTION);
//     this.appendValueInput('speed')
//       .setCheck(Number)
//       .setAlign(Blockly.ALIGN_RIGHT)
//       .appendField(Blockly.HTE_STEPPER_SET_SPEED);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//   }
// }

// Blockly.Arduino.group_stepper_setup2 = function () {
//   var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
//   var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
//   var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
//   var dropdown_pin3 = Blockly.Arduino.valueToCode(this, 'PIN3', Blockly.Arduino.ORDER_ATOMIC);
//   var dropdown_pin4 = Blockly.Arduino.valueToCode(this, 'PIN4', Blockly.Arduino.ORDER_ATOMIC);
//   var steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
//   var speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC);
//   Blockly.Arduino.definitions_['define_stepper'] = '#include <Stepper.h>';
//   Blockly.Arduino.definitions_['var_stepper' + varName] = 'Stepper ' + varName + '(' + steps + ',' + dropdown_pin1 + ',' + dropdown_pin2 + ',' + dropdown_pin3 + ',' + dropdown_pin4 + ');';
//   Blockly.Arduino.setups_['setup_stepper' + varName] = varName + '.setSpeed(' + speed + ');';
//   return '';
// };

// 电机
// Blockly.Blocks.group_stepper_move = {
//   init: function () {
//     this.setColour(Blockly.Blocks.actuator.HUE);
//     this.appendDummyInput()
//       .appendField(Blockly.HTE_STEPPER)
//       .appendField(new Blockly.FieldTextInput('mystepper'), 'VAR');
//     this.appendValueInput('step')
//       .setCheck(Number)
//       .setAlign(Blockly.ALIGN_RIGHT)
//       .appendField(Blockly.HTE_STEPPER_STEP);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setInputsInline(true);
//   }
// }

// Blockly.Arduino.group_stepper_move = function () {
//   var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
//   var step = Blockly.Arduino.valueToCode(this, 'step', Blockly.Arduino.ORDER_ATOMIC);
//   Blockly.Arduino.definitions_['define_stepper'] = '#include <Stepper.h>';
//   return varName + '.step(' + step + ');'
// };


// 电机
Blockly.Blocks.controls_dja = {
    init: function() {
        this.setColour('#fbb217');
        this.appendDummyInput()
            .appendField(Blockly.HTE_NOVA_MOTOR)
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["A", "A"],
                ["B", "B"]
            ]), "mode1")
        this.appendDummyInput("")
            .appendField(Blockly.LUXE_DIR)
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["反", "LOW"],
                ["正", "HIGH"]
            ]), "mode");
        this.appendDummyInput("")
            .appendField(Blockly.LUXE_SPEED + '(0-255)')
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput('100', Blockly.FieldTextInput.math_number_validator), 'NUM');
        this.appendDummyInput()
            .appendField("转速")
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true)
    }
}

Blockly.Arduino.controls_dja = function() {
    var mode = this.getFieldValue('mode');
    var aorb = this.getFieldValue('mode1')

    var mode1 = this.getFieldValue('NUM')

    console.log(typeof(this.getFieldValue('NUM')))
    if (aorb === "A") {
        Blockly.Arduino.setups_['setup_output_5'] = 'pinMode( 5 , OUTPUT);';
        Blockly.Arduino.setups_['setup_output_7'] = 'pinMode( 7 , OUTPUT);';
        if (mode === "HIGH") {
            return `analogWrite(5, 255-${mode1} );
digitalWrite(7,${mode});\n`
        } else {
            return `analogWrite(5, ${mode1} );
digitalWrite(7,${mode});\n`
        }
    } else {
        Blockly.Arduino.setups_['setup_output_6'] = 'pinMode( 6 , OUTPUT);';
        Blockly.Arduino.setups_['setup_output_8'] = 'pinMode( 8 , OUTPUT);';
        if (mode === "HIGH") {
            return `analogWrite(6, 255-${mode1} );
digitalWrite(8,${mode});\n`
        } else {
            return `analogWrite(6, ${mode1} );
digitalWrite(8,${mode});\n`
        }
    }




}

Blockly.Blocks.controls_djb = {
    init: function() {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput()
            .appendField(Blockly.HTE_NOVA_MOTOR + " B")
        this.appendDummyInput("")
            .appendField(Blockly.LUXE_DIR)
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["反", "LOW"],
                ["正", "HIGH"]
            ]), "mode");
        this.appendDummyInput("")
            .appendField(Blockly.LUXE_SPEED + '(0-255)')
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput('100', Blockly.FieldTextInput.math_number_validator), 'NUM');
        this.appendDummyInput()
            .appendField("转速")
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true)
    }
}

Blockly.Arduino.controls_djb = function() {
    var mode = this.getFieldValue('mode');
    var mode1 = this.getFieldValue('NUM');
    Blockly.Arduino.setups_['setup_output_6'] = 'pinMode( 6 , OUTPUT);';
    Blockly.Arduino.setups_['setup_output_8'] = 'pinMode( 8 , OUTPUT);';
    if (mode === "HIGH") {
        return `analogWrite(6, 255-${mode1} );
digitalWrite(8,${mode});\n`
    } else {
        return `analogWrite(6, ${mode1} );
digitalWrite(8,${mode});\n`
    }

}

// led
Blockly.Blocks.led = {
    init: function() {
        this.setColour('#fbb217');
        this.appendDummyInput()
            .appendField('LED');
        this.appendDummyInput("")
            .appendField(Blockly.HTE_PIN)
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjall), PinNameAll)
        this.appendDummyInput("")
            .appendField(Blockly.HTE_NOVA_STAT)
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown([
                [Blockly.LUXE_LED_OFF, "HIGH"],
                [Blockly.LUXE_LED_ON, "LOW"]
            ]), 'mode1')
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
    }
}

Blockly.Arduino.led = function() {
    var mode = this.getFieldValue(PinNameAll);
    var mode1 = this.getFieldValue('mode1');
    Blockly.Arduino.setups_['setup_output_' + mode] = 'pinMode(' + mode + ', OUTPUT);\n';
    return 'digitalWrite(' + mode + ',' + mode1 + ');'
}

// 蜂鸣器

Blockly.Blocks.fmq1 = {
    init: function() {
        this.setColour('#fbb217');
        this.appendDummyInput()
            .appendField(Blockly.HTE_DF_BUZZER);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjall), PinNameAll)
        this.appendDummyInput("")
            .appendField("发出的频率" + '(0-65535)')
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('3000', Blockly.FieldTextInput.math_number_validator), 'NUM'),
            this.setInputsInline(true);
        this.setPreviousStatement(true, null); //上连接
        this.setNextStatement(true, null); //下连接
    }
}

Blockly.Arduino.fmq1 = function() {
    var mode = this.getFieldValue(PinNameAll);
    var mode1 = this.getFieldValue('NUM');
    Blockly.Arduino.setups_['setup_output_' + mode] = 'pinMode(' + mode + ', OUTPUT);\n';
    return 'tone(' + mode + ',' + mode1 + ');'

}

// 蜂鸣器
Blockly.Blocks.fmq2 = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.HTE_LCD_STAT_OFF + Blockly.HTE_DF_BUZZER);
        this.appendDummyInput("")
            .appendField(Blockly.HTE_PIN)
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjall), 'mode')
        this.setInputsInline(true);
        this.setOutput(true);
    }
}

Blockly.Arduino.fmq2 = function() {
    var mode = this.getFieldValue('mode');
    return ['noTone(' + mode + ')', 0]
}

var TONE_NOTES = [
    ["NOTE_C3", "131"],
    ["NOTE_D3", "147"],
    ["NOTE_E3", "165"],
    ["NOTE_F3", "175"],
    ["NOTE_G3", "196"],
    ["NOTE_A3", "220"],
    ["NOTE_B3", "247"],
    ["NOTE_C4", "262"],
    ["NOTE_D4", "294"],
    ["NOTE_E4", "330"],
    ["NOTE_F4", "349"],
    ["NOTE_G4", "392"],
    ["NOTE_A4", "440"],
    ["NOTE_B4", "494"],
    ["NOTE_C5", "532"],
    ["NOTE_D5", "587"],
    ["NOTE_E5", "659"],
    ["NOTE_F5", "698"],
    ["NOTE_G5", "784"],
    ["NOTE_A5", "880"],
    ["NOTE_B5", "988"]
];


Blockly.Blocks.tone_notes = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(TONE_NOTES), 'STAT');
        this.setOutput(true, Number);
    }
};

Blockly.Blocks.controls_tone = {
    init: function() {
        this.setColour('#fbb217');
        this.appendDummyInput()
            .appendField(Blockly.HTE_DF_BUZZER);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjall), PinNameAll)
        this.appendValueInput('FREQUENCY')
            .appendField()
            //.setAlign(Blockly.ALIGN_RIGHT)
            .appendField("播放声音音调");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.HTE_TOOLTIP_BLOCKGROUP_TONE);
    }
};

Blockly.Arduino.controls_tone = function() {
    var dropdown_pin = this.getFieldValue(PinNameAll);
    var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',
        Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    var code = "";
    //  if(window.isNaN(dropdown_pin)){
    //     code = code+'pinMode('+dropdown_pin+', OUTPUT);\n';
    //  }else{
    Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);\n';
    //  }
    code += "tone(" + dropdown_pin + "," + fre + ");\n";
    return code;
};

Blockly.Blocks.controls_tone2 = {
    init: function() {
        this.setColour('#fbb217');
        this.appendDummyInput()
            .appendField(Blockly.HTE_DF_BUZZER);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjall), PinNameAll)
        this.appendValueInput('FREQUENCY')
            .setCheck(Number)
            //.setAlign(Blockly.ALIGN_RIGHT)
            .appendField("播放声音音调");
        this.appendValueInput('DURATION')
            .setCheck(Number)
            //.setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.HTE_DURATION);
        this.appendDummyInput("")
            .appendField(Blockly.HTE_DELAY_MS);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.HTE_TOOLTIP_BLOCKGROUP_TONE2);
    }
};

Blockly.Arduino.controls_tone2 = function() {
    var dropdown_pin = this.getFieldValue(PinNameAll);
    var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',
        Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    var dur = Blockly.Arduino.valueToCode(this, 'DURATION',
        Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    var code = "";
    //  if(window.isNaN(dropdown_pin)){
    //     code = code+'pinMode('+dropdown_pin+', OUTPUT);\n';
    //  }else{
    Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);\n';
    //  }
    code += "tone(" + dropdown_pin + "," + fre + "," + dur + ");\n";
    return code;
};


Blockly.Blocks.controls_notone = {
    init: function() {
        this.setColour('#fbb217');
        this.appendDummyInput()
            .appendField("关闭" + Blockly.HTE_DF_BUZZER);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(gjall), PinNameAll)
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.HTE_TOOLTIP_BLOCKGROUP_NOTONE);
    }
};

Blockly.Arduino.tone_notes = function() {
    var code = this.getFieldValue('STAT');
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.controls_notone = function() {
    var dropdown_pin = this.getFieldValue(PinNameAll);
    var code = '';
    //  if(window.isNaN(dropdown_pin)){
    //    code = code+'pinMode('+dropdown_pin+', OUTPUT);\n';
    //  }else{
    Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);\n';
    //  }
    code += "noTone(" + dropdown_pin + ");\n";
    return code;
};