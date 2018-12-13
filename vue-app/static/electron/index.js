const serialport = require('serialport')
const {
  ipcRenderer,
  shell
} = require("electron");
const _ = require('underscore')
const { dialog } = require('electron').remote
const {
  exec,
  kill,
  execFile
} = require('child_process')
const readline = require('readline')
var fastXmlParser = require('fast-xml-parser');
var he = require('he');

const {
  readFileSync,
  unlinkSync,
  writeFileSync,
  writeFile
} = require("fs");
class Ele {
  constructor(option = {}) {
    this.COMV = option.COMV

  }
  /**
   * 保存port
   */
  saveport() {

  }
  /**
   * 查找port
   */
  static getport() {
    return new Promise((res, rej) => {
      serialport.list((err, posts) => {
        if (err) {
          rej(err)
        } else {
          res(posts)
        }
      })
    })
  }

  getxml(url) {
    return readFileSync(url, "utf8");
  }

  async  cupload(x) {
    let bulid;
    let text;
    const h = vm.$createElement

    const content_arduino = Blockly.Arduino.workspaceToCode(
      Blockly.mainWorkspace
    );
    let COMV = null
    const board = 'arduino:avr:uno'
    if (x == 1) {
      bulid = "--upload";
      text = "下载";
      COMV = this.COMV
      vm.$notify({
        title: '提示',
        message: h('i', { style: 'color: teal' },
          `开始${text}`)
      });
      ipcRenderer.send('closeport-admin', {})

    } else {
      bulid = "--verify";
      text = "编译";
      vm.$notify({
        title: '提示',
        message: h('i', { style: 'color: teal' },
          `开始${text}`)
      });
    }
    //写入代码
    let sta = await filters(textIno, content_arduino)
    //生成cmd命令
    return new Promise((res, rej) => {
      let arduino_cmd_string = geiArduinoCmd(bulid, board, COMV)
      //开始执行
      console.log(arduino_cmd_string)
      const pass = exec(arduino_cmd_string)
      const stderr = pass.stderr
      const stdout = pass.stdout
      const error = pass.error
      let str = '';
      let timeout = true
      str = Official
      var regex = new RegExp('exit', 'i');
      const rl = readline.createInterface({
        input: stderr
      })
      const r2 = readline.createInterface({
        input: stdout
      })
      let arduinoLog = document.getElementById('arduinoLog')
      rl.on('line', (input) => {
        console.log(input)
        switch (input.trim()) {
          case 'exit status 1':
            rej("代码编译出错")
            break;
          case 'An error occurred while uploading the sketch':
            rej("下载出错")
            break;
          case "Overriding Baud Rate          : 115200":
            x()
            break;
          case "avrdude: stk500_recv(): programmer is not responding":
            pass.kill(0)
            rej("串口超出, 检查是否连接正常")
            break;
        }
        str += input + '\r'
        arduinoLog.value = str
        arduinoLog.scrollTop = arduinoLog.scrollHeight;
      })
      let x = function () {
        return setTimeout(() => {
          pass.kill(0)
          rej("串口超出, 检查是否连接正常")
        }, 20000)
      }
      r2.on('line', (input) => {
        str += input + '\r'
        arduinoLog.value = str
        arduinoLog.scrollTop = arduinoLog.scrollHeight;
      }).on('close', () => {
        this.state = 0;
        res(true)
      });
    })
  }

