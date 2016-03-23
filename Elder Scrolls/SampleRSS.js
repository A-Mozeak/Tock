function myGetElementsByClassName(selector) {
    if ( document.getElementsByClassName ) {
        return document.getElementsByClassName(selector);
    }

    var returnList = new Array();
    var nodes = document.getElementsByTagName('div');
    var max = nodes.length;
    for ( var i = 0; i < max; i++ ) {
        if ( nodes[i].className == selector ) {
            returnList[returnList.length] = nodes[i];
        }
    }
    return returnList;
}

var rssReader = {
    containers : null,

    // initialization function
    init : function(selector) {
        containers = myGetElementsByClassName(selector);
        for(i=0;i<containers.length;i++){
            // getting necessary variables
            var rssUrl = containers[i].getAttribute('rss_url');
            var num = containers[i].getAttribute('rss_num');
            var id = containers[i].getAttribute('id');

            // creating temp scripts which will help us to transform XML (RSS) to JSON
            var url = encodeURIComponent(rssUrl);
            var googUrl = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num='+num+'&q='+url+'&callback=rssReader.parse&context='+id;

            var script = document.createElement('script');
            script.setAttribute('type','text/javascript');
            script.setAttribute('charset','utf-8');
            script.setAttribute('src',googUrl);
            containers[i].appendChild(script);
        }
    },

    // parsing of results by google
    parse : function(context, data) {
        var container = document.getElementById(context);
        container.innerHTML = '';

        // creating list of elements
        var mainList = document.createElement('table');
		var listRow = document.createElement('tr');

        // also creating its childs (subitems)
        var entries = data.feed.entries;
        for (var i=0; i<entries.length; i++) {
            var listItem = document.createElement('td');
            var title = entries[i].title;
            var contentSnippet = entries[i].contentSnippet;
            var contentSnippetText = document.createTextNode(contentSnippet);

            var link = document.createElement('a');
            link.setAttribute('href', entries[i].link);
            link.setAttribute('target','_blank');
            var text = document.createTextNode(title);
            link.appendChild(text);

            // add link to list item
            listItem.appendChild(link);

            /*var desc = document.createElement('p');
            desc.appendChild(contentSnippetText);

            // add description to list item
            listItem.appendChild(desc);*/

            /*if (entries[i].mediaGroups) {
                var img = new Image();
                img.src = entries[i].mediaGroups[0].contents[0].url;
                listItem.appendChild(img);
            }*/

            // adding list item to main list
			listRow.appendChild(listItem);
            mainList.appendChild(listRow);
        }
        container.appendChild(mainList);
    }
};

window.onload = function() {
    rssReader.init('post_results');
}


$(document).ready(function(){
	$("#myButton").click(function(){
		var myFunc = $("#rectContainer").animate({left: '+=250px'});
		$("#rectContainer").animate({left: '250px'}).bind("animationend", myFunc());
	});
});



/*function slowToStop(){
	var el = document.getElementsByTagName('marquee');
	var i = el.getAttribute("scrollamount");
	document.alert(i);
	//while (i > 0){
//el.setAttribute("scrollamount",i -= 1);}
};*/







// function to get keyframes rule
function getKeyFrameRule(rule){
	var sheets = document.styleSheets;
	for (var i; i<sheets.length; ++i){
		for (var j; j<sheets[i].cssRules; ++j){
			if (ss[i].cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE && ss[i].cssRules.name == rule)
		return ss[i].cssRules[j];}
	}
	return null;
}

function chRule(name){
	  // find our -webkit-keyframe rule
        var keyframes = getKeyFrameRule(name);
        
        // remove the existing 0% and 100% rules
        keyframes.deleteRule("0%");
        keyframes.deleteRule("100%");
        
        // create new 0% and 100% rules with random numbers
        keyframes.insertRule("0% { -webkit-transform: translateX("+widthIncrease('post_results')+"px); }");
        keyframes.insertRule("100% { -webkit-transform: translateX("+widthIncrease('post_results')+"px); }");
        
        // assign the animation to our element (which will cause the animation to run)
        document.getElementsByTagName('tr').style.webkitAnimationName = name;
    }

//function to increase the width of the scroll by a fixed size
function widthIncrease(selector){
	var containers = myGetElementsByClassName(selector);
    for(i=0;i<containers.length;i++){
		var num = containers[i].getAttribute('rss_num');
		var scrollLength = num*200;
	//first thing if this doesn't work, try rescoping scrollLength
		return scrollLength;
	}
}
	

	
function addLength(thing){
	var containers = myGetElementsByClassName(thing);
   
   //for now arbitrarily adds an extra feed item
	for(i=0;i<containers.length;i++){
		var num = Number(containers[i].getAttribute('rss_num'));
		num += 1;
		containers[i].setAttribute('rss_num', num);
		window.alert('There are now ' + num + ' items in the feed.');
	}
	
	document.getElementsByTagName('tr')[0,1].style.webkitAnimationName = "none";
	chRule("marquee");
}

//FROM CURIOUS.COM MARQUEE.
/*
It looks like the before and after pseudos effectively make 
two marquees that scroll one after the other, causing the whole thing
to look like one endless loop. DUH! FRICKIN GENIUS!!!

Includes ::before and ::after pseudo elements within the div container. 
marquee:before and marquee:after have properties position: absolute; content: ''; transform: translate3d(0,0,0).
also both have animation: marqueeScroll 30s linear infinite; (marquee:before has width: 4584px; left: 0) (marquee:after has width: 2292px; left: 4584px)
box-sizing is inherited on *:before and *:after.

Both ::before and ::after set the rotating images as the background.

keyframes marqueeScroll{0%{-webkit-transform:translate(0, 0);
-moz-transform:translate(0, 0);-ms-transform:translate(0, 0);
-o-transform:translate(0, 0);transform:translate(0, 0)}
100%{-webkit-transform:translate(-4584px, 0);
-moz-transform:translate(-4584px, 0);-ms-transform:translate(-4584px, 0);
-o-transform:translate(-4584px, 0);transform:translate(-4584px, 0)}}
*/


/* Each item in the feed should be a feedBite:
---In constructor notation---

function feedBite(name, url, dateTime){
	//stuff so that I can create and initialize feedBites dynamically.
}


var feedBite = {
	getStory : function(){}, <-- possibly necessary, but the Feed should create and initialize the Bites with stories.
	publisher : "publisher",
	color : "color",
	flash : "flash",
	link : "link",
}

var theFeed = {
	spitBite : function(){}, <-- spits out a new feedBite.
	
Actually... I'm thinking I could just refresh the rssReader at a given interval...
*/