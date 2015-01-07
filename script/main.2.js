var main = function(){
	//initial data
	var countCell = 0;
	var gridV=[];
	var $next = 0;
	var $current = 0;
	var $g = 0;
	var $edge = 0;
	var retina = window.devicePixelRatio;
	console.log(retina);
	//set up game grid
	//Get window size, set grid size
	initGrid();
	initCell();
	
	//start button listener: START THE GAME!!
	$('.starter').click(function(){
		//$('#top').remove();
		newGame();
		testButton("80px");
		$('.startset').fadeOut(100,function(){
			$('.grid').slideDown(400,function(){
				//$('.cell').each(function(){  //--Totally lost here and the next line, what was I doing?-- 
				//$(this).attr("cellVal",function(){var vl = parseInt($(this).text());return vl;})});
			});
		}).remove();
		//	Creat test buttons
		
		$('.top').fadeIn(1000);
	});


	
	$(document).keydown(function(key){});
	//FUNCTIONS====================================================================

	function initGrid(){

		if($('#grid').size()===0){$("<div id =\"grid\" class=\"grid\"></div>").appendTo($('div.container')).hide()};
		
		//Determine grid size and cell size
		$g = 0.25*(Math.min($(window).height(),$(window).width())-100);
		$edge = $(window).height()-$(window).width();
		if($edge > 0){	$('#grid').css({'margin-top':((0.5*$edge)+75),'margin-left':50,'width':4*$g,'height':4*$g});}
			else {  $('#grid').css({'margin-top':75,'margin-left':Math.abs(0.5*$edge)+50,'width':4*$g,'height':4*$g}); }

		//tagging the rows and cells
		//$('#grid').children().addClass('row');
		//$('#grid').find($('span')).addClass('cell');
	};

	function initCell(){
		$("<div class=\"row r1\"><span class=\"cell r1 c1\"></span><span class=\"cell r1 c2\"></span><span class=\"cell r1 c3\"></span><span class=\"cell r1 c4\" ></span></div><div class=\"row r2\"><span class=\"cell r2 c1\"></span><span class=\"cell r2 c2\"></span><span class=\"cell r2 c3\"></span><span class=\"cell r2 c4\" ></span></div><div class=\"row r3\"><span class=\"cell r3 c1\"></span><span class=\"cell r3 c2\"></span><span class=\"cell r3 c3\"></span><span class=\"cell r3 c4\" ></span></div><div class=\"row r4\"><span class=\"cell r4 c1\"></span><span class=\"cell r4 c2\"></span><span class=\"cell r4 c3\"></span><span class=\"cell r4 c4\" ></span></div>")
		.appendTo($('div.grid'));
	};

	function newGame(){

		$('.cell').each(function(){
			$(this).html(Math.floor(Math.random()*Math.random()+3*Math.random()));
		});
		 initGrid()
		resetGrid();
		colorFix();
	};

	function resetGrid(){  //delete all the cells and create new cells and give them the old val
		// girdV storages the cell values as is group
		gridV=[];
		$('div.grid').find('span').each(function(i){gridV[i]=parseInt($(this).html());});
		// remove all cells
		$('div.grid').find('*').remove();

		initCell();

		$('.cell').css({'margin':(0.1*$g),'height':0.8*$g,'width':0.8*$g, 'position':'absolute'});
		$('span.c2').css({'left':$g});
		$('span.c3').css({'left':2*$g});
		$('span.c4').css({'left':3*$g});

		$('div.grid').find('span').each(function(i){
		$(this).text(gridV[i]);
		});
	};

	function moveGrid(direct,next){

		setNext();
		countCell = 0;
		
		$('span.cell').css({
			'position':'absolute'	//'float':'left',//
			}).each(function(){
					eachCell($(this));
				});
		if($('.del').size()===0){alert("This way stuck!")};
		
		moveStep1();
		moveStep2();
	};

	function colorFix(){
		$('.cell').each(function(){ 
			var pass = parseInt($(this).text());
			$(this).attr("val", pass);
		}) ;
		$('.cell').not('[val="0"]').css({"background-color":"#fff","color":"#000","display":"inline-block"});
		$('[val="0"]').css({"display":"none"});//"background-color":"#4d73ff","color":"#d0d9ff","z-index":"9"});
		console.log("Debug: "+$('[val="0"]').size());
	};

	function testButton(E){
			$("<div class =\"top\"><div class =\"test\" id=\"testA\">MENU</div><div class =\"test\" id=\"testB\">RESET</div></div>")
			.appendTo($('.container')).hide();
			//set left margin
			//$('#testA').css({'margin-left':E})
			$('#testA').click(function(){moveGrid()});
			$('#testB').click(function(){newGame()});

			$("<div class =\"test\" id=\"testC\">Left</div>").appendTo($('#testA').parent()); //style=\"left:320px\"
			$('#testC').click(function(){

				moveGrid();
				
			});
	};




	function eachCell(A,D){
		countCell+=1;
		var cellV = parseInt(A.text());
		var valA = parseInt(A.text());
		var valP = parseInt(A.prev().text());
	
		//	console.log("Itself:"+A);
		//	console.log("Text:"+A.text());
		//  console.log(valA);
		///A.css({'color':'#000'})
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
	};

	function moveStep1(){

		//Left
		$('.del').parent().append('<span class=\"cell moved c5\">0</span>');
		$('.c5').eq(Math.floor(Math.random()*$('.c5').size())).text($current);
		$('.c5').each(function(){ 
			var pass = parseInt($(this).text());
			$(this).attr("val", pass)
		}) ;
		$('.c5').css({'position':'absolute','width':$g*0.8,'height':$g*0.8,'margin':$g*0.1,'left':4*$g}).hide();
		};

	function moveStep2(){
		//$('.del').fadeOut('300', function(){$(this).remove();});
		console.log("You took a move");
		window.setTimeout(function(){$('.del').remove()},10);
		$('.moved.c2').animate({left:0},200);
		$('.moved.c3').animate({left:$g},200);
		$('.moved.c4').animate({left:2*$g},200);
		$('.moved.c5').animate({left:3*$g},200);
		//window.setTimeout(reFormat(),300);
		function fixText(){
			$('.cell').each(function(){
				$(this).text( $(this).attr('val') );//console.log("????"+$(this).text());
			})
		};
		window.setTimeout(fixText,20);
		window.setTimeout(colorFix,170);
		//$('#fuck').fadeToggle(400,fixText());
		window.setTimeout(reFormat,30);
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

	function setNext(){
		$current = $next;
		$next = Math.floor(Math.random()*3+1);
		if($next>=3){
			for(var i=Math.random();i<0.3;i=Math.random()){
				$next = $next*2;
			}}
		$('#testB').text("Next:"+$next);
	}

	function calV(D){
		switch(D){
			case "left":
			//girdV[];
			break;
		}
	}


	//FUNCTIONS====================================================================



};
$(document).ready(main);
