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

//Get the bite nodes to paste news data.
var posts = document.getElementsByClassName('bite');

//Initialize bites to the first JSON object's data.
for( var i = 0 ; i < posts.length ; i++){
	posts[i].innerHTML = bite.data[i%3].title;
};

//Function to alternate displayed data at interval.
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


//--LOAD RSS INTO SCROLLS--

/*TO TRY
	Feedly API
	Google AJAX
	Other AJAX feeders:
		Yahoo Pipes
		App.net API
*/

//--MESS WITH SIZING--
