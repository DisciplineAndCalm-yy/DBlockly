goog.provide('Blockly.Arduino.test')
goog.require('Blockly.Arduino')
// goog.require('Blockly.FieldDate')

Blockly.Arduino['Test_block'] = function() {
    
}

Blockly.Arduino['Test_colour'] = function() {

}

Blockly.Arduino['Test_date'] = function() {

}

Blockly.Arduino['Test_length'] = function(block) {
    //String or array length.
    var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE', 
        Blockly.Arduino.ORDER_FUNCTION_CALL) || '\'\'';
    return [argument0 + '.length', Blockly.Arduino.ORDER_MEMBER];
}

Blockly.Arduino['text_length'] = function(block) {
    // String or array length.
    var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE',
        Blockly.Arduino.ORDER_FUNCTION_CALL) || '\'\'';
    return [argument0 + '.length', Blockly.Arduino.ORDER_MEMBER];
}

Blockly.Arduino['Test_string_length'] = function() {
    //String or array length.
    var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE',
        Blockly.Arduino.ORDER_FUNCTION_CALL) || '\'\'';
    return [argument0 + '.length', Blockly.Arduino.ORDER_MEMBER];
}

Blockly.Arduino['text_indexOf'] = function(block) {
    // Search the text for a substring.
    var operator = block.getFieldValue('END') == 'FIRST' ? 'indexOf' : 'lastIndexOf';
    var subString = Blockly.Arduino.valueToCode(block, 'FIND',
        Blockly.Arduino.ORDER_NONE) || '\'\'';
    var text = Blockly.Arduino.valueToCode(block, 'VALUE',
        Blockly.Arduino.ORDER_MEMBER) || '\'\'';
    var code = text + '.' + operator + '(' + subString + ')';
    return [code, Blockly.Arduino.ORDER_MEMBER];
}