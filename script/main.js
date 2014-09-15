var main = function(){
//set up game grid
	$("<div id =\"grid\" class=\"grid\"><div><span>R1C1<\/span><span>R1C2<\/span><span>R1C3<\/span><span>R1C4<\/span><\/div><div><span>R1C1<\/span><span>R1C2<\/span><span>R1C3<\/span><span>R1C4<\/span><\/div><div><span>R1C1<\/span><span>R1C2<\/span><span>R1C3<\/span><span>R1C4<\/span><\/div><div><span>R1C1<\/span><span>R1C2<\/span><span>R1C3<\/span><span>R1C4<\/span><\/div><\/div>")
	.appendTo($('.container')).hide();
	$('#grid').children().addClass('row');
	$('#grid').find($('span')).addClass('cell');
	var $g = Math.min($(window).height(),$(window).width())-100;
	var $edge = $(window).height()-$(window).width();
	if($edge > 0){	$('#grid').css({'margin-top':((0.5*$edge)+75),'margin-left':50,'width':$g,'height':$g});}
		else {  $('#grid').css({'margin-top':75,'margin-left':Math.abs(0.5*$edge)+50,'width':$g,'height':$g}); }

	//start button listener
	$('.starter').click(function(){
		$('#top').hide();
		$('.startset').slideUp(100,function(){
			$('.cell').css({'margin':(0.025*$g),'height':0.2*$g});
			$('.grid').slideDown(500,function(){
				newGame();
								$('.cell').each(function(){
					$(this).attr("cellVal",function(){var vl = parseInt($(this).text());return vl;})});
			});
		});
//		Test buttons
		$("<div class =\"test\" id=\"testA\">Test<\/div><div class =\"test\" id=\"testB\">Test<\/div>").prependTo($('.container'));
		$('#testA').click(function(){moveGrid("left",3)});
		$('#testB').click(function(){
			newGame();
		});
	});

//initial data
	var $next = 0;
	var $current = 0;
	function newGame(){
		$('.cell').each(function(){
			$(this).html(Math.floor(Math.random()*Math.random()+3*Math.random()));
			}).show();
		newGrid();
	};

	
	$(document).keydown(function(key){});
//=============================================================================


var gridV=[];

function newGrid(){
	gridV=[];
	$('div.grid').find('span').each(function(i){
		gridV[i]=parseInt($(this).html());
	});
	$('div.grid').find('*').remove();
	$('<div class=\"row r1\"><span class=\"cell r1 c1\"><\/span><span class=\"cell r1 c2\"><\/span><span class=\"cell r1 c3\"><\/span><span class=\"cell r1 c4\" ><\/span><\/div><div class=\"row r2\"><span class=\"cell r2 c1\"><\/span><span class=\"cell r2 c2\"><\/span><span class=\"cell r2 c3\"><\/span><span class=\"cell r2 c4\" ><\/span><\/div><div class=\"row r3\"><span class=\"cell r3 c1\"><\/span><span class=\"cell r3 c2\"><\/span><span class=\"cell r3 c3\"><\/span><span class=\"cell r3 c4\" ><\/span><\/div><div class=\"row r4\"><span class=\"cell r4 c1\"><\/span><span class=\"cell r4 c2\"><\/span><span class=\"cell r4 c3\"><\/span><span class=\"cell r4 c4\" ><\/span><\/div>').appendTo('div.grid');
	$('div.grid').find('span').each(function(i){
		$(this).text(gridV[i]);
	});
	$('.cell').css({'margin':(0.025*$g),'height':0.2*$g});
	$('.cell').css({"color":"black","background-color":"white","box-shadow":"5px 5px 2px #738ffe"});
	console.log("How many 0s?: "+$('.cell:contains("0")').size())
	$('.cell:contains("0")').css({"background-color":"#d0d9ff","color":"#d0d9ff","box-shadow":"0 0 0 #123456"});
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
console.log("The grid: "+gridV);
console.log("Anything Moved?"+$('.r1.moved').size());
console.log("Anything Moved?"+$('.r2.moved').size());
console.log("Anything Moved?"+$('.r3.moved').size());
console.log("Anything Moved?"+$('.r4.moved').size());

		$('.remove').each(function(){$(this).parent().append('<span class=\"new cell\">0</span>');}).hide();
		$('.new').each(function(){$(this).attr("style",$(this).prev().attr("style"));});



		$('.moved.c2').animate({'margin-left':0.025*$g,'color':'#ff5722'},200);
		$('.moved.c3').animate({'margin-left':0.025*$g,'color':'#ff5722'},200);
		$('.moved.c4').animate({'margin-left':0.025*$g,'color':'#ff5722'},200);
		$('.new').animate({'margin-left':0.025*$g,'color':'#ff5722'},200);

		$('.remove').remove();
	};
};







//=============================================================================
};
$(document).ready(main);

