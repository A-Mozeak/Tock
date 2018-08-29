/*-- This file contains the implementation of the Bite object. These should be build from some
sort of factory when the scroll gets updated --*/

function Bite(title, icon, story, photo, num, time) {
	this.title = title;
	this.icon = icon;
	this.story = story;
	this.photo = photo;
	this.num = num;
	this.time = time;
}

/*
Things I need XHRs for...
	- Searching Feedly for feeds.
	- Getting the subscribed feeds from the user.
	- Searching for a particular term.
*/

function newRequest(type, url, querystring){
	const xhr = new XMLHttpRequest;
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let responseObject = xhr.responseText;
			return responseObject;
		};
	};
	xhr.open(type, url + querystring, true);
	//xhr.setRequestHeader('Authorization', 'OAuth ' + /*my auth token*/)
	xhr.send(null);
};

module.exports.BiteObj = Bite;
module.exports.XHRTest = newRequest;
