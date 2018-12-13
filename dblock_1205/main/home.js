const log = require('electron-log')
const fs = require('fs')
const path = require('path')
const os = require('os')
const homedir = os.homedir()
const { spawn } = require('child_process')
const { version } = require('../package.json')

exports.fond = function() {
    const apppack = path.join(homedir, "./.hterobotapp/")
    const qd = path.join(__dirname, "../script/CH341SER.EXE")
    const ch341 = "C:\\Windows\\System32\\drivers\\CH341S64.SYS"
    if (!fs.existsSync(apppack)) {
        fs.mkdirSync(apppack)
        if (process.platform === 'win32') {
            if (!fs.existsSync(ch341)) {
                spawn(qd)
            }
        }
    }

    const arduino = path.join(apppack, "./Arduino")
    const arduino_dubug = path.join(apppack, "./Arduino/arduino_debug.exe")
    const logpath = path.join(apppack, "log/")
    const text = path.join(apppack, 'ino/');
    const textIno = path.join(apppack, 'ino/text.ino');
    const build_path = path.join(apppack, 'cache')
    const jiance = path.join(apppack, "ino/jiance.js")

    if (!fs.existsSync(logpath)) {
        fs.mkdirSync(logpath)

    }
    if (!fs.existsSync(text)) {
        fs.mkdirSync(text)
    }
    if (!fs.existsSync(textIno)) {
        fs.appendFileSync(textIno, "")

    }
    if (!fs.existsSync(build_path)) {
        fs.mkdirSync(build_path)
    }
    log.transports.file.level = 'warn';
    log.transports.file.format = '{h}:{i}:{s}:{ms} {text}';
    // Set approximate maximum log size in bytes. When it exceeds,
    // the archived log will be saved as the log.old.log file
    log.transports.file.maxSize = 5 * 1024 * 1024;
    // Write to this file, must be set before first logging
    if (!fs.existsSync(path.join(logpath + 'log.txt'))) {
        fs.appendFileSync(path.join(logpath + 'log.txt'), "")
    }
    log.transports.file.file = path.join(logpath + 'log.txt')
        // fs.createWriteStream options, must be set before first logging
        // you can find more information at
        // https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options
    log.transports.file.streamConfig = { flags: 'w' };
    // set existed file stream
    log.transports.file.stream = fs.createWriteStream(path.join(logpath + 'log.txt'));
    if (process.platform === 'darwin') {

        if (fs.existsSync(path.join(apppack, "./Arduino.app"))) {
            return true
        } else {
            return false
        }
    } else if (process.platform === 'win32') {
        if (fs.existsSync(arduino) && fs.existsSync(arduino_dubug)) {
            return true
        } else {
            return false
        }
    }

}