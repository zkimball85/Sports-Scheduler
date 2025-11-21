const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 1200, // Let's make it wide
        height: 800,
        webPreferences: {
            nodeIntegration: true,    // CRITICAL: Must be true
            contextIsolation: false,  // CRITICAL: Must be false
            enableRemoteModule: true  // Good to have
        }
    })

    // --- FORCE DEV TOOLS TO OPEN ---
    // win.webContents.openDevTools()

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})