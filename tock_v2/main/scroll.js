//-- Ideally this is the only script that index.html has to import.
const anime = require('animejs');
const myBite = require('./bite.js').BiteObj;
let myRequest = require('./bite.js').XHRTest;

const MAXBITES = 12; //Max amount of stories on the feed.

//-- Begin implementation of the scroll manager.

//Arrays to hold the Bites
let aboveHead = [];
let belowHead = [];

//Function to handle the scrolling animation.
function Rotate(){
};

//Adds Bites to the arrays (do this and only this!)
let thing = myRequest('GET', 'https://cloud.feedly.com/v3/search/feeds', '?query=tech');
console.log(thing);
function Update(){
	for(var i = 0; i < 3; i++){
		let item = new myBite( "Check the console.", "favico", "This is a good story.", "smileyface", i, 1313);
		aboveHead.push(item);
	};
};

//Function to pause on hover...
function Hover(){
};

//Function to activate the side overlay menu.
function showOptions(){
};

//Render the arrays of Bites to the scroll divs.
function Render(){
	let test = document.getElementById("topscroll");
	for(var i = 0; i < aboveHead.length; i++){
		let n = document.createTextNode(aboveHead[i].title);
		test.appendChild(n);
	};
};

//-- ACTIVATING DEFENSE MATRIX!
Update();
Render();
