function main3(){
	var countCell = 0;
	var gridV=[];
	var $next = 0;
	var $current = 0;
	var $g = 0;
	var $edge = 0;
	var gridNow = new Array();
	
	for(var i=0;i<4;i++){
		gridNow[i] = new Array();
		for(var j=0;j<4;j++){gridNow[i][j]=parseInt(Math.floor(Math.random()*4));};
	}

	$('body').data('val', gridNow);
	console.log();
	console.log(gridNow[3][3]);
	//console.log($('body').data().moving);
	//console.log($('body').data().del);

	$('.starter').click(function(){
		initGrid();
		initCell();
		transData();
		$('.startset').fadeOut('fast', function(){$('#grid').slideDown('slow')});
		$("<div class=\"test\" id=\"test2\">LEFT</div><div class=\"test\" id=\"test3\">RIGHT</div><div class=\"test\" id=\"test4\">UP</div><div class=\"test\" id=\"test5\">DOWN</div><div class=\"test\" id=\"test1\">RESET</div>").appendTo($('.container'));

		$('#test1').click(function(){
			for(var i=0;i<4;i++){
				for(var j=0;j<4;j++){gridNow[i][j]=Math.floor(Math.random()*4);};
			};
			transData();
		});
		$('#test2').click(function(){
			gridMove("left");
		});

		$('#test3').click(function(){
			gridMove("right");
		});
		$('#test4').click(function(){
			gridMove("up");
		});
		$('#test5').click(function(){
			gridMove("down");
		});
	});

	

	//FUNCTIONS====================================================================
	function initGrid(){

		if(!$('#grid').size()){$("<div id =\"grid\" class=\"grid\"></div>").appendTo($('div.container')).hide()};
		
		//Determine grid size and cell size
		$g = 0.20*(Math.min($(window).height(),$(window).width()));
		$edge = $(window).height()-$(window).width();
		;
		if($edge > 0){	$('#grid').css({'margin-top':0.8*$edge,'margin-left':0.5*$g,'width':4*$g,'height':4*$g});}
			else {  $('#grid').css({'margin-top':100,'margin-left':Math.abs(0.5*$edge)+50,'width':4*$g,'height':4*$g}); }

		//tagging the rows and cells
		//$('#grid').children().addClass('row');
		//$('#grid').find($('span')).addClass('cell');
	};

	function initCell(){
		$("<div class=\"row r1\"><span class=\"cell r1 c1\"></span><span class=\"cell r1 c2\"></span><span class=\"cell r1 c3\"></span><span class=\"cell r1 c4\" ></span></div><div class=\"row r2\"><span class=\"cell r2 c1\"></span><span class=\"cell r2 c2\"></span><span class=\"cell r2 c3\"></span><span class=\"cell r2 c4\" ></span></div><div class=\"row r3\"><span class=\"cell r3 c1\"></span><span class=\"cell r3 c2\"></span><span class=\"cell r3 c3\"></span><span class=\"cell r3 c4\" ></span></div><div class=\"row r4\"><span class=\"cell r4 c1\"></span><span class=\"cell r4 c2\"></span><span class=\"cell r4 c3\"></span><span class=\"cell r4 c4\" ></span></div>")
		.appendTo($('div.grid'));
		$('.cell').css({'margin':(0.1*$g),  'height':0.8*$g,'width':0.8*$g, 'display':'block', 'position':'absolute'});
		$('span.c2').css({'left':$g});
		$('span.c3').css({'left':2*$g});
		$('span.c4').css({'left':3*$g});
	};

	function transData(){
		for(var i=0;i<4;i++){
			for(var j=0;j<4;j++){$('.cell').eq(i*4+j).text(gridNow[i][j]).attr("val",gridNow[i][j]).css({'font-size':0.4*$g});};
		};
		$('.cell').not('[val="0"]').css({"background-color":"#fff","color":"#000","display":"inline-block",'box-shadow':'5px 5px 1px #999999'});
		$('[val="0"]').css({"display":"none"});
		$('[val="1"]').css({"background-color":"#7EDAFF","color":"#FFF",'box-shadow':'5px 5px 1px #4488ee'});
		$('[val="2"]').css({"background-color":"#FF6F8A","color":"#FFF",'box-shadow':'5px 5px 1px #cc4477'});
	}

	function goLeft(){
		//var gridNew = 0;
		for(var i=0;i<4;i++){
		var indicator1=0;
		var indicator2=0;
		var indicator3=0;

		if (!gridNow[i][0]){ gridNow[i][0]=gridNow[i][1];indicator1=1;}
		else if((gridNow[i][0]==gridNow[i][1])&&(gridNow[i][0]>2)){gridNow[i][0]+=gridNow[i][1];indicator1=1;}
		else if(gridNow[i][0]+gridNow[i][1]==3){gridNow[i][0]=3;indicator1=1;}
		else indicator1=0;

		if (indicator1==1){ gridNow[i][1]=gridNow[i][2];indicator2=1;}
		else if (gridNow[i][1]==0){ gridNow[i][1]=gridNow[i][2];indicator2=1;}
		else if((gridNow[i][1]==gridNow[i][2])&&(gridNow[i][1]>2)){gridNow[i][1]=gridNow[i][1]*2;indicator2=1;}
		else if(gridNow[i][1]+gridNow[i][2]==3){gridNow[i][1]=3;indicator2=1;}
		else indicator2=0;

		if (indicator2==1){ gridNow[i][2]=gridNow[i][3];indicator3=1;}
		else if (!gridNow[i][2]){ gridNow[i][2]=gridNow[i][3];indicator3=1;}
		else if((gridNow[i][2]==gridNow[i][3])&&(gridNow[i][2]>2)){gridNow[i][2]=gridNow[i][2]*2;indicator3=1;}
		else if(gridNow[i][2]+gridNow[i][3]==3){gridNow[i][2]=3;indicator3=1;}
		else indicator3=0;

		if (indicator3==1){ gridNow[i][3]=0; };

			console.log("grid\("+i+"\):"+gridNow[i][0]+","+gridNow[i][1]+","+gridNow[i][2]+","+gridNow[i][3]);
		}
	}

	function goRight(){
		for(var i=0;i<4;i++){
		var indicator1=0;
		var indicator2=0;
		var indicator3=0;

		//console.log("grid\("+i+"\):"+gridNow[i][0]+","+gridNow[i][1]+","+gridNow[i][2]+","+gridNow[i][3]);
		
		if (!gridNow[i][3]){ gridNow[i][3]=gridNow[i][2];indicator1=1;}
		else if((gridNow[i][3]==gridNow[i][2])&&(gridNow[i][3]>2)){gridNow[i][3]+=gridNow[i][2];indicator1=1;}
		else if(gridNow[i][3]+gridNow[i][2]==3){gridNow[i][3]=3;indicator1=1;}
		else indicator1=0;

		if (indicator1==1){ gridNow[i][2]=gridNow[i][1];indicator2=1;}
		else if (gridNow[i][2]==0){ gridNow[i][2]=gridNow[i][1];indicator2=1;}
		else if((gridNow[i][2]==gridNow[i][1])&&(gridNow[i][2]>2)){gridNow[i][2]=gridNow[i][2]*2;indicator2=1;}
		else if(gridNow[i][2]+gridNow[i][1]==3){gridNow[i][2]=3;indicator2=1;}
		else indicator2=0;

		if (indicator2==1){ gridNow[i][1]=gridNow[i][0];indicator3=1;}
		else if (!gridNow[i][1]){ gridNow[i][1]=gridNow[i][0];indicator3=1;}
		else if((gridNow[i][1]==gridNow[i][0])&&(gridNow[i][1]>2)){gridNow[i][1]=gridNow[i][1]*2;indicator3=1;}
		else if(gridNow[i][1]+gridNow[i][0]==3){gridNow[i][1]=3;indicator3=1;}
		else indicator3=0;

		if (indicator3==1){ gridNow[i][0]=0; };

			console.log("grid\("+i+"\):"+gridNow[i][0]+","+gridNow[i][1]+","+gridNow[i][2]+","+gridNow[i][3]);
		}
	}

	function goUp(){
		for(var j=0;j<4;j++){
		var indicator1=0;
		var indicator2=0;
		var indicator3=0;

		//console.log("grid\("+j+"\):"+gridNow[0][j]+","+gridNow[1][j]+","+gridNow[2][j]+","+gridNow[3][j]);
		
		if (!gridNow[0][j]){ gridNow[0][j]=gridNow[1][j];indicator1=1;}
		else if((gridNow[0][j]==gridNow[1][j])&&(gridNow[0][j]>2)){gridNow[0][j]+=gridNow[1][j];indicator1=1;}
		else if(gridNow[0][j]+gridNow[1][j]==3){gridNow[0][j]=3;indicator1=1;}
		else indicator1=0;

		if (indicator1==1){ gridNow[1][j]=gridNow[2][j];indicator2=1;}
		else if (gridNow[1][j]==0){ gridNow[1][j]=gridNow[2][j];indicator2=1;}
		else if((gridNow[1][j]==gridNow[2][j])&&(gridNow[1][j]>2)){gridNow[1][j]=gridNow[1][j]*2;indicator2=1;}
		else if(gridNow[1][j]+gridNow[2][j]==3){gridNow[1][j]=3;indicator2=1;}
		else indicator2=0;

		if (indicator2==1){ gridNow[2][j]=gridNow[3][j];indicator3=1;}
		else if (!gridNow[2][j]){ gridNow[2][j]=gridNow[3][j];indicator3=1;}
		else if((gridNow[2][j]==gridNow[3][j])&&(gridNow[2][j]>2)){gridNow[2][j]=gridNow[2][j]*2;indicator3=1;}
		else if(gridNow[2][j]+gridNow[3][j]==3){gridNow[2][j]=3;indicator3=1;}
		else indicator3=0;

		if (indicator3==1){ gridNow[3][j]=0; };

			console.log("grid\("+j+"\):"+gridNow[0][j]+","+gridNow[1][j]+","+gridNow[2][j]+","+gridNow[3][j]);
		}
	}

	function goDown(){
		for(var j=0;j<4;j++){
		var indicator1=0;
		var indicator2=0;
		var indicator3=0;

		//console.log("grid\("+j+"\):"+gridNow[0][j]+","+gridNow[1][j]+","+gridNow[2][j]+","+gridNow[3][j]);
		
		if (!gridNow[3][j]){ gridNow[3][j]=gridNow[2][j];indicator1=1;}
		else if((gridNow[3][j]==gridNow[2][j])&&(gridNow[3][j]>2)){gridNow[3][j]+=gridNow[2][j];indicator1=1;}
		else if(gridNow[3][j]+gridNow[2][j]==3){gridNow[3][j]=3;indicator1=1;}
		else indicator1=0;

		if (indicator1==1){ gridNow[2][j]=gridNow[1][j];indicator2=1;}
		else if (gridNow[2][j]==0){ gridNow[2][j]=gridNow[1][j];indicator2=1;}
		else if((gridNow[2][j]==gridNow[1][j])&&(gridNow[2][j]>2)){gridNow[2][j]=gridNow[2][j]*2;indicator2=1;}
		else if(gridNow[2][j]+gridNow[1][j]==3){gridNow[2][j]=3;indicator2=1;}
		else indicator2=0;

		if (indicator2==1){ gridNow[1][j]=gridNow[0][j];indicator3=1;}
		else if (!gridNow[1][j]){ gridNow[1][j]=gridNow[0][j];indicator3=1;}
		else if((gridNow[1][j]==gridNow[0][j])&&(gridNow[1][j]>2)){gridNow[1][j]=gridNow[1][j]*2;indicator3=1;}
		else if(gridNow[1][j]+gridNow[0][j]==3){gridNow[1][j]=3;indicator3=1;}
		else indicator3=0;

		if (indicator3==1){ gridNow[0][j]=0; };

			console.log("grid\("+j+"\):"+gridNow[0][j]+","+gridNow[1][j]+","+gridNow[2][j]+","+gridNow[3][j]);
		}
	}

	function gridMove(direction){
		var gridThen = new Array;
		for(i=0;i<4;i++){
			gridThen[i] = new Array;
			for(j=0;j<4;j++){
				gridThen[i][j]=gridNow[i][j];
			}
		}

		//if(!testMoving()){ alert("Game's Over !!");return false;}

		if (direction=="left"){
			goLeft();
			if(gridThen.join()!=gridNow.join())
				{console.log("MOVED!"+gridThen.join()+"||"+gridNow.join());
				addNew("left");}
		}
		else if (direction=="right"){
			goRight();
			if(gridThen.join()!=gridNow.join())
				{console.log("MOVED!"+gridThen.join()+"||"+gridNow.join());
				addNew("right");}
		}
		else if (direction=="up"){
			goUp();
			if(gridThen.join()!=gridNow.join())
				{console.log("MOVED!"+gridThen.join()+"||"+gridNow.join());
				addNew("up");}
		}
		else if (direction=="down"){
			goDown();
			if(gridThen.join()!=gridNow.join())
				{console.log("MOVED!"+gridThen.join()+"||"+gridNow.join());
				addNew("down");}
		}

		transData();

	}

	function addNew(direction){
		var tempNext = parseInt(Math.random()*4);
		if (tempNext<3){$next = tempNext+1;}
		else { 
			$next=1.5;
			for(var i=0;i<0.5;i=Math.random()){
				$next = $next*2;
			};
		};
		switch(direction){
		case "left":
			if(gridNow[0][3]>0&&gridNow[1][3]>0&&gridNow[2][3]>0&&gridNow[3][3]>0){}
			else {for(var i=0;i<4;i++){
				if(!Math.floor(Math.random()*50)&&gridNow[i][3]==0){
					gridNow[i][3]=$next;break;
					}
				else if(i==3){i=-1;}	
				}}
		break;
		case "right":
			if(gridNow[0][0]>0&&gridNow[1][0]>0&&gridNow[2][0]>0&&gridNow[3][0]>0){}
			else {for(var i=0;i<4;i++){
				if(!Math.floor(Math.random()*50)&&gridNow[i][0]==0){
					gridNow[i][0]=$next;break;
					}
				else if(i==3){i=-1;}	
				}}
		break;
		case "down":
			if(gridNow[0][0]>0&&gridNow[0][1]>0&&gridNow[0][2]>0&&gridNow[0][3]>0){}
			else {for(var j=0;j<4;j++){
				if(!Math.floor(Math.random()*50)&&gridNow[0][j]==0){
					gridNow[0][j]=$next;break;
					}
				else if(j==3){j=-1;}	
				}}
		break;
		case "up":
			if(gridNow[3][0]>0&&gridNow[3][1]>0&&gridNow[3][2]>0&&gridNow[3][3]>0){}
			else {for(var j=0;j<4;j++){
				if(!Math.floor(Math.random()*50)&&gridNow[3][j]==0){
					gridNow[3][j]=$next;break;
					}
				else if(j==3){j=-1;}	
				}}
		break;
		}
			
		//}
	}

	function isMoved(a,b){
		var judge=0;
		for(i=0;i<4;i++){
			for(j=0;j<4;j++){
				judge+=a[i][j]-b[i][j];
				if(judge)
					return true;
			}
		}
		return false;
	}

	function testMoving(){
		//var a = gridNow.join();
		goUp();
		goDown();
		goLeft()
		goRight();

		//if (gridNow==a)
		//	return false;

		//gridNow = a;
		//return true;
	}

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
			//left
			gridMove("left");
		}
			else{
			//right
			gridMove("right")	
			}
	}else{
		//Vert
		if(deltaY>0){gridMove("up")}
			else {gridMove("down")}

	}
})



}
$(document).ready(main3);