  static inspectxml() {
    let xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    let xml = new XMLSerializer().serializeToString(xmlDom)
    let xmljson = chuankoufy(xml)
    if (xmljson.xml.block[0] == undefined) {
      xmljson.xml.block[0] = xmljson.xml.block
    }
    let state = this.inspectxmlblock(xmljson.xml.block)

    if (state === true) {
      return {
        state: 0
      }
    } else {
      let x = state.toString()
      return {
        state: 1,
        err: `电机存在管脚${x}重复使用!请检查代码.`
      }

    }

  }
  static inspectxmlblock(block) {
    console.log(block)
    // 记录管教
    let arr = []
    let dj = []
    console.log(block)
    for (let v in block) {
      attr(block[v])
    }

    function attr(atts) {
      for (let v in atts) {
        if (v === "field") {
          if (atts[v][0] != undefined && atts.field[0].attr["@_name"] === "gjall") {
            arr.push(atts[v][0]["#text"])
          } else {
            arr.push(atts[v]["#text"])
          }
        }
        if (v === "next") {
          attr(atts.next.block)
        }
        if (v === "attr" && atts.attr["@_type"] === "controls_dja") {
          dj.push(atts.field[0]["#text"])
        }
        if(v === "value") {
          if(atts.value[0] == undefined && atts.value.block != undefined ){
            attr(atts.value.block)
          }else if(atts.value[0] != undefined){
            for(let i in atts.value) {
              if(atts.value[i].block != undefined ){
                attr(atts.value[i].block)
              }
            }
          }
        }
        if(v === "statement") {
          if(atts.statement[0] == undefined && atts.statement.block != undefined ){
            attr(atts.statement.block)
          }else if(atts.statement[0] != undefined){
            for(let i in atts.statement) {
              if(atts.statement[i].block != undefined ){
                attr(atts.statement[i].block)
              }
            }
          }
        }
      }
    }

    console.log(arr)
    console.log(dj)
    arr = _.uniq(arr)
    let arra = []
    let arrb = []
    dj = _.intersection(dj, ["A", "B"]);
    for (let v of dj) {
      if (v == "A") {
        arra = _.intersection(arr, [5, 7]);
      }
      if (v == "B") {
        arrb = _.intersection(arr, [6, 8]);
      }
    }
    if (arra.length != 0 || arrb.length != 0) {
      return _.union(arra, arrb)
    } else {
      return true
    }

  }


}

function saveXml() {
  let xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  let xmlText = Blockly.Xml.domToPrettyText(xmlDom);
  if (xmlText == '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>') {
    vm.$alert('好像什么都没有', '提示', {
      confirmButtonText: '确定'
    })
    return
  }

  ipcRenderer.send("saveXml", {
    name: '',
    text: xmlText
  });
}


function openFile() {
  ipcRenderer.send('open-file', 'open-file');
}

ipcRenderer.on('file-path', (event, arg) => {
  if (arg) {
    ropenXml(arg[0])
  }
})
function ropenXml(p) {
  //Blockly.Workspace.getTopBlocks setCollapsed
  const result = readFileSync(p, "utf8");
  try {
    var xml = Blockly.Xml.textToDom(result);
  } catch (e) {
    vm.$alert("请选择一个.xml的文件" + e, "提示", {
      confirmButtonText: '确定'
    });
    return false;
  }
  vm.$confirm('清空所有块, 是否继续?', '提示', {
    confirmButtonText: '清空',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    Blockly.mainWorkspace.clear();
    Blockly.Xml.appendDomToWorkspace(xml, Blockly.mainWorkspace);
    const tab_blocks = document.getElementById("tab_blocks");
    // 保存文件路径
    baseURI = p
    setTimeout(function () {
      Blockly.mainWorkspace.undo(0)
      Blockly.mainWorkspace.undo(1)
    })
    return true;
  }).catch(() => {
    vm.$message({
      type: 'info',
      message: '已取消'
    });
    return false;
  });
}
function openWin() {
  ipcRenderer.send("openPortWin")
}

function taobao() {
  shell.openExternal("https://shop253940311.taobao.com/")
}



function clearLog() {

}

function copyLog() {

}

function website() {
  shell.openExternal('http://www.hterobot.com');
}


function filters(ino, stdout) {
  return new Promise(function (resolve, reject) {
    writeFile(ino, stdout, (err) => {
      if (err) {
        return reject(err);
      } else {
        return resolve({
          state: 0
        });
      }
    });
  })
}


ipcRenderer.on('amaximize', (event, arg) => {
  changeDivHeight()
})

function changeDivHeight() {
  try {
    let height = window.innerHeight;
    document.getElementById("blocklyDiv").style.height = height - 120 + "px";
    document.getElementById("rightCode").style.height = height - 120 + "px";
    document.getElementById("code_size").style.height =
      (height - 120 - 3) / 1.5 + "px";
    document.getElementById("logText").style.height =
      height - 120 - (height - 120 - 3) / 1.5 - 3 + "px";
  } catch (err) {

  }

}


function chuankoufy(xmlData) {
  var options = {
    attributeNamePrefix: "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName: "#text",
    ignoreAttributes: false,
    ignoreNameSpace: false,
    allowBooleanAttributes: true,
    parseNodeValue: true,
    parseAttributeValue: true,
    arrayMode: true,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    localeRange: "", //To support non english character in tag/attribute values.
    attrValueProcessor: a => he.decode(a, { isAttributeValue: true }),//default is a=>a
    tagValueProcessor: a => he.decode(a) //default is a=>a
  };
  return fastXmlParser.parse(xmlData, options);
}

