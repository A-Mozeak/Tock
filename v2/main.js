const electron = require('electron');
const {app, BrowserWindow} = electron;

const electronScreen = electron.screen;
const theScreen = electronScreen.getPrimaryDisplay();
let dimensions = theScreen.size;

const tWidth = dimensions.width;
const tHeight = dimensions.height*0.15;
const win = new BrowserWindow({width: tWidth, height: tHeight, frame: false, show: false});

win.loadFile('index.html');
win.once('ready-to-show', () => {
  win.show();
});


//Main script to hold the browser window and add in parameters and such.
