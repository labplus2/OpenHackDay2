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





    game.onload();


    $('#infoframe').bind('click', function(){
      $('#marioframe').show();
      $('#infoframe').hide();
    });

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






