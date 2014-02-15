/**
	main.js
*/

//full contents size
var canvasSize = {"width": 1704, "height": 640};
//viewport size
var viewSize = {"width": 568, "height": 320};

jQuery(document).ready(function($){
	console.log('run');

	//scroll method called from Objective-C
	functionTable["scroll"] = function(x,y){
		var left = x;
		var top = canvasSize.height - viewSize.height - y;
		window.scrollTo(left, top);
		console.log("X:", x, " / Y:", y, " - Left:", left, " / Top:", top);
	}

	$('#test1').bind('click', function(){
		entryPoint('scroll', 0, 180);
	})
});