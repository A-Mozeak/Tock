//-- Ideally this is the only script that index.html has to import.
const anime = require('animejs');
const myBite = require('./bite.js').BiteObj;
let myRequest = require('./bite.js').XHRTest;

const MAXBITES = 12; //Max amount of stories on the feed.

//Arrays to hold the Bites
let aboveHead = [];
let belowHead = [];
let feedNumber = 0;

//-- TO-DO --

//Function to pause on hover...
function Hover(){
};

//Function to activate the side overlay menu.
function showOptions(){
};

//Function to handle the scrolling animation.
function Rotate(){
};

//-- DONE --

function Querify(url){
	let querified = url.replace(':', '%3A').replace(/\//g, '%2F');
  return querified;
};

function Update(stories){
	for(var i = 0; i < stories.length; i++){
		let item = new myBite( stories[i].title, "favico", "This is a good story.", "smileyface", i, 1313);
		aboveHead.push(item);
	};
};

let tWidth = 0;
//Render the arrays of Bites to the scroll divs.
function Render(){
	let test1 = document.getElementById("topscroll1"); //Access the front div in the top scroll
	test1.style.cssText = "display:inline;position:fixed;"; //Set CSS for the front div
	let test2 = document.getElementById("topscroll2"); //Access the back div in the top scroll
	test2.style.cssText = "display:inline;position:fixed;"; //Set CSS for the back div
	while(test1.firstChild){ //If there are already elements on the divs, remove them before refreshing.
		test1.removeChild(test1.firstChild);
		test2.removeChild(test2.firstChild);
	};
	for(var i = 0; i < aboveHead.length; i++){ //For each item in the aboveHead array, make a link element
		let m = document.createElement("a");
		let n = document.createElement("a");
		m.innerText = aboveHead[i].title.slice(0, 45) + "..."; //Set the innertext of the link to the titles gathered from Feedly
		n.innerText = aboveHead[i].title.slice(0, 45) + "...";
		m.style.cssText = "display:inline;color:#2ba450;margin-right:10px;"; //Set the link to display properly.
		n.style.cssText = "display:inline;color:#2ba450;margin-right:10px;";
		test1.appendChild(m); //Add the link to the div
		test2.appendChild(n);
	};
	let totalWidth = test1.offsetWidth + test2.offsetWidth; //Calculate the width of the top div based on the two contained divs.
	tWidth = test1.offsetWidth; //This is used to hold the front scroll width.
	console.log(tWidth);
	let tBar = "width:" + totalWidth + "px;"; //Set the width of the top div to the total width calculated earlier.
	test2.style.cssText += "left:" + tWidth + "px;width:" + tWidth + "px;"; //Move the back div to the left of the front div and set its width to be equal thereto.
	document.getElementById("top").style.cssText = tBar + "display:block;";
};


//SEE BITE.JS FOR REQUEST HANDLING

function showFeed(){
	myRequest("https://cloud.feedly.com/v3/subscriptions")
	.then(data => Querify(data[feedNumber].id))
	.then(feed => myRequest("https://cloud.feedly.com/v3/mixes/contents?streamId=" + feed + "&count=5")
	.then(results => aboveHead = results.items)
	.then(Render)
	);
	feedNumber += 1;
};

//-- ACTIVATING DEFENSE MATRIX!

let animateScroll = anime.timeline({
	loop: true,
});

/*animateScroll
	.add({
		targets: '#topscroll1',
		left: '-90%',
		easing: 'linear',
		duration: 11000})
	.add({
		targets: '#topscroll2',
		left: '-90%',
		easing: 'linear',
		duration: 11000
	});
*/
showFeed();

anime({
	loop: true,
	targets: '#topscroll1',
	translateX: function(el){
		return el.clientWidth*-1;
	},
	easing: 'linear',
	duration: 5000
});
