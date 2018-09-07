const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;

const electronScreen = electron.screen;
const theScreen = electronScreen.getPrimaryDisplay();
const dimensions = theScreen.size;

function makeBlurb(){
  //Make a new BrowserWindow
  let win = new BrowserWindow{
    
  }
  //Add blurb data to.
  //Load blurb component html with data.
}
