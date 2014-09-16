var main = function(){
	//set up game grid
	setUp();
	//Get window size, set grid size
	
	//start button listener: START THE GAME!!
	$('.starter').click(function(){
		$('#top').remove();
		newGame();
		testButton("80px");
		$('.startset').fadeOut(100,function(){
			$('.grid').slideDown(600,function(){
				//$('.cell').each(function(){  //--Totally lost here and the next line-- 
				//$(this).attr("cellVal",function(){var vl = parseInt($(this).text());return vl;})});
			});
		}).remove();
		//	Creat test buttons
		
		$('.top').slideDown(600);
	});

	//initial data
	var countCell = 0;
	var gridV=[];
	var $next = 0;
	var $current = 3;
	var $g = Math.min($(window).height(),$(window).width())-100;
	var	$edge = $(window).height()-$(window).width();
	
	$(document).keydown(function(key){});
//FUNCTIONS====================================================================

	function setUp(){
		$("<div id =\"grid\" class=\"grid\"><div><span>11</span><span>12</span><span>13</span><span>14</span></div><div><span>R1C1</span><span>R1C2</span><span>R1C3</span><span>R1C4</span></div><div><span>R1C1</span><span>R1C2</span><span>R1C3</span><span>R1C4</span></div><div><span>R1C1</span><span>R1C2</span><span>R1C3</span><span>R1C4</span></div></div>")
		.appendTo($('.container')).hide();

		$g = Math.min($(window).height(),$(window).width())-100;
		$edge = $(window).height()-$(window).width();
		if($edge > 0){	$('#grid').css({'margin-top':((0.5*$edge)+75),'margin-left':50,'width':$g,'height':$g});}
			else {  $('#grid').css({'margin-top':75,'margin-left':Math.abs(0.5*$edge)+50,'width':$g,'height':$g}); }

		$('#grid').children().addClass('row');
		$('#grid').find($('span')).addClass('cell');
		//Determin grid size	
};

	function newGrid(){
	gridV=[];
	$('div.grid').find('span').each(function(i){
		gridV[i]=parseInt($(this).html());
	});
	$('div.grid').find('*').remove();
	$('<div class=\"row r1\"><span class=\"cell r1 c1\"></span><span class=\"cell r1 c2\"></span><span class=\"cell r1 c3\"></span><span class=\"cell r1 c4\" ></span></div><div class=\"row r2\"><span class=\"cell r2 c1\"></span><span class=\"cell r2 c2\"></span><span class=\"cell r2 c3\"></span><span class=\"cell r2 c4\" ></span></div><div class=\"row r3\"><span class=\"cell r3 c1\"></span><span class=\"cell r3 c2\"></span><span class=\"cell r3 c3\"></span><span class=\"cell r3 c4\" ></span></div><div class=\"row r4\"><span class=\"cell r4 c1\"></span><span class=\"cell r4 c2\"></span><span class=\"cell r4 c3\"></span><span class=\"cell r4 c4\" ></span></div>').appendTo('div.grid');
	$('.cell').css({'margin':(0.025*$g),'height':0.2*$g,'width':0.2*$g, 'position':'absolute'});
	$('span.c2').css({'left':0.25*$g});
	$('span.c3').css({'left':0.5*$g});
	$('span.c4').css({'left':0.75*$g});
	//$('.cell').css({"color":"black","background-color":"white"});
	//	console.log("How many 0s?: "+$('.cell:contains("0")').size())
	$('.cell:contains("0")').css({"background-color":"#d0d9ff","color":"#d0d9ff"});
		$('div.grid').find('span').each(function(i){
		$(this).text(gridV[i]);
	});
};

	function moveGrid(direct,next){

		newGrid();

		if(direct === "left"){
		/*
		//index?
		$('.c1').css({'z-index':'1'});
		$('.c2').css({'z-index':'2'});
		$('.c3').css({'z-index':'3'});
		$('.c4').css({'z-index':'4'});
		*/
		//run on each cell
		$('.cell').each(function(){
			var moveID = 0;
			var cellThis = parseInt($(this).text());
			var cellPrev = parseInt($(this).prev().text());
			var cellV = cellThis;
			if($(this).hasClass('c1')){
				if($(this).text()==="0"){$(this).addClass('remove')};
			}
				else if($(this).prev().hasClass('moved')){moveID=1;}
				else if(cellPrev === 0){moveID =1;cellV=cellThis;$(this).prev().addClass('remove');}
				else if((cellPrev >=3)&&(cellPrev===cellThis)){moveID=1;cellV=cellThis*2;$(this).prev().addClass('remove')}
				else if((cellPrev+cellThis)===3){moveID=1;cellV=3;$(this).prev().addClass('remove')}
			if(cellV >= 0){$(this).attr("vv",cellV);}
			if(moveID===1){$(this).addClass('moved').text(cellV);};
		});
		//$('.cell').not('.moved').toggle();
		//debug
		console.log("The grid: "+gridV);
		console.log("Anything Moved?"+$('.r1.moved').size());
		console.log("Anything Moved?"+$('.r2.moved').size());
		console.log("Anything Moved?"+$('.r3.moved').size());
		console.log("Anything Moved?"+$('.r4.moved').size());

		$('.remove').each(function(){$(this).parent().append('<span class=\"new cell\">0</span>');}).hide();
		$('.new').each(function(){$(this).attr("style",$(this).siblings("[vv=0]").attr("style"));});



		$('.moved.c2').animate({'margin-left':0.025*$g,'color':'#ff5722'},200);
		$('.moved.c3').animate({'margin-left':0.025*$g,'color':'#ff5722'},200);
		$('.moved.c4').animate({'margin-left':0.025*$g,'color':'#ff5722'},200);
		$('.new').animate({'margin-left':0.025*$g,'color':'#ff5722'},200);

		$('.remove').remove();
		};
	};

	function testButton(E){
			$("<div class =\"top\"><div class =\"test\" id=\"testA\">MENU</div><div class =\"test\" id=\"testB\">RESET</div></div>")
			.appendTo($('.container')).hide();
			//set left margin
			//$('#testA').css({'margin-left':E})
			$('#testA').click(function(){moveGrid("left",3)});
			$('#testB').click(function(){newGame()});

			$("<div class =\"test\" id=\"testC\">Left</div>").appendTo($('#testA').parent()); //style=\"left:320px\"
			$('#testC').click(function(){
				countCell = 0;
				
				$('span.cell').css({
				'position':'absolute'	//'float':'left',//
				}).each(function(){
					eachCell($(this));
				});
				if($('.del').size()===0){alert("YOU LOST!")};

				moveStep1();
				moveStep2();
				//reFormat();
				//alert(countCell);
			});
};

	function newGame(){
		$('.cell').each(function(){
		$(this).html(Math.floor(Math.random()*Math.random()+3*Math.random()));
		}).show();
		newGrid();
	};

	function eachCell(A){
		countCell+=1;
		var cellV = parseInt(A.text());
		var valA = parseInt(A.text());
		var valP = parseInt(A.prev().text());
	
		//	console.log("Itself:"+A);
		//	console.log("Text:"+A.text());
		//  console.log(valA);
		A.css({'color':'#000'})
		//	A.removeAttr('style');
		//A I first in the row? ==>>mark it
		function AtoP(){
			A.addClass('moved');
			if(1-A.siblings('.del').size()){A.prev().addClass('del')};
		}

		if((1-A.prev().size())){A.html(valA);console.log();}
			else if(A.prev().hasClass('moved')){A.text(valA);A.addClass('moved')}
				else {
					if(valP===0){A.text(valA);AtoP()}
					else if(valP+valA === 3){A.text("3");AtoP()}
					else if((valA===valP)&&(valA>=3)){A.text(valA*2);AtoP()}
					else if(valA===0){A.addClass('del');A.text(valA)}
						else{A.text(valA)}
					}
		A.attr("val",A.text());
		A.text(valA);

		//if(A.text()==="NaN"){A.text("0")}


		

	//someone del in row?
	};

	function moveStep1(){
		$('.del').parent().append('<span class=\"cell moved c5\">0</span>');
		$('.c5').eq(Math.floor(Math.random()*$('.c5').size())).text($current);
		$('.c5').css({'position':'absolute','width':$g*0.2,'height':$g*0.2,'margin':$g*0.025,'left':$g});
		};

	function moveStep2(){
		//$('.del').fadeOut('300', function(){$(this).remove();});
		console.log("You took a move");
		$('.del').remove();
		$('.moved.c2').animate({left:0},300);
		$('.moved.c3').animate({left:0.25*$g},300);
		$('.moved.c4').animate({left:0.5*$g},300);
		$('.moved.c5').animate({left:0.75*$g},300);
		//window.setTimeout(reFormat(),300);
		function fixText(){
			$('.cell').each(function(){
				$(this).text( $(this).attr('val') );console.log("????"+$(this).text());
			})
		};

		$('#fuck').fadeToggle(400,fixText());

		reFormat();
		};
	function reFormat(){
		//$('span.del').remove();
		$('div.row').each(function(){
			console.log("The row has " + $(this).children().size() + " cells");
			$(this).children().first('span').attr('class','cell c1');
			$(this).children().first('span').next().attr('class','cell c2');
			$(this).children().last('span').prev().attr('class','cell c3');
			$(this).children().last('span').attr('class','cell c4');
		});
		//$('div.row').
		//$('div.row').children().last('span').prev().removeClass().addClass('cell','c3');
	}

//FUNCTIONS====================================================================
};
$(document).ready(main);

