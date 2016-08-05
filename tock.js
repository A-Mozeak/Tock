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



var querify = function(url){
	var querified = url.replace(':', '%3A').replace(/\//g, '%2F');
    return querified;
};


/*//---SUBSCRIPTION GETTER---
var feedSearch = function(query){

}
*/
// SANDBOX TOKEN ENDS 08/01 curl 'http://cloud.feedly.com/v3/mixes/contents?streamId=feed%2Fhttp%3A%2F%2Fwww.engadget.com%2Frss.xml&count=3' -H 'Authorization: OAuth 1QA6I3662OW2KEG48WA6' | python -m json.tool

//---XHRs---
var getResults = function(){
  var terms = document.getElementById('search').value;
  var xhr = new XMLHttpRequest;
  xhr.onload = function(){
    if(xhr.status === 200){
      responseObject = JSON.parse(xhr.responseText);
			var titles = [];
      for(var i = 0; i < responseObject.results.length; i++){
      	titles.push(responseObject.results[i].title);
		 	};
			for(var j = 0; j < titles.length; j++){
			 var para = document.createElement('P');
			 para.className = 'result';
			 para.innerText = titles[j];
			 document.getElementById('searchResults').appendChild(para);
		 	};
		};
	};
  xhr.open('GET', 'https://cloud.feedly.com/v3/search/feeds?query=' + terms, true);
  xhr.send(null);
};

//---Window Actions---


//---Click Events---
document.getElementById('searchBtn').addEventListener('click', getResults);


//---Animation Events---

//---Engine---
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
