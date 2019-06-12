/*-- This file contains the implementation of the Bite object. These are instantiated using the factory pattern. --*/

function getBite(title, icon, story, photo, num, time, source) {
	let fresh_bite = {};
	fresh_bite.title = title;
	fresh_bite.icon = icon;
	fresh_bite.story = story;
	fresh_bite.photo = photo;
	fresh_bite.num = num;
	fresh_bite.time = time;
	fresh_bite.source = source;

	return fresh_bite;
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

async function feedRequest(url){
	return await fetch(url, {
		method: "GET",
		headers: {
			"Authorization": "OAuth AxEU_tdddgfEcgeCgULcvery0EiFHq30bLJEWCO5RY7gVRFVWpRKE0tzjtPyLw9NX5hnCxkPszmanRfqVSLOTZeOfXYFI4nmuvpUsz7_MNXvz7nuPWzUCoPTBMqiEqlAES_ZODn2BxSv1isUFKnpaHDKUV3QAeyZ6MB5BEixmPGC6JDKIVzGBuRzTlg96ia18JhqqKn-nj49_2Ch5n53WEGBbdFlo_2xz-TdCw8kUeVB7k7h3fv0HU-ujryBbg:feedlydev"
		},
	})
	.then(response => response.json());
};

module.exports.BiteObj = getBite;
module.exports.XHRTest = feedRequest;
