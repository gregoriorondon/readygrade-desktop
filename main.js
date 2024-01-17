const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    with: 800,
    height: 640
  })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'src/views/index.html'),
    protocol: 'file',
    slashes: true
  }))
})
