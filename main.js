const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {

    let displays = electron.screen.getAllDisplays()
    let externalDisplay = displays.find((display) => {
     return display.bounds.x !== 0 || display.bounds.y !== 0
    })

    //console.log(externalDisplay)
    let win = new BrowserWindow({ width: externalDisplay.workArea.width, height: externalDisplay.workArea.height })
    win.loadURL('file://' + __dirname + '/app/index.html')
    win.webContents.openDevTools({mode:'bottom'})
})
