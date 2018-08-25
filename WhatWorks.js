//What works and what doesn't.

/*----TODO----*/
  //Window Actions

  //UI Assets

  //Animation

  //
a {
  text-decoration: none
}


html{
  background-color: black;
}

@-webkit-keyframes scroller {
  0%{ left: 0vw; }
  100%{ left: -100vw; }
}

.top {
  -webkit-animation: scroller 15s linear infinite;
}

.top:hover {
  -webkit-animation-play-state: paused;
}

#topFront {
  position: absolute;
  left: 0vw;
}

#topBack {
  position: absolute;
  left: 100vw;
}

.bottom {
  -webkit-animation: scroller 25s linear infinite;
}

.bottom:hover {
  -webkit-animation-play-state: paused;
}

#bottomFront {
  position: absolute;
  left: 0vw;
}

#bottomBack {
  position: absolute;
  left: 100vw;
}


/*Build flex container.*/

.bottom, .top {
  position: relative;
  white-space: nowrap;
  margin: 10px 0px;
}

.flexScroll{
  display: inline-block;
}

.bite, .result {
  display: inline;
  max-width: 500px;
  margin: 0 auto;
  font-family: Helvetica;
  /*color: black;*/
  color: white;/*alternate*/
  font-size: 12px;
}

/*--MENU STYLES--*/
.searchMenu {
  display: none;
  color: white;
}
