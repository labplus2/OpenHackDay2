/**
	test.js
	test for main.js
*/

jQuery(document).ready(function($){

	//entryPoint test
	$('body').bind('click', function(event){
		var x = event.offsetX;
		var y = event.offsetY;
		y = canvasSize.height - (y + viewSize.height);
		entryPoint('scroll', x, y);
	})
});