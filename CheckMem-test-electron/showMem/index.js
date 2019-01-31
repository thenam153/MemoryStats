const os = require('os');
const ipcMain = require('electron').ipcMain;
module.exports = function(mainWindow) {
	memory = {
	  freemem: 0,
	  totalmem: 0
	}
	ipcMain.on('checkMem',function(e,i){
	  memory.freemem = os.freemem()/1048576;
	  memory.totalmem = os.totalmem()/1048576;
	  mainWindow.webContents.send('sendMem',memory);
	});
}