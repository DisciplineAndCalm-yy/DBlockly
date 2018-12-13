'use strict';

goog.provide('Blockly.Blocks.serial');

goog.require('Blockly.Blocks');
Blockly.Blocks.serial.HUE = '#3D56DE';
Blockly.Blocks['serial_begin'] = {
  init: function() {
    this.setColour(Blockly.Blocks.serial.HUE);
    this.appendDummyInput("")
		.appendField(new Blockly.FieldDropdown(profile.default.serial_select), "serial_select")
		.appendField(Blockly.HTE_SERIAL_BEGIN)
    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown([["9600","9600"],["19200","19200"],["38400","38400"],["57600","57600"],["115200","115200"]]), "mode")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['serial_write'] = {
    init: function () {
        this.setColour(Blockly.Blocks.serial.HUE);
        this.appendValueInput("CONTENT", String)
            .appendField(new Blockly.FieldDropdown(profile.default.serial_select), "serial_select")
            .appendField(Blockly.HTE_SERIAL_WRITE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.TEXT_WRITE_TOOLTIP);
    }
};

Blockly.Blocks['serial_print'] = {
  init: function() {
   this.setColour(Blockly.Blocks.serial.HUE);
    this.appendValueInput("CONTENT", String)
		.appendField(new Blockly.FieldDropdown(profile.default.serial_select), "serial_select")
        .appendField(Blockly.HTE_SERIAL_PRINT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TEXT_PRINT_TOOLTIP);
  }
};

Blockly.Blocks['serial_println'] = {
   init: function() {
    this.setColour(Blockly.Blocks.serial.HUE);
    this.appendValueInput("CONTENT", String)
		.appendField(new Blockly.FieldDropdown(profile.default.serial_select), "serial_select")
        .appendField(Blockly.HTE_SERIAL_PRINTLN);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TEXT_PRINT_TOOLTIP);
  }
};
//��ӡ16������
Blockly.Blocks['serial_print_hex'] = {
   init: function() {
    this.setColour(Blockly.Blocks.serial.HUE);
    this.appendValueInput("CONTENT", Number)
		.appendField(new Blockly.FieldDropdown(profile.default.serial_select), "serial_select")
        .appendField(Blockly.HTE_SERIAL_PRINT_HEX)
        .setCheck(Number);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.TEXT_PRINT_HEX_TOOLTIP);
  }
};

Blockly.Blocks['serial_available'] = {
  init: function() {
    this.setColour(Blockly.Blocks.serial.HUE);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(profile.default.serial_select), "serial_select")
        .appendField(Blockly.HTE_SERIAL_AVAILABLE);
	this.setOutput(true, Boolean);
	this.setTooltip(Blockly.HTE_TOOLTIP_BLOCKGROUP_SERIAL_AVAILABLE);
  }
};

Blockly.Blocks['serial_readstr'] = {
  init: function() {
    this.setColour(Blockly.Blocks.serial.HUE);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(profile.default.serial_select), "serial_select")
        .appendField(Blockly.HTE_SERIAL_READSTR);
	this.setOutput(true, String);
	this.setTooltip(Blockly.HTE_TOOLTIP_BLOCKGROUP_SERIAL_READ_STR);
  }
};

Blockly.Blocks['serial_readstr_until'] = {
  init: function() {
    this.setColour(Blockly.Blocks.serial.HUE);
	this.appendValueInput("CONTENT", Number)
		.appendField(new Blockly.FieldDropdown(profile.default.serial_select), "serial_select")
        .appendField(Blockly.HTE_SERIAL_READSTR_UNTIL)
		.setCheck(Number);
	this.setInputsInline(true);
	this.setOutput(true, String);
  }
};

Blockly.Blocks['serial_parseInt_Float'] = {
  init: function() {
    this.setColour(Blockly.Blocks.serial.HUE);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(profile.default.serial_select), "serial_select")
        //.appendField(Blockly.HTE_SERIAL_READ)
		.appendField(new Blockly.FieldDropdown([["read", "read"],["peek", "peek"],["parseInt", "parseInt"], ["parseFloat", "parseFloat"]]), "STAT");
	this.setOutput(true, Number);
	var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('STAT');
      var TOOLTIPS = {
        'parseInt': Blockly.HTE_TOOLTIP_BLOCKGROUP_SERIAL_READ_INT,
        'parseFloat': Blockly.HTE_TOOLTIP_BLOCKGROUP_SERIAL_READ_FLOAT
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks['serial_flush'] = {
  init: function() {
   this.setColour(Blockly.Blocks.serial.HUE);
    this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(profile.default.serial_select), "serial_select")
        .appendField(Blockly.HTE_SERIAL_FLUSH);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['serial_softserial'] = {
  init: function() {
   this.setColour(Blockly.Blocks.serial.HUE);
   this.appendValueInput("RX", Number)
       .appendField(Blockly.HTE_SETUP)
	   .appendField(new Blockly.FieldDropdown(profile.softserial_select), "serial_select")
	   .appendField("RX#")
       .setCheck(Number)
	   .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("TX", Number)
	   .appendField("TX#")
       .setCheck(Number)
	   .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  }
};

Blockly.Blocks['serial_event'] = {
    init: function () {
        this.setColour(Blockly.Blocks.serial.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(profile.default.serial_select), "serial_select")
            .appendField(Blockly.HTE_SERIAL_EVENT);
        this.appendStatementInput('DO')
            .appendField(Blockly.HTE_DO);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};
