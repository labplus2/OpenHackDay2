/**
	main.js
*/


    //full frame size
    var frameSize = {"width": 3708, "height": 1280};
    //contents canvas size
    var canvasSize = {"width": 1704, "height": 640};
    //viewport size
    var viewSize = {"width": 640, "height": 480};
//    var viewSize = {"width": 568, "height": 320};
    //var viewSize = {"width": 811.428571, "height": 457.142857};
    //(0,0)
    var origin = {"x": 1570, "y": 960};
  //  var origin = {"x": 852, "y": 960};

  //
  window.onReady(function onReady() {





    game.onload();


    var changeMode = function(mode){
      if(mode == 'mario'){
        $('#marioframe').show();
        $('#infoframe').hide();
      }
      else if(mode == 'resort'){
        $('#resort').show();
      }
    } 







    //scroll method called from Objective-C
    functionTable["scroll"] = function(x,y){
      var left = origin.x + x;
      var top = origin.y - viewSize.height - y;
      window.scrollTo(left, top);

      var debugmsg = "X:" + x + " / Y:" + y + " - Left:" + left + " / Top:" + top;
      console.log(debugmsg);
    //  $('#debugarea').html(debugmsg);
    }

    //start method
    functionTable["start"] = function(){

      changeMode('mario');
    }

    //event method
    functionTable["fire"] = function(eventID){
      //coin == 1
      if(eventID == 1){
        coinGet();
      }
      else if(eventID == 2){
        grow();
      }
    }

    //initial point
    entryPoint('scroll', 0, 0);



    //test
    $('#infoframe').bind('click', function(){
      entryPoint('start');
    //  changeMode('mario');
    });

    $('#coin').bind('click', function(){
      entryPoint('fire', 1);
    });
    $('#mamenoki').bind('click', function(){
      entryPoint('fire', 2);
    });


  });






