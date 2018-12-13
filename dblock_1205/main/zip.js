const {open} = require('./unzip');
const path = require('path')
const arduinozip = path.join(__dirname, '../Arduino.zip')
const log = require('electron-log')
const {existsSync} = require('fs')
const cwd = path.join(process.cwd(), './')


exports.zippath =  function () {
    try{
    process.chdir(path.join(__dirname, ".."))

    }catch(err){
        throw err
        
    }
    console.log(process.cwd())
    const arduino = path.join(__dirname, "../Arduino")
    const arduino_dubug = path.join(__dirname, "../Arduino/arduino_debug.exe")
    if(existsSync(arduino) && existsSync(arduino_dubug)) {
        return true
    }else {
        return false
    }
    
}

exports.zip = async  function () {
    log.info("开始解压文件")
    try{
        let i =  await open(arduinozip)
        log.info("解压完成")
        process.chdir(cwd)
        return true
    }catch(err) {
        log.info(err)
        process.chdir(cwd)
        return false
    }
}


