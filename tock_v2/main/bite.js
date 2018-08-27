/*-- This file contains the implementation of the Bite object. These should be build from some
sort of factory when the scroll gets updated --*/

function Bite(title, icon, num, fresh) {
	this.title = title;
	this.icon = icon;
	this.num = num;
	this.fresh = fresh;
}

module.exports = Bite;
