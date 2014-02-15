/**
	main.js
*/


    //full frame size
    var frameSize = {"width": 3708, "height": 1280};
    //contents canvas size
    var canvasSize = {"width": 1704, "height": 640};
    //viewport size
    var viewSize = {"width": 568, "height": 320};
    //var viewSize = {"width": 811.428571, "height": 457.142857};
    //(0,0)
    var origin = {"x": 852, "y": 960};

  //
  window.onReady(function onReady() {
  jQuery(document).ready(function($){

    console.log('run');




    game.onload();
/*
    // Mobile browser hacks
    if (me.device.isMobile && !navigator.isCocoonJS) {
      // Prevent the webview from moving on a swipe
      window.document.addEventListener("touchmove", function (e) {
        e.preventDefault();
        window.scroll(0, 0);
        return false;
      }, false);

      // Scroll away mobile GUI
      (function () {
        window.scrollTo(0, 1);
        me.video.onresize(null);
      }).defer();

      
     // me.event.subscribe(me.event.WINDOW_ONRESIZE, function (e) {
     //   window.scrollTo(0, 1);
     // });
      
    }
 */

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
  });

/*
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
*/





