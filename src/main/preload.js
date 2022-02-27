const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    on(channel, func) {
      const validChannels = ['Products'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    }
  },
  store: {
    delete(val) {
      ipcRenderer.send('delete-product', val);
    },
    add(property, val) {
      ipcRenderer.send(property , val);
    },
    export() {
      ipcRenderer.send('export-product');
    },
  },
});
