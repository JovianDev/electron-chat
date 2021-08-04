//main process
const { app, BrowserWindow, Notification, ipcMain } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

const createWindow = () => {
  //browser window <-- rederer process
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegrations: false,
      //sanatize  JS
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      //isolates window process from renderer
      contextIsolation: true,
      worldSafeExecuteJavaScript: true,
      //preload script and electron logic work in seperate context
      // contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  //loading file into browswer window
  win.loadFile('index.html');
  isDev && win.webContents.openDevTools();
};

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  });
}

//when main process is done
app.whenReady().then(() => {
  createWindow();

  //   const notification = new Notification({
  //     title: 'Hello World',
  //     body: 'Test message',
  //   });
});

ipcMain.on('notify', (e, message) => {
  console.log('In main notify catch', message);
  new Notification({
    title: 'Notification',
    body: message,
  }).show();
});

//if on window  OS, closing all windows will close the app
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// when all windows closed on map, a new one is opened by clicking the app in the dock
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
