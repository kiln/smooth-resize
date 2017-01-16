(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.smoothResize = factory());
}(this, (function () { 'use strict';

var resize_animation;
var resize_done_timer;

var callbacks = [];

function startResizeAnimation() {
	resize_animation = requestAnimationFrame(resizeAnimationFrame);
}

function stopResizeAnimation() {
	cancelAnimationFrame(resize_animation);
	resize_animation = null;
}

function resizeAnimationFrame() {
	var w = window.innerWidth,
	    h = window.innerHeight;
	for (var i=0; i < callbacks.length; i++) callbacks[i](w, h);
	resize_animation = requestAnimationFrame(resizeAnimationFrame);
}

function addEventListener() {
	window.addEventListener("resize", function() {
		if (!resize_animation) startResizeAnimation();
		clearTimeout(resize_done_timer);
		resize_done_timer = setTimeout(function() {
			resize_done_timer = null;
			stopResizeAnimation();
		}, 200);
	});
}

function smoothResize(callback) {
	var first_callback = (callbacks.length == 0);
	callbacks.push(callback);
	if (first_callback) addEventListener();
}

return smoothResize;

})));
