//----In JQuery----
$(document).ready(function(){

  function scroller(el, time) {
    $(el).transition({
      x: '-50%'
      }, time, linear, function(){
      $(el).css({ x:0 });
      scroller(el, time);
      });
  }

  var tF = $('#topFront');
  var tB = $('#topBack');
  var bF = $('#bottomFront');
  var bB = $('#bottomBack');
  
  scroller(tF, 5000);
  scroller(tB, 5000);
  scroller(bF, 7000);
  scroller(bB, 7000);

//--LOAD RSS INTO SCROLLS--

/*TO TRY
	Feedly API
	Google AJAX
	Other AJAX feeders:
		Yahoo Pipes
		App.net API
*/		

//--MESS WITH SIZING--

});