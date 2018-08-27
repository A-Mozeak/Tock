//--Ideally this is the only script that index.html has to import.
const anime = require('animejs');
const Bite = require('./bite.js');

const MAXBITES = 24;

let Scroll = {
  msg: "Hello from the Scroll!",
}

let text1 = new Bite("title1", "iconURL", 0, true);
let text2 = new Bite("title2", "iconURL", 1, false);

var test = document.getElementById("topscroll");
test.innerText = text1.title;

var test2 = document.getElementById("bottomscroll");
test2.innerText = text2.title;

//Begin implementation of the scroll manager.
//Arrays to hold the Bites
let aboveHead = [];
let belowHead = [];

//Function to handle the scrolling animation.
function Rotate(){
};

//Adds Bites to the arrays (do this and only this!) Calls the Render function
function Update(){
};

//Function to pause on hover...
function Hover(){
};

//Function to activate the side overlay menu.
function showOptions(){
};

//Takes a Bite object and renders it using its internal parameters. Use in Update.
function Render(bite){
};
