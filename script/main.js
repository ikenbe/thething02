var main = function(){
//set up game grid
	$("<div id =\"grid\" class=\"grid\"><div><span>R1C1<\/span><span>R1C2<\/span><span>R1C3<\/span><span>R1C4<\/span><\/div><div><span>R1C1<\/span><span>R1C2<\/span><span>R1C3<\/span><span>R1C4<\/span><\/div><div><span>R1C1<\/span><span>R1C2<\/span><span>R1C3<\/span><span>R1C4<\/span><\/div><div><span>R1C1<\/span><span>R1C2<\/span><span>R1C3<\/span><span>R1C4<\/span><\/div><\/div>")
	.appendTo($('.container')).hide();
	$('.grid').find($('span')).addClass('cell');

//start button listener
	$('.starter').click(function(){
		$('.startset').slideUp(100,function(){$('.grid').slideDown(600)});
		newGame();
	})

//initial data
	var $next = 0;
	var $current = 0;
	function newGame(){
		$('span:not(.top)').each(function(){
			$(this).html(Math.floor(Math.random()*Math.random()*4));
			});
		};
	}
	$(document).keydown(function(key){

	});
/*
//=============================================================================
	$(document).keydown(function(key){
//Define the next number
		$current = $next;
		if($('.moved').size() > 0){
			$next = Math.floor(Math.random()*3+1);
			var has1 = $('span:contains("1"):not(#next)').size();
			var has2 = $('span:contains("2"):not(#next)').size();
			if( has1 - has2 >=4	){$next = 2}
			else if( has1 - has2 <=-4 ){$next = 1}
			else if($next===3){for(var i=0;i<0.18;i=Math.random()){$next=$next*2}};
			$('#next').text($next);
//		$('#next').prepend('<p>'+$current+'</p>');
		}
//Remove status
		$('.moved').removeClass('moved');
		$('span').removeClass('stuck');

//
//		console.log(key.which);
		switch(key.which){
			case 37:
			moveLeft();
			break;
			case 39:
			moveRight();
			break;
			case 38:
			moveUp();
			break;
			case 40:
			moveDown();
			break;
		};
//=============================================================================
*/
$(document).ready(main);