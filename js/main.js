/**
	main.js
*/

//full frame size
var frameSize = {"width": 3708, "height": 1280};
//contents canvas size
var canvasSize = {"width": 1704, "height": 640};
//viewport size
var viewSize = {"width": 811.428571, "height": 457.142857};//width=568px height=320px scale=0.7%

//(0,0)
var origin = {"x": 852, "y": 960};


jQuery(document).ready(function($){
	console.log('run');

	//scroll method called from Objective-C
	functionTable["scroll"] = function(x,y){
		var left = origin.x + x;
		var top = origin.y - viewSize.height - y;
		window.scrollTo(left, top);

		var debugmsg = "X:" + x + " / Y:" + y + " - Left:" + left + " / Top:" + top;
		console.log(debugmsg);
		$('#debugarea').html(debugmsg);
	}

	//initial point
	entryPoint('scroll', 0, 0);
});