var yauzl = require("yauzl");
var path = require("path");
var fs = require("fs");
var util = require("util");
var Transform = require("stream").Transform;
const os = require('os')
const homedir = os.homedir()
function mkdirp(dir, cb) {
  if (dir === ".") return cb();
  fs.stat(dir, function (err) {
    if (err == null) return cb(); // already exists

    var parent = path.dirname(dir);
    mkdirp(parent, function () {
      //process.stdout.write(dir.replace(/\/$/, "") + "/\n");
      fs.mkdir(dir, cb);
    });
  });
}



function openMiddleOfFile(zipFilePath, options, offsetArg, lenArg, endArg, handleZipFile) {
  fs.open(zipFilePath, "r", function (err, fd) {
    if (err != null) throw err;
    fs.fstat(fd, function (err, stats) {
      // resolve optional parameters
      if (offsetArg == null) offsetArg = 0;
      if (lenArg == null && endArg == null) endArg = stats.size;
      if (endArg == null) endArg = lenArg + offsetArg;
      else if (endArg < 0) endArg = stats.size + endArg;
      // validate parameters
      if (offsetArg < 0) throw new Error("--offset < 0");
      if (lenArg < 0) throw new Error("--len < 0");
      if (offsetArg > endArg) throw new Error("--offset > --end");
      if (endArg > stats.size) throw new Error("--end/--len goes past EOF");

      function adjustOffset(n) {
        return n + offsetArg;
      }

      // extend RandomAccessReader
      function MiddleOfFileReader() {
        yauzl.RandomAccessReader.call(this);
      }
      util.inherits(MiddleOfFileReader, yauzl.RandomAccessReader);
      // implement required and option methods
      MiddleOfFileReader.prototype._readStreamForRange = function (start, end) {
        return fs.createReadStream(null, {
          fd: fd,
          // shift the start and end offsets
          start: start + offsetArg,
          end: end + offsetArg - 1, // the -1 is because fs.createReadStream()'s end option is inclusive
          autoClose: false,
        });
      };
      MiddleOfFileReader.prototype.read = function (buffer, offset, length, position, callback) {
        // shift the position
        fs.read(fd, buffer, offset, length, position + offsetArg, callback);
      };
      MiddleOfFileReader.prototype.close = function (callback) {
        fs.close(fd, callback);
      };

      yauzl.fromRandomAccessReader(new MiddleOfFileReader(), endArg - offsetArg, options, handleZipFile);
    });
  });
}



const handleZipFile = function (err, zipfile) {
  new Promise((resolve, reject) => {

    if (err) reject(err);

    // track when we've closed all our file handles
    var handleCount = 0;
    function incrementHandleCount() {
      handleCount++;
    }
    function decrementHandleCount() {
      handleCount--;
      if (handleCount === 0) {
        console.log("all input and output handles closed");
      }
    }

    incrementHandleCount();
    zipfile.on("close", function () {
      console.log("closed input file");
      decrementHandleCount();
      resolve(true)
    });

    zipfile.readEntry();
    zipfile.on("entry", function (entry) {
      if (/\/$/.test(entry.fileName)) {
        // directory file names end with '/'
        mkdirp(entry.fileName, function () {
          if (err) throw err;
          zipfile.readEntry();
        });
      } else {
        // ensure parent directory exists
        mkdirp(path.dirname(entry.fileName), function () {
          zipfile.openReadStream(entry, function (err, readStream) {
            if (err) throw err;
            // report progress through large files
            var byteCount = 0;
            var totalBytes = entry.uncompressedSize;
            var lastReportedString = byteCount + "/" + totalBytes + "  0%";
            process.stdout.write(entry.fileName + "..." + lastReportedString);
            function reportString(msg) {
              var clearString = "";
              for (var i = 0; i < lastReportedString.length; i++) {
                clearString += "\b";
                if (i >= msg.length) {
                  clearString += " \b";
                }
              }
              process.stdout.write(clearString + msg);
              lastReportedString = msg;
            }
            // report progress at 60Hz
            var progressInterval = setInterval(function () {
              reportString(byteCount + "/" + totalBytes + "  " + ((byteCount / totalBytes * 100) | 0) + "%");
            }, 1000 / 60);
            var filter = new Transform();
            filter._transform = function (chunk, encoding, cb) {
              byteCount += chunk.length;
              cb(null, chunk);
            };
            filter._flush = function (cb) {
              clearInterval(progressInterval);
              reportString("");
              // delete the "..."
              process.stdout.write("\b \b\b \b\b \b\n");
              cb();
              zipfile.readEntry();
            };

            // pump file contents
            var writeStream = fs.createWriteStream(entry.fileName);
            incrementHandleCount();
            writeStream.on("close", decrementHandleCount);
            readStream.pipe(filter).pipe(writeStream);
          });
        });
      }
    });
  })
}

exports.open =  function (zipFilePath, doce) {
  return new Promise((resolve, reject) => {
    const cwd = process.cwd()
    const apppack = path.join(homedir,"./.hterobotapp/")
    process.chdir(apppack)
    if (!zipFilePath) {
      reject("Arduino文件不存在")
    }
    yauzl.open(zipFilePath, { lazyEntries: true }, function (err, zipfile) {
      if (err) reject(err);
      var handleCount = 0;
      function incrementHandleCount() {
        handleCount++;
      }
      function decrementHandleCount() {
        handleCount--;
        if (handleCount === 0) {
          console.log("all input and output handles closed");
        }
      }

      incrementHandleCount();
      zipfile.on("close", function () {
        console.log("closed input file");
        decrementHandleCount();
        process.chdir(cwd)
        resolve(true)
      });

      zipfile.readEntry();
      zipfile.on("entry", function (entry) {
        if (/\/$/.test(entry.fileName)) {
          // directory file names end with '/'
          mkdirp(entry.fileName, function () {
            if (err) throw err;
            zipfile.readEntry();
          });
        } else {
          // ensure parent directory exists
          mkdirp(path.dirname(entry.fileName), function () {
            zipfile.openReadStream(entry, function (err, readStream) {
              if (err) throw err;
              // report progress through large files
              var byteCount = 0;
              var totalBytes = entry.uncompressedSize;
              var lastReportedString = byteCount + "/" + totalBytes + "  0%";
              //process.stdout.write(entry.fileName + "..." + lastReportedString);
              function reportString(msg) {
                var clearString = "";
                for (var i = 0; i < lastReportedString.length; i++) {
                  clearString += "\b";
                  if (i >= msg.length) {
                    clearString += " \b";
                  }
                }
                //process.stdout.write(clearString + msg);
                lastReportedString = msg;
              }
              // report progress at 60Hz
              var progressInterval = setInterval(function () {
                reportString(byteCount + "/" + totalBytes + "  " + ((byteCount / totalBytes * 100) | 0) + "%");
              }, 1000 / 60);
              var filter = new Transform();
              filter._transform = function (chunk, encoding, cb) {
                byteCount += chunk.length;
                cb(null, chunk);
              };
              filter._flush = function (cb) {
                clearInterval(progressInterval);
                reportString("");
                // delete the "..."
                process.stdout.write("\b \b\b \b\b \b\n");
                cb();
                zipfile.readEntry();
              };

              // pump file contents
              var writeStream = fs.createWriteStream(entry.fileName);
              incrementHandleCount();
              writeStream.on("close", decrementHandleCount);
              readStream.pipe(filter).pipe(writeStream);
            });
          });
        }
      });
    })
  })

}