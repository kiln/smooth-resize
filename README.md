# Smooth animations while the window is being resized

Responsive online graphics may need to update in response to changes in window
size. It’s common to do this by listening for the `resize` event on the window
object, but this results in a choppy effect since the resize event is not
triggered frequently enough for a smooth animation.

This module makes it easy to implement smooth resize animations. While the window
is being resized it uses `requestAnimationFrame` to run your drawing function
at a (hopefully) decent frame rate.

It’s designed to be used with an ES6 module bundler such as [rollup.js](http://rollupjs.org/)
with [rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve):

```
import smoothResize from "smooth-resize";

smoothresize(function(width, height) {
	// Redraw at the specified size
});
```

or you can include a self-contained version directly in your HTML:

```
<script src="https://cdn.flourish.rocks/smooth-resize-v0.min.js"></script>
```

It’s self-contained and tiny. Even the non-minified version is smaller than 1k.

It was developed for use in [Flourish](https://flourish.studio) templates, but it’s
open source and you can use it for anything.
