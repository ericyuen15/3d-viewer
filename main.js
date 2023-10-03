const { app, BrowserWindow } = require('electron');
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html');

  // Open the DevTools (optional)
  // mainWindow.webContents.openDevTools();

  // Dereference the window object when it's closed
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

// This method will be called when Electron has finished initialization
// and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS, applications and their menu bar stay active until the user quits
  // explicitly with Cmd + Q.
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  // On macOS, re-create a window in the app when the dock icon is clicked
  // and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

