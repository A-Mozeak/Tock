//Creating Object.create for IE. 🛂
if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

var screenHeight = window.screen.availHeight;
window.moveTo(0, screenHeight - 70);

//So here I've made two JSON objects that contain smaller JSON bites of news data.
var bite = { data: [
	{title: 'News Article1',
	 author: 'Arthur M. Journalist',
 	 published: '03-05-2016'},

	{title: 'News Article2',
 	 author: 'Arthur M. Journalist',
   published: '03-07-2016'},

	{title: 'News Article3',
	 author: 'Arthur M. Journalist',
	 published: '03-09-2016'}
]
};

var bite1 = { data: [
	{title: 'News Article4',
	 author: 'Arthur M. Journalist',
 	 published: '03-05-2016'},

	{title: 'News Article5',
 	 author: 'Arthur M. Journalist',
   published: '03-07-2016'},

	{title: 'News Article6',
	 author: 'Arthur M. Journalist',
	 published: '03-09-2016'}
]
};

//DELICIOUS BITE PROTOTYPES HERE 😁

/*var data = '/sampleJSON.json'; //= the Feedly response 📥

var Bite = {
	create: (title, author, date, summary) => {
		var instance = Object.create(Bite);
		instance.title = title;
		instance.author = author;
		instance.date = date;
		instance.summary = summary;
		return instance
	},
	sayTitle: () => console.log(title),
	sayAuthor: () => console.log(author)
}*/

//var item = Bite.create(data.title, data.author, data.published, data.summary.content);


//Get the bite nodes to paste news data. 📠
var posts = document.getElementsByClassName('bite');

//Initialize bites to the first JSON object's data.
for( var i = 0 ; i < posts.length ; i++){
	posts[i].innerHTML = bite.data[i%3].title;
};

//Function to alternate displayed data at interval. 🔄
var load  = setInterval(function(){ loader1() }, 5000);
var load2 = setInterval(function(){ loader2() }, 10000);

function loader1(){
	if(posts[0].innerHTML === bite.data[0].title){
		for( var i = 0 ; i < posts.length ; i++){
			posts[i].innerHTML = bite1.data[i%3].title;
		};
	}
};

function loader2(){
	if(posts[0].innerHTML === bite1.data[0].title){
		for( var i = 0 ; i < posts.length ; i++){
			posts[i].innerHTML = bite.data[i%3].title;
		};
	}
};


var getResults = function(){
	var terms = document.getElementById('search').value;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
			for (var i; i < xhr.responseText.results.length; i++)
        var p = document.createElement('P');
				var title = document.createTextNode(xhr.responseText.results[i].title);
				p.appendChild(title);
				document.getElementById('searchResults').appendChild(p);
    }
	};
	xhr.open('GET', 'https://cloud.feedly.com/v3/search/feeds?query=' + terms, true);
	xhr.send(null);
};

document.getElementById('searchBtn').addEventListener('click', getResults);
/*//---SUBSCRIPTION GETTER---
var feedSearch = function(query){

}
*/
// SANDBOX TOKEN ENDS 08/01 curl 'http://cloud.feedly.com/v3/mixes/contents?streamId=feed%2Fhttp%3A%2F%2Fwww.engadget.com%2Frss.xml&count=3' -H 'Authorization: OAuth 1QA6I3662OW2KEG48WA6' | python -m json.tool


//--LOAD RSS INTO SCROLLS--

/*TO TRY
	Feedly API
	Google AJAX
	Other AJAX feeders:
		Yahoo Pipes
		App.net API
*/

//--MESS WITH SIZING--
