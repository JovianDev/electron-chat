const { ipcRenderer, contextBridge } = require('electron');

//methods to be exposed to renderer process
const sendNotification = (message) => {
  console.log('in preload', message);
  //notify = event
  ipcRenderer.send('notify', message);
};

//context bridge securly exposes methods to renderer without exposing node modules
// call methods through channel route, i.e. api.sendMessage
contextBridge.exposeInMainWorld('e_sendNotification', {
  sendNotification,
});
