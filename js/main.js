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
        $('#marioframe').fadeIn(1000);
        $('#infoframe').fadeOut(1000);
      }
      else if(mode == 'resort'){
        $('#resort').fadeIn(1000);
      }
    } 

    var startTime = null;
    var intervalTimerID = null;
    var countDown = function(){
      var time = Math.floor((((new Date()).getTime()) - startTime) / 1000);
      var count = 90 - time;
      $('#time').html(count);
      if(count == 0){
        window.clearInterval(intervalTimerID);
      }
    }
    var do3rd = function(){
      entryPoint('fire', 2);
    }
    var do2nd = function(){
      changeMode('mario');
    }
    var do1st = function(){
      changeMode('resort');
    }
    var doCoin = function(){
      enteryPoint('fire', 1);
    }
    var startTimer = function(){
      window.setTimeout(do1st, 20000);
      window.setTimeout(do2nd, 30000);
      //window.setTimeout(doCoin, 80000);
      window.setTimeout(do3rd, 85000);
      startTime = (new Date()).getTime();
      intervalTimerID = window.setInterval(countDown, 1000);
    }
    /*
    var startTimer = function(){
      startTime = (new Date()).getTime();
      intervalTimerID = setInterval(function(){
        var time = (new Date()).getTime();
        var count = time - startTime;
        console.log(count);
        //expire
        if(count > 90000){
          console.log('90sec');
          clearInterval(intervalTimerID);
        }
        //85sec
        else if(!timerFlag.mamenoki && count > 85000){
          console.log('85sec');
          setTimeout(function(){
          entryPoint('fire', 2);
            timerFlag.mamenoki = true;
          }, 0);
        }
        //30sec
        else if(!timerFlag.mario && count > 30000){
          console.log('30sec');
          setTimeout(function(){
          changeMode('#mario');
            timerFlag.mario = true;
          }, 0);
        }
        //20sec
        else if(!timerFlag.resort && count > 20000){
          console.log('20sec');
          setTimeout(function(){
          changeMode('#resort');
            timerFlag.resort = true;
          }, 0);
        }
      }, 100);
    }
    */





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
      startTimer();
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
    //  entryPoint('start');
      changeMode('resort');
    });

    $('#resort').bind('click',function(){
      changeMode('mario');
    })

    $('#coin').bind('click', function(){
      entryPoint('fire', 1);
    });
    $('#mamenoki').bind('click', function(){
      entryPoint('fire', 2);
    });


 //   changeMode('mario');
    startTimer();
  });






