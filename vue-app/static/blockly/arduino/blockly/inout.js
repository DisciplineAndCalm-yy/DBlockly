'use strict';

goog.provide('Blockly.Blocks.base');

goog.require('Blockly.Blocks');

Blockly.Blocks['inout_highlow'] = {
   init: function() {
    this.setColour('#d400d4');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.HTE_HIGH, "HIGH"], [Blockly.HTE_LOW, "LOW"]]), 'BOOL')
    this.setOutput(true, Boolean);
    this.setTooltip(Blockly.HTE_TOOLTIP_INOUT_HIGHLOW);
  }
};

Blockly.Blocks['inout_pinMode'] = {
    init: function() {
        this.setColour('#d400d4');
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.HTE_PINMODE)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(Blockly.HTE_STAT)
             .appendField(new Blockly.FieldDropdown([[Blockly.HTE_PINMODEIN, "INPUT"], [Blockly.HTE_PINMODEOUT, "OUTPUT"], [Blockly.HTE_PINMODEPULLUP, "INPUT_PULLUP"]]),"MODE")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
  }
};

Blockly.Blocks.inout_digital_write = {
  init: function() {
    this.setColour('#d400d4');
    this.appendDummyInput("")
	    .appendField(Blockly.HTE_DIGITALWRITE_PIN)
	    .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      	.appendField(Blockly.HTE_STAT)
      	.appendField(new Blockly.FieldDropdown([[Blockly.HTE_HIGH, "HIGH"], [Blockly.HTE_LOW, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks.inout_digital_write2 = {
  init: function() {
    this.setColour('#d400d4');
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.HTE_DIGITALWRITE_PIN)
        .setCheck(Number);
    this.appendValueInput("STAT")
        .appendField(Blockly.HTE_STAT)
        .setCheck([Number,Boolean]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks.inout_digital_read = {
  init: function() {
    this.setColour('#d400d4');
    this.appendDummyInput("")
	      .appendField(Blockly.HTE_DIGITALREAD_PIN)
	      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, [Boolean,Number]);
    this.setTooltip(Blockly.HTE_TOOLTIP_INOUT_DIGITAL_READ);
  }
};

Blockly.Blocks.inout_digital_read2 = {
  init: function() {
    this.setColour('#d400d4');
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.HTE_DIGITALREAD_PIN)
        .setCheck(Number);
	this.setInputsInline(true);
    this.setOutput(true, [Boolean,Number]);
    this.setTooltip(Blockly.HTE_TOOLTIP_INOUT_DIGITAL_READ);
  }
};

Blockly.Blocks.inout_analog_write = {
  init: function() {
    this.setColour('#d400d4');
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.HTE_ANALOGWRITE_PIN)
        .setCheck(Number);
    this.appendValueInput("NUM", Number)
        .appendField(Blockly.HTE_VALUE2)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.HTE_TOOLTIP_INOUT_ANALOG_WRITE);
  }
};

Blockly.Blocks.inout_analog_read = {
  init: function() {
    this.setColour('#d400d4');
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.HTE_ANALOGREAD_PIN)
        .setCheck(Number);
	this.setInputsInline(true);
	this.setOutput(true, Number);
    this.setTooltip(Blockly.HTE_TOOLTIP_INOUT_ANALOG_READ);
  }
};

Blockly.Blocks.inout_buildin_led = {
   init: function() {
     this.setColour('#d400d4');
     this.appendDummyInput("")
	       .appendField(Blockly.HTE_BUILDIN_LED)
	       .appendField(Blockly.HTE_STAT)
	       .appendField(new Blockly.FieldDropdown([[Blockly.HTE_ON, "HIGH"], [Blockly.HTE_OFF, "LOW"]]), "STAT");
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
     this.setTooltip('light or off the build-in LED');
   }
};

Blockly.Blocks.controls_attachInterrupt = {
  init: function() {
    this.setColour('#d400d4');
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.HTE_ATTACHINTERRUPT_PIN)
        .setCheck(Number);
    this.appendDummyInput("")
      	.appendField(Blockly.HTE_MODE)
      	.appendField(new Blockly.FieldDropdown([[Blockly.HTE_RISING, "RISING"], [Blockly.HTE_FALLING, "FALLING"], ["低电平","LOW"],[Blockly.HTE_CHANGE, "CHANGE"]]), "mode");
	this.appendStatementInput('DO')
        .appendField(Blockly.HTE_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setTooltip(Blockly.HTE_TOOLTIP_INOUT_ATTACHINTERRUPT);
  }
};

Blockly.Blocks.controls_detachInterrupt = {
  init: function() {
    this.setColour('#d400d4');
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.HTE_DETACHINTERRUPT_PIN)
        .setCheck(Number);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
	this.setTooltip(Blockly.HTE_TOOLTIP_INOUT_DETACHINTERRUPT);
  }
};

Blockly.Blocks.controls_attachPinInterrupt = {
    init: function () {
        this.setColour('#d400d4');
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.HTE_ATTACHPININTERRUPT_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(Blockly.HTE_MODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.HTE_RISING, "RISING"], [Blockly.HTE_FALLING, "FALLING"], [Blockly.HTE_CHANGE, "CHANGE"]]), "mode");
        this.appendStatementInput('DO')
            .appendField(Blockly.HTE_DO);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.HTE_TOOLTIP_INOUT_ATTACHINTERRUPT);
    }
};

Blockly.Blocks.controls_detachPinInterrupt = {
    init: function () {
        this.setColour('#d400d4');
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.HTE_DETACHPININTERRUPT_PIN)
            .setCheck(Number);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.HTE_TOOLTIP_INOUT_DETACHINTERRUPT);
    }
};

Blockly.Blocks.inout_pulseIn = {
  init: function() {
    this.setColour('#d400d4');
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.HTE_PULSEIN)
        .setCheck(Number);
    this.appendDummyInput("")
      	.appendField(Blockly.HTE_PULSEIN_STAT)
      	.appendField(new Blockly.FieldDropdown([[Blockly.HTE_HIGH, "HIGH"], [Blockly.HTE_LOW, "LOW"]]), "STAT");
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.inout_pulseIn2 = {
  init: function() {
    this.setColour('#d400d4');
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.HTE_PULSEIN)
        .setCheck(Number);
    this.appendDummyInput("")
      	.appendField(Blockly.HTE_PULSEIN_STAT)
      	.appendField(new Blockly.FieldDropdown([[Blockly.HTE_HIGH, "HIGH"], [Blockly.HTE_LOW, "LOW"]]), "STAT");
	this.appendValueInput("TIMEOUT", Number)
        .appendField(Blockly.HTE_PULSEIN_TIMEOUT)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.inout_shiftout = {
  init: function() {
    this.setColour('#d400d4');
    this.appendDummyInput("")
        .appendField("ShiftOut");
	this.appendValueInput("PIN1", Number)
        .appendField(Blockly.HTE_DATAPIN)
        .setCheck(Number);
	this.appendValueInput("PIN2", Number)
        .appendField(Blockly.HTE_CLOCKPIN)
        .setCheck(Number);
	this.appendDummyInput("")
        .appendField(Blockly.HTE_BITORDER)
		.appendField(new Blockly.FieldDropdown([[Blockly.HTE_MSBFIRST, "MSBFIRST"], [Blockly.HTE_LSBFIRST, "LSBFIRST"]]), "ORDER");
    this.appendValueInput("DATA", Number)
        .appendField(Blockly.HTE_DATA)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


