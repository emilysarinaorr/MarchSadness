var canvasH = 659;
var canvasW = 1260;

var x = 10;
var y = 250;

var xspeed = 0;
var yspeed = 0;

var canvas = document.getElementById('screen');
//getContext makes context object that is filled with functions for drawing
var ctx = canvas.getContext('2d');

var keys = {};
$(document).ready(function(e){
	$(window).keydown(function(event){
		keys[event.which] = true;
		console.log(event.which);
	}).keyup(function(event){
		delete keys[event.which];
	});
});

 window.addEventListener("load", draw, true);
    
    function draw(){                                    
        var img = new Image();
        img.src = "http://3.bp.blogspot.com/_0sKGHtXHSes/TPt5KD-xQDI/AAAAAAAAA0s/udx3iWAzUeo/s1600/aspnethomepageplusdevtools.PNG";                
        img.onload = function(){
            var canvas = document.getElementById('canvas');
            var context = canvas.getContext('2d');    
        
            context.drawImage(img, 0, 0);        
        };            
    }                    

setInterval(function(){
	ctx.clearRect(0, 0, canvasW, canvasH);
	var img = document.getElementById("bball");
    ctx.drawImage(img, x, y);

	chuck();
	x += xspeed;
	y += yspeed;
	if(x != 10){
		yspeed += .5;
	}
	if(x > canvasW){
		xspeed = 0;
		yspeed = 0;
		x = 10;
		y = 250;
	}
},25);

chuck = function(){
	if(keys[32]){
		if(x == 10){
			yspeed = -14;
			xspeed = 8;
		}
	}
}