const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = require('electron').ipcMain;

//===============
const showMem = require('./showMem');
//===============

let mainWindow = null;


function createWindow () {
  mainWindow = new BrowserWindow({width: 800, 
                                  height: 600, 
                                  title: "App well",
                                  skipTaskbar: true,
                                  webPreferences: {
                                    nodeIntegrationInSubFrames: false,
                                    webSecurity: false
                                  }
                                })
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.on('closed', function () {
    mainWindow = null
  })
  // ======Run show mem========
  showMem(mainWindow);
  // ======================
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});


// ===========================
