const log = require('electron-log')
var format = require('util');
const fs = require('fs')
const path = require('path')
const logtxt = path.join(__dirname, "../log/log.txt")
log.transports.file.level = 'warn';
log.transports.file.format = '{h}:{i}:{s}:{ms} {text}';

// Set approximate maximum log size in bytes. When it exceeds,
// the archived log will be saved as the log.old.log file
log.transports.file.maxSize = 5 * 1024 * 1024;

// Write to this file, must be set before first logging
log.transports.file.file = path.join(__dirname + '../log/log.txt')

// fs.createWriteStream options, must be set before first logging
// you can find more information at
// https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options
log.transports.file.streamConfig = { flags: 'w' };

// set existed file stream

log.transports.file.stream = fs.createWriteStream(logtxt);
