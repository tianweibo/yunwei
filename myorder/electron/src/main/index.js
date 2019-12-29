import { app, BrowserWindow } from 'electron'
import config  from '../config'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 500,
	width: 1100,
	//opacity:0.3
  })
  mainWindow.setAlwaysOnTop(true, 'pop-up-menu'); //一定要这样设置 要不然在mac下全屏播放PPT的时候看不到弹幕

  //mainWindow.maximize();
  //mainWindow.setIgnoreMouseEvents(true); 
  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.setMenu(null);
}

const WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 3002});
wss.on('connection', (ws) => {
	
  // 有客户端连接时, 打印一条日志
  console.log('client connected');
  // 并且创建'message'监听
  ws.on('message', (message) => {
    // 直接将消息打印出来
    console.log(message);
  });
});


app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
