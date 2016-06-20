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

var posts = document.getElementsByClassName('bite');

for( var i = 0 ; i < posts.length ; i++){
	posts[i].innerHTML = bite.data[i%3].title;
};

var load  = setInterval(function(){loader1()}, 5000);
var load2 = setInterval(function(){loader2()}, 5001);

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
