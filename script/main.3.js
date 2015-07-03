function main3(){
    'use strict';
    var countCell = 0;
    var $next = 0;
    var $current = 0;
    var $g = 0;
    var $edge = 0;
    var gridNow = [];
    var cellMoving = [];
    var gridThen = [];
    for(var i=0;i<4;i+=1){
        gridNow[i] = [];
        gridThen[i] = [];
        cellMoving[i] = [];
        for(var j=0;j<4;j+=1){ gridThen[i][j] = parseInt(Math.floor(Math.random()*4)); gridNow[i][j] = gridThen[i][j]; cellMoving[i][j] = 0;}
    }

    $('.starter').click(function(){
        initGrid();
        initCell();
        transData();
        $('.startset').fadeOut('fast', function(){$('#grid').slideDown('slow');});
        $("<div class=\"next\">NEXT\:<span id=\"next\">0</span></div><div class=\"test\" id=\"test2\">Test</div><div class=\"test\" id=\"test1\">RESET</div>").appendTo($('.container'));
        /*<div class=\"test\" id=\"test2\">LEFT</div><div class=\"test\" id=\"test3\">RIGHT</div><div class=\"test\" id=\"test4\">UP</div><div class=\"test\" id=\"test5\">DOWN</div>*/

        getNext();

        $('#test1').click(function(){
            $('#test1').html("RESET");
            for(var i=0;i<4;i+=1){
                for(var j=0;j<4;j+=1){gridNow[i][j]=Math.floor(Math.random()*4);}
            }
            getNext();
            transData();
        });
        $('#test2').click(function(){
            moveAnimation("left");
        });
/*
        $('#test3').click(function(){
            gridMove("right");
        });
        $('#test4').click(function(){
            gridMove("up");
        });
        $('#test5').click(function(){
            gridMove("down");
        });
*/    });


var startx = 0
var starty = 0;
var endx = 0;
var endy = 0;

document.addEventListener('touchstart',function(event){
    startx = event.touches[0].pageX;
    starty = event.touches[0].pageY;
});

document.addEventListener('touchend',function(event){
    endx = event.changedTouches[0].pageX;
    endy = event.changedTouches[0].pageY;

    deltaX = startx - endx;
    deltaY = starty - endy;

    if(Math.abs(deltaX)+Math.abs(deltaY)<$g){
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
});

$(document).keydown(function(event){
    if(event.which==38)
        gridMove("up");
    if(event.which==40)
        gridMove("down");
    if(event.which==37)
        gridMove("left");
    if(event.which==39)
        gridMove("right");
    if(event.which==82)
        window.location.reload();
});

    //FUNCTIONS====================================================================

function initGrid(){

    if(!$('#grid').size()){$("<div id =\"grid\" class=\"grid\"></div>").appendTo($('div.container')).hide()}

    //Determine grid size and cell size
    $g = 0.20*(Math.min($(window).height(),$(window).width()));
    $edge = $(window).height()-$(window).width();
    ;
    if($edge > 0){    $('#grid').css({'margin-top':0.8*$edge,'margin-left':0.5*$g,'width':4*$g,'height':4*$g});}
        else {  $('#grid').css({'margin-top':0.5*$g,'margin-left':Math.abs(0.5*$edge),'width':4*$g,'height':4*$g}); }

}

function initCell(){
    $("<div class=\"row r1\"><span class=\"cell r1 c1\"></span><span class=\"cell r1 c2\"></span><span class=\"cell r1 c3\"></span><span class=\"cell r1 c4\" ></span></div><div class=\"row r2\"><span class=\"cell r2 c1\"></span><span class=\"cell r2 c2\"></span><span class=\"cell r2 c3\"></span><span class=\"cell r2 c4\" ></span></div><div class=\"row r3\"><span class=\"cell r3 c1\"></span><span class=\"cell r3 c2\"></span><span class=\"cell r3 c3\"></span><span class=\"cell r3 c4\" ></span></div><div class=\"row r4\"><span class=\"cell r4 c1\"></span><span class=\"cell r4 c2\"></span><span class=\"cell r4 c3\"></span><span class=\"cell r4 c4\" ></span></div>")
    .appendTo($('div.grid'));
    $('.cell').css({'margin':(0.1*$g),  'height':0.8*$g,'width':0.8*$g, 'display':'block', 'position':'absolute'});
    $('span.c2').css({'left':$g});
    $('span.c3').css({'left':2*$g});
    $('span.c4').css({'left':3*$g});
}

function transData(){
    for(var i=0;i<4;i+=1){
        for(var j=0;j<4;j+=1){$('.cell').eq(i*4+j).text(gridNow[i][j]).attr("val",gridNow[i][j]).css({'font-size':0.4*$g,'left':j*$g,'top':i*$g});}
    }
    $('.cell').not('[val="0"]').css({"background-color":"#fff","color":"#000","display":"inline-block",'box-shadow':'5px 5px 1px #999999'});
    $('[val="0"]').css({"display":"none"});
    $('[val="1"]').css({"background-color":"#7EDAFF","color":"#FFF",'box-shadow':'5px 5px 1px #4488ee'});
    $('[val="2"]').css({"background-color":"#FF6F8A","color":"#FFF",'box-shadow':'5px 5px 1px #cc4477'});
}

function goLeft(){
    resetArray(cellMoving);
    for(var i=0;i<4;i+=1){
        for(var j=0;j<3;j+=1){
            if (cellMoving[i][j]==1){ gridNow[i][j]=gridNow[i][j+1];cellMoving[i][j+1]=1;}
            else if (gridNow[i][j]==0){ gridNow[i][j]=gridNow[i][j+1];cellMoving[i][j+1]=1;}
            else if((gridNow[i][j]==gridNow[i][j+1])&&(gridNow[i][j]>2)){gridNow[i][j]+=gridNow[i][j];cellMoving[i][j+1]=1;}
            else if((gridNow[i][j]+gridNow[i][j+1]==3)&&gridNow[i][j]<3){gridNow[i][j]=3;cellMoving[i][j+1]=1;}
            else cellMoving[i][j+1]=0;
        }
        if (cellMoving[i][3]==1){ gridNow[i][3]=0;}
    }
}

function goRight(){
    resetArray(cellMoving);
    for(var i=0;i<4;i+=1){
        for(var j=3;j>0;j--){
            if (cellMoving[i][j]==1){ gridNow[i][j]=gridNow[i][j-1];cellMoving[i][j-1]=1;}
            else if (gridNow[i][j]==0){ gridNow[i][j]=gridNow[i][j-1];cellMoving[i][j-1]=1;}
            else if((gridNow[i][j]==gridNow[i][j-1])&&(gridNow[i][j]>2)){gridNow[i][j]+=gridNow[i][j];cellMoving[i][j-1]=1;}
            else if((gridNow[i][j]+gridNow[i][j-1]==3)&&gridNow[i][j]<3){gridNow[i][j]=3;cellMoving[i][j-1]=1;}
            else cellMoving[i][j-1]=0;
        }
        if (cellMoving[i][0]==1){ gridNow[i][0]=0; }
    }
}

function goUp(){
    resetArray(cellMoving);
    for(var j=0;j<4;j+=1){
        for(var i=0;i<3;i+=1){
            if (cellMoving[i][j]==1){ gridNow[i][j]=gridNow[i+1][j];cellMoving[i+1][j]=1;}
            else if (gridNow[i][j]==0){ gridNow[i][j]=gridNow[i+1][j];cellMoving[i+1][j]=1;}
            else if((gridNow[i][j]==gridNow[i+1][j])&&(gridNow[i][j]>2)){gridNow[i][j]+=gridNow[i][j];cellMoving[i+1][j]=1;}
            else if((gridNow[i][j]+gridNow[i+1][j]==3)&&gridNow[i][j]<3){gridNow[i][j]=3;cellMoving[i+1][j]=1;}
            else cellMoving[i+1][j]=0;
        }
        if (cellMoving[3][j]==1){ gridNow[3][j]=0; }
    }
}

function goDown(){
    resetArray(cellMoving);
    for(var j=0;j<4;j+=1){
        for(var i=3;i>0;i--){
            if (cellMoving[i][j]==1){ gridNow[i][j]=gridNow[i-1][j];cellMoving[i-1][j]=1;}
            else if (gridNow[i][j]==0){ gridNow[i][j]=gridNow[i-1][j];cellMoving[i-1][j]=1;}
            else if((gridNow[i][j]==gridNow[i-1][j])&&(gridNow[i][j]>2)){gridNow[i][j]+=gridNow[i][j];cellMoving[i-1][j]=1;}
            else if((gridNow[i][j]+gridNow[i-1][j]==3)&&gridNow[i][j]<3){gridNow[i][j]=3;cellMoving[i-1][j]=1;}
            else cellMoving[i-1][j]=0;
        }
        if (cellMoving[0][j]==1){ gridNow[0][j]=0; }
    }
}


function gridMove(direction){

    if (direction=="left"){
        goLeft();
    }
    else if (direction=="right"){
        goRight();
    }
    else if (direction=="up"){
        goUp();
    }
    else if (direction=="down"){
        goDown();

    }

    if(gridThen.join()!==gridNow.join())
    //if(isMoved(gridThen,gridNow))
        {console.log("MOVED:"+gridThen.join()+"||"+gridNow.join());
		addNew(direction);}

    //addNew(direction);
    moveAnimation(direction);
    setTimeout(transData(),500);
    ;

    if(isGameOver()){
        $('#test1').html("GameOver");
    }
    else{$('#test1').html("RESET");}

}

function addNew(direction){

    switch(direction){
    case "left":
        if(gridNow[0][3]>0&&gridNow[1][3]>0&&gridNow[2][3]>0&&gridNow[3][3]>0){}
        else {for(var i=0;i<4;i+=1){
            if(!Math.floor(Math.random()*50)&&gridNow[i][3]==0){
                gridNow[i][3]=$next;break;
                }
            else if(i==3){i=-1;}
            }}
    break;
    case "right":
        if(gridNow[0][0]>0&&gridNow[1][0]>0&&gridNow[2][0]>0&&gridNow[3][0]>0){}
        else {for(var i=0;i<4;i+=1){
            if(!Math.floor(Math.random()*50)&&gridNow[i][0]==0){
                gridNow[i][0]=$next;break;
                }
            else if(i==3){i=-1;}
            }}
    break;
    case "down":
        if(gridNow[0][0]>0&&gridNow[0][1]>0&&gridNow[0][2]>0&&gridNow[0][3]>0){}
        else {for(var j=0;j<4;j+=1){
            if(!Math.floor(Math.random()*50)&&gridNow[0][j]==0){
                gridNow[0][j]=$next;break;
                }
            else if(j==3){j=-1;}
            }}
    break;
    case "up":
        if(gridNow[3][0]>0&&gridNow[3][1]>0&&gridNow[3][2]>0&&gridNow[3][3]>0){}
        else {for(var j=0;j<4;j+=1){
            if(!Math.floor(Math.random()*50)&&gridNow[3][j]==0){
                gridNow[3][j]=$next;break;
                }
            else if(j==3){j=-1;}
            }}
    break;
    }

    getNext();

}

function isMoved(a,b){
    var judge=0;
    for(var i=0;i<4;i+=1){
        for(var j=0;j<4;j+=1){
            judge+=a[i][j]-b[i][j];
            if(judge>0)
                return true;
        }
    }
    return false;
}

function isGameOver(){
    for(var i=0;i<4;i+=1){
        for(var j=0;j<4;j+=1){
            gridThen[i][j] = gridNow[i][j];
        }
    }
        goUp();

    if (gridNow.join()==gridThen.join()) {var a=0;}
        else {var a=1;}

        goDown();

    if (gridNow.join()==gridThen.join()) {var b=0;}
        else {var b=1;}

        goLeft();

    if (gridNow.join()==gridThen.join()) {var c=0;}
        else {var c=1;}

        goRight();

    if (gridNow.join()==gridThen.join()) {var d=0;}
        else {var d=1;}

    console.log("isGameOver:"+a+b+c+d);

    if (a==0&&b==0&&c==0&&d==0){
        return true;
    }
    else {
        for(var i=0;i<4;i+=1){
            for(var j=0;j<4;j+=1){
                gridNow[i][j] = gridThen[i][j];
            }
        }
        return false;
    }
}

function getNext(){
    var tempNext = parseInt(Math.random()*4);
    if (tempNext<3){$next = tempNext+1;}
    else {
        $next=1.5;
        for(var i=0;i<0.4;i=Math.random()){
            $next = $next*2;
        };
    };
    var gridJoined = gridNow[0].concat(gridNow[1],gridNow[2],gridNow[3]);
    var countOne=0;
    var countTwo=0;
    for(var i=0;i<15;i+=1){

        if (gridJoined[i]==1)
            countOne+=1;

        if (gridJoined[i]==2)
            countTwo+=1;
    };
    if(countOne>countTwo+3)
        $next = 2;

    if(countOne<countTwo-3)
        $next = 1;

    gridJoined.sort(function(a,b){return a - b;});

    if ($next>gridJoined[15])
        $next = gridJoined[15];

    $('#next').html($next);
}

function resetArray(array){
    for(var i=0;i<4;i+=1){
        for(var j=0;j<4;j+=1){ array[i][j] = 0;};
    };
}

function moveAnimation(d){
	return(this);
//    console.log(cellMoving);

    var x=0;
    var y=0;
    if (d="left") {x+=1;y=0}
    else if (d="right") {x--;y=0}
    else if (d="up") {y--;x=0}
    else if (d="down") {y+=1;x=0};
/*    for(var i=0;i<4;i+=1){
            console.log(cellMoving[i]);
        for(var j=0;j<4;j+=1){
            if(cellMoving[i][j]){
                var p=i-x;
                var q=j+y;
                $('.cell').eq((i*4)+j).animate({
                    left:$g*q,
                    top:$g*p,
                    //fontSize:30,
                },400);
                //$('.cell').eq(i*4+j).html("nihao");
            }
        }
    }
    */
    if(cellMoving[0][0]){
        $('.cell').eq(0).animate({
                    top:$g*x,
                    left:$g*y,
                    //fontSize:30,
                },400);
    }
}



}
$(document).ready(main3);
