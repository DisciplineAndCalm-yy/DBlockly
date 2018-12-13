'use strict';

goog.provide('Blockly.Arduino.nova');
goog.require('Blockly.Arduino');

Blockly.Arduino.Nova_led = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STAT');
    Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
    Blockly.Arduino.definitions_['var_nova_led' + dropdown_pin] = 'LED led_' + dropdown_pin + '' + '(' + dropdown_pin + ');';
    var code = 'led' + dropdown_pin + '.' + dropdown_stat + ';\n'
    return code;
}