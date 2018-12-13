// Modules to control application life and create native browser window
const {
    app,
    BrowserWindow,
    dialog,
    ipcMain
} = require('electron')
const {
    filters
} = require('./main/arduino')

const path = require('path')
const log = require('electron-log');
const { autoUpdater } = require("electron-updater");
const { fond } = require('./main/home')
let contents
let mainWindow
let portWindow
let zipWindow


function creatzip() {
    let i = fond()
    if (i) {
        createWindow()
    } else {
        zipWindow = new BrowserWindow({
            width: 1024,
            height: 768,
            minWidth: 800,
            minHeight: 600,
            closable: false,
            icon: './build/logo128.png',
        })
        zipWindow.loadFile('./html/zip.html')
        zipWindow.on('closed', function() {
            zipWindow = null
        })
    }
}

function closezip() {
    zipWindow.destroy()
    app.relaunch()
    app.exit(0)
}

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        minWidth: 800,
        minHeight: 600,
        icon: './build/logo128.png',
    })
    
    // mainWindow.loadURL('http://localhost:8080')
    mainWindow.loadFile('./html/index.html')

    mainWindow.on('closed', function() {
        if (portWindow) {
            portWindow.destroy()
        }
        mainWindow = null
    })

    mainWindow.on('maximize', function() {
        mainWindow.webContents.send("maximize", true);
    })
}

function portassistant() {
    if (portWindow) {
        portWindow.show()
    } else {
        portWindow = new BrowserWindow({
            width: 768,
            height: 500,
            minWidth: 768,
            minHeight: 500,
            resizable: false,
            icon: './build/installerHeaderIcon.ico',
        })
        portWindow.loadFile('html/port/index.html')
        contents = portWindow.webContents
    }

    portWindow.on('closed', function() {
        contents = null
        portWindow = null
    })
}

app.on('ready', creatzip)
app.on('ready', async function() {
    let n = await autoUpdater.checkForUpdatesAndNotify()
    console.log(n)
})
app.on('window-all-closed', function() {
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})

ipcMain.on('asynchronous-message', function(event, arg) {
    dialog.showOpenDialog({
        title: 'open hello world',
        filters: [{
            name: 'blockly',
            extensions: ['xml']
        }],
        properties: ['openFile']
    }, function(filePath) {
        event.sender.send('asynchronous-reply', filePath);
    })
});

ipcMain.on('saveXml', async(event, arg) => {
    dialog.showSaveDialog(mainWindow, {
        title: '保存',
        defaultPath: path.join(__dirname, './sample/'),
        filters: [{
            name: 'Blockly',
            extensions: ['xml']
        }],
        securityScopedBookmarks: true
    }, async(filenames) => {
        try {
            let sta = await filters(filenames, arg.text)
            console.log(sta)
            event.sender.send('asynchronous-reply', [true, '保存成功'])
        } catch (err) {
            event.sender.send('asynchronous-reply', [false, '保存失败'])
        }
    })

})

ipcMain.on('open-file', (event, arg) => {
    dialog.showOpenDialog({
        title: '打开',
        defaultPath: path.join(__dirname, './sample/'),
        filters: [{
            name: 'Blockly',
            extensions: ['xml']
        }]
    }, (filenames) => {
        event.sender.send('file-path', filenames)
    })

})

ipcMain.on('openPortWin', (event, arg) => {
    portassistant()
})

ipcMain.on('closeport-admin', (event, arg) => {
    closeport()
})

ipcMain.on('closezip', (event, arg) => {
    closezip()
})

function closeport() {
    if (contents) {
        contents.send('closeport', 'whoooooooh!')

    }
}


autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');

autoUpdater.on('checking-for-update', () => {
    log.info('Checking for update...');
})
autoUpdater.on('update-available', (info) => {
    log.info('Update available.');
})
autoUpdater.on('update-not-available', (info) => {
    log.info('Update not available.');
})
autoUpdater.on('error', (err) => {
    log.info('Error in auto-updater. ' + err);
})
autoUpdater.on('download-progress', (progressObj) => {
    let log_message = "Download speed: " + progressObj.bytesPerSecond;
    log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
    log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
    log.info(log_message);
})

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
    const dialogOpts = {
        type: 'info',
        buttons: ['立刻更新', '稍后再说'],
        title: '软件更新',
        message: process.platform === 'win32' ? releaseNotes : releaseName,
        detail: '您的软件需要更新，请重新启动软件。'
    }

    dialog.showMessageBox(mainWindow, dialogOpts, (response) => {
        if (response === 0) autoUpdater.quitAndInstall()
    })
})

const diely = function() { //delay
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(true)
        }, 1500)
    })
}