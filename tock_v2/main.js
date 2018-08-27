const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const webContents = electron.webContents;

let win; //Keeping a global ref to the window so it doesn't get garbage collected.

//Main script to hold the browser window and add in parameters and such.
app.on('ready', () => {
  //Get the dimensions of the user's display.
  const electronScreen = electron.screen;
  const theScreen = electronScreen.getPrimaryDisplay();
  let dimensions = theScreen.size;

  //Set the dimensions of the Tock window relative to the display.
  const tWidth = dimensions.width;
  const tHeight = Math.floor(dimensions.height*0.1);

  //Position the Tock window at the bottom of the screen, scaled relative to the window's height.
  const yPos = Math.floor(dimensions.height*0.9);

  //Create the Tock window.
  win = new BrowserWindow({
    backgroundColor: '#008000',
    width: tWidth,
    height: tHeight,
    x: 0,
    y: yPos,
    frame: false
  });

  win.loadFile('main/index.html');
})
