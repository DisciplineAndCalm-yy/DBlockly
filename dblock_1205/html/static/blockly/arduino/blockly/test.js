goog.provide('Blockly.Arduino.test');
goog.require('Blockly.Arduino');

Blockly.Blocks['Test_block'] =  {
    init: function() {
        this.appendDummyInput()
            .appendField("image:")
            .appendField(new Blockly.FieldImage("http://image.so.com/v?q=%E8%8B%B1%E5%9B%BD%E7%9A%84%E9%A2%9C%E8%89%B2%E6%8B%BC%E5%86%99&src=tab_www&correct=%E8%8B%B1%E5%9B%BD%E7%9A%84%E9%A2%9C%E8%89%B2%E6%8B%BC%E5%86%99&cmsid=5bcf1e29cac82c31fa28c7fa39ae1df6&cmran=0&cmras=0&cn=0&gn=0&kn=0#multiple=0&gsrc=1&dataindex=72&id=cf217fbb6bed8286f51a8f2ea27a9b98&prevsn=0&currsn=60&jdx=72&fsn=60", 30, 30, "*"));
    }
}

Blockly.Blocks['Test_colour'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Colour Picker: ')
            .appendField(new Blockly.FieldColour('#ff0000'), 'FIELDNAME');
        this.setColour(200)
    }
}

// Blockly.Blocks.Test_colour = {
//     init: function() {
//         this.appendDummyInput()
//             .appendField('Colour Picker: ')
//             .appendField(new Blockly.FieldColour('#ff0000'), 'FIELDNAME');
//     }
// }

Blockly.Blocks['Test_date'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('date:')
            .appendField(new Blockly.FieldDate('2018-12-04'), 'FIELDNAME');
    }
};

Blockly.Blocks['Test_length'] = {
    init: function() {
      this.appendValueInput('VALUE')
          .setCheck('String')
          .appendField('length of');
      this.setOutput(true, 'Number');
      this.setColour(160);
      this.setTooltip('Returns number of letters in the provided text.');
      this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    }
}

Blockly.Blocks['string_length'] = {
    init: function() {
      this.appendValueInput('VALUE')
          .setCheck('String')
          .appendField('length of');
      this.setOutput(true, 'Number');
      this.setColour(160);
      this.setTooltip('Returns number of letters in the provided text.');
      this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    }
}

Blockly.Blocks['Test_string_length'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField('length of');
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Returns number of letters in the provide text.');
        this.setHelpUrl('http://www.3schools.com/jsref/jsref_length_string.asp');
    }
}

Blockly.Blocks['Test_example_angle'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('angle:')
            .appendField(new Blockly.FieldAngle(90), 'FIELDNAME');
        this.setColour(300)
    }
};
