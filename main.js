const { app, BrowserWindow } = require("electron");
const path = require("path");

let win = null;

function createWindow() {
    win = new BrowserWindow({
        width: 1080,
        height: 720,
        minWidth: 800,
        minHeight: 600,
        center: true,
        autoHideMenuBar: true,
        icon: path.join(__dirname,'/img/brand/bootstrap-social-logo.png')
    })
    win.loadFile(path.join(__dirname, 'pages', 'register.html'))
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})