//Creating Object.create for IE. 🛂
if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

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

var data; //= the Feedly response 📥

var Bite = Object.create(null);
	Bite.title = data.title;
	Bite.author = data.author;
	Bite.date = data.published;
	Bite.summary = data.summary.content;



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
}

function loader2(){
	if(posts[0].innerHTML === bite1.data[0].title){
		for( var i = 0 ; i < posts.length ; i++){
			posts[i].innerHTML = bite.data[i%3].title;
		};
	}
}

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
