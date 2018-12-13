const {
    exec
} = require('child_process');
const fs = require('fs')


exports.filters = function(ino,stdout) {
    return  new Promise(function (resolve, reject) {
        fs.writeFile(ino, stdout, (err) => {
            if(err){
                return  reject({err});
            }else {
               return resolve({
                    state:0
                });
            }
        });
    })
}

exports.fsdir = (pathName)=> {
    return  new Promise(function (resolve, reject) {
        fs.readdir(pathName, (err,files) => {
            if(err){
                return  reject(err);
            }else {
               return resolve(files)
            }
        });
    })
}

exports.fsstat = (pathName)=> {
    return  new Promise(function (resolve, reject) {
        fs.stat(pathName, (err,stats) => {
            if(err){
                return  reject(err);
            }else {
               return resolve(stats)
            }
        });
    })
}

