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

module.exports = Bite;
