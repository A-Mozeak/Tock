//--DEVELOPER USER ID: 4192c028-eaa9-4413-a479-4add646c580a
//--DEVELOPER ACCESS TOKEN: AxEU_tdddgfEcgeCgULcvery0EiFHq30bLJEWCO5RY7gVRFVWpRKE0tzjtPyLw9NX5hnCxkPszmanRfqVSLOTZeOfXYFI4nmuvpUsz7_MNXvz7nuPWzUCoPTBMqiEqlAES_ZODn2BxSv1isUFKnpaHDKUV3QAeyZ6MB5BEixmPGC6JDKIVzGBuRzTlg96ia18JhqqKn-nj49_2Ch5n53WEGBbdFlo_2xz-TdCw8kUeVB7k7h3fv0HU-ujryBbg:feedlydev

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
    backgroundColor: '#d9ecf4',
    width: tWidth,
    height: tHeight,
    x: 0,
    y: yPos,
    frame: false
  });

  win.loadFile('main/index.html');
})
