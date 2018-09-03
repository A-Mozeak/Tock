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

function Querify(url){
	let querified = url.replace(':', '%3A').replace(/\//g, '%2F');
  return querified;
};

//SEE BITE.JS FOR REQUEST HANDLING
myRequest("https://cloud.feedly.com/v3/subscriptions")
	.then(data => Querify(data[2].id))
	.then(feed => myRequest("https://cloud.feedly.com/v3/mixes/contents?streamId=" + feed + "&count=5")
		.then(results => aboveHead = results.items)
	);


function Update(stories){
	for(var i = 0; i < stories.length; i++){
		let item = new myBite( stories[i].title, "favico", "This is a good story.", "smileyface", i, 1313);
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
		let n = document.createElement("h5");
		n.innerText = aboveHead[i].title.slice(0, 45) + "...";
		n.style.cssText = "display:inline;color:#2ba450;margin-right:10px;";
		test.appendChild(n);
	};
};

//-- ACTIVATING DEFENSE MATRIX!
setTimeout(Render, 2000);
