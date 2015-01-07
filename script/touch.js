var startx = 0
var starty = 0;
var endx = 0;
var endy = 0;

document.addEventListener('touchstart',function(event){
	startx = event.touches[0].pageX;
	starty = event.touches[0].pageY;
})

document.addEventListener('touchend',function(event){
	endx = event.changedTouches[0].pageX;
	endy = event.changedTouches[0].pageY;

	deltaX = startx - endx;
	deltaY = starty - endy;

	if(Math.abs(deltaX)+Math.abs(deltaY)<50){
		//Not a move

	}else if(Math.abs(deltaX)>Math.abs(deltaY)){
		//Hov
		if(deltaX>0){
			//right
			gridMove("right");
		}
			else{
			//left
			gridMove("left")	
			}
	}else{
		//Vert
		if(deltaY>0){gridMove("up")}
			else {gridMove("down")}

	}
})