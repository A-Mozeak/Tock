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

/*
USING THE NEW VANILLA JS FETCH API TO HANDLE THE REQUEST.
	fetch('https://cloud.feedly.com/v3/search/feeds?query=tech') //Gotta figure out where to place headers.
	.then(response => response.json() //can wrap this part in the exported function.
	.then(data => console.log(data.results)) //this one can be implemented in the scroll, doing whatever it needs to do with the data.
	);
*/

//SEE MAIN.JS FOR OAUTH CREDS

function feedRequest(url){
	return fetch(url, {
		method: "GET",
		headers: {
			"Authorization": "OAuth Azc5Zsz-q8IIFITp2KGecITCNVPOA_o6LrziM4rcwBtAKDrsTsgXY_QVgVdjgjuffVe-DRXhJZ_RKesav9iese7iukkegLKctFEujWL8Jx7bwdMieKUy2t1droAtLyvmC8wL8Zu98YrdHtDm8-7igOf-S19E4YE6g2JEB_leQss7TyXBgqzuNmbfWDraXeiZloTZCmcYtgpWpQHshuDjxgW9RcdpOvtUPYpArDLzt9BrbBsroELtMJIpvWPF:feedlydev"
		},
	})
	.then(response => response.json());
};

module.exports.BiteObj = Bite;
module.exports.XHRTest = feedRequest;
