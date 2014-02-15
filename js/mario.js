/** main for mario.html
*/

jQuery(document).ready(function($){

	var cut = function(d){
		d = Math.floor(d * 1) / 1;
		return d;
	}
//	console.log(cut(0.1353));

	var status = {
		'right': {
			'run': $('#run_right'),
			'stop': $('#mario_right'),
			'jump': $('#jump_right')
		},
		'left': {
			'run': $('#run_left'),
			'stop': $('#mario_left'),
			'jump': $('#jump_left')
		}
	}

/*	
	var status = {
		'right': {
			'run': 'data/img/run_right.gif',
			'stop': 'data/img/mario_right.gif'
		},
		'left': {
			'run': 'data/img/run_left.gif',
			'stop': 'data/img/mario_left.gif'
		}
	}
*/
/*
	var status = {
		'right': {
			'run': '>>>',
			'stop': '>'
		},
		'left': {
			'run': '<<<',
			'stop': '<'
		}
	}
*/

	var currentDirection = 'right';//right or left;
	var currentAction = 'stop'; //run or stop
	var threshold = 10;
	var threshold_jump = 50;
	var jumpTimerID = null;



	var updateStatus = function(){
		var currentStatus = status[currentDirection][currentAction];

		status['left']['run'].hide();
		status['left']['stop'].hide();
		status['left']['jump'].hide();
		status['right']['run'].hide();
		status['right']['stop'].hide();			
		status['right']['jump'].hide();
		currentStatus.show();
	//	$('#mario').attr('src', currentStatus);
	//	$('#dir').html(currentStatus);
	}
	updateStatus();

	window.addEventListener("devicemotion", function(e){
	    e.preventDefault();
	    var ac = e.acceleration;
	    var ag = e.accelerationIncludingGravity;
	    var rt = e.rotationRate;

	    //横向きに水平に置いて、左右の回転を検出。右回りはマイナス、左回りはプラス
	    var rotateGamma = cut(rt.gamma);

	    //横向きに水平に置いて、βが大きく変化したらいずれかにアオリが入ったとみなす
	    var rotateBeta = cut(rt.beta);

	    //jump check
	    if(!jumpTimerID){
		    if(rotateBeta < -1 * threshold_jump || threshold_jump < rotateBeta){
		    	jumpTimerID = window.setTimeout(function(){
		    		window.clearTimeout(jumpTimerID);
		    		jumpTimerID = null;
		    		$('#debug').html("landing");
		    	}, 1000);
		    	currentAction = 'jump';
		    	$('#debug').html("jumping:" + jumpTimerID);
		    	updateStatus();
		    }
		    else{
			    if(rotateGamma < threshold * -1){
			    	currentDirection = 'right';
			    	currentAction = 'run';
			    }
			    if(rotateGamma > threshold){
			    	currentDirection = 'left';
			    	currentAction = 'run';
			    }
			    if(-1 * threshold < rotateGamma && rotateGamma < threshold){
			    	currentAction = 'stop';
			    }
			    //update
			    updateStatus();
			}
		}
/*
        document.getElementById("ac0").innerHTML = "X: " + cut(ac.x);
        document.getElementById("ac1").innerHTML = "Y: " + cut(ac.y);
        document.getElementById("ac2").innerHTML = "Z: " + cut(ac.z);
        
        document.getElementById("ag0").innerHTML = "X: " + cut(ag.x);
        document.getElementById("ag1").innerHTML = "Y: " + cut(ag.y);
        document.getElementById("ag2").innerHTML = "Z: " + cut(ag.z);
*/        
        document.getElementById("rt0").innerHTML = "ALPHA: " + cut(rt.alpha);
        document.getElementById("rt1").innerHTML = "BETA: " + cut(rt.beta);
        document.getElementById("rt2").innerHTML = "GAMMA: " + cut(rt.gamma);		
    /*
    */
	});
});

