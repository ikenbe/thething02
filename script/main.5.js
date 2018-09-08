function rotateClock(g, time) { // g = GRID, 
    if (g.length != 16) return g;
    for (; time > 0; --time) {
        var newGrid = [g[12], g[8], g[4], g[0], g[13], g[9], g[5], g[1], g[14], g[10], g[6], g[2], g[15], g[11], g[7], g[3]];
        g = [].concat(newGrid)
    }
    return g;
}

function move(g, direct, testing) {
    function showLog(Message) { if (!testing) console.log(Message) }
    var moved = [],
        gNew = [],
        r = 0;
    if (direct == 'up') r = 1;
    if (direct == 'right') r = 2;
    if (direct == 'down') r = 3;

    g = rotateClock(g, 4 - r);

    function setStatus(a, b) {
        //    if (b === 0) return [a, 0];
        if (!a && !b) return [0, 1];
        if (a === 0 && b != 0) return [b, 1];
        if (a + b === 3 && b) return [3, 1];
        if (a === b && a + b > 4) return [a + b, 1];
        return [a, 0];
    }
    for (var i = 0; i < 16; i++) {
        if (i % 4 === 0) {
            gNew[i] = setStatus(g[i], g[i + 1])[0];
            moved[i] = setStatus(g[i], g[i + 1])[1];
        } else if (i % 4 === 3) {
            gNew[i] = moved[i - 1] ? 0 : g[i];
            moved[i] = moved[i - 1] || 0;
        } else if (moved[i - 1] == 1) {
            gNew[i] = g[i + 1];
            moved[i] = 1;
        } else {
            gNew[i] = setStatus(g[i], g[i + 1])[0];
            moved[i] = setStatus(g[i], g[i + 1])[1];
            if (g[i] == 0) moved[i] = 1;
            if (g[i] !== 0 && g[i + 1] == 0) moved[i] = 0;
        }
    }
    //showLog("MOVED   :" + moved);
    //showLog("POSITION:" + moved[12], moved[13], moved[14], moved[15]);
    for (var i = 12, s = []; i < 16; i++) {
        if (moved[i]) s.push(i);
    }
    //showLog("akjwhdgakwjdhg : " + Math.floor(Math.random() * s.length));
    var t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    t[s[Math.floor(Math.random() * s.length)]] = 1;
    t = rotateClock(t, 4 - r);

    //showLog(rotateClock(moved, r));
    //showLog((t.join([]).split('1')[0].length));
    return {
        grid: rotateClock(gNew, r),
        addposition: (t.join([]).split('1')[0].length)
    }
}

function main3() {
    //'use strict';
    var $next = 0,
        $g = 0,
        $edge = 0,
        gridNow = [],
        gridBK = [],
        cellMoving = [];

    var initNumbers = function() {
        for (var i = 0; i < 16; i += 1) {
            gridNow[i] = parseInt(Math.floor(Math.random() * 4));
            cellMoving[i] = 0;
        }
        gridBK = gridNow;
    };

    initNumbers();

    $('.starter').click(function() {
        initGrid();
        initCell();
        transData();
        $('.startset').fadeOut('fast', function() {
            $('#grid').slideDown('slow');
        });
        $("<div class=\"next\">NEXT\:<span id=\"next\">0</span></div><div class=\"test\" id=\"test2\">Test</div><div class=\"test\" id=\"test1\">RESET</div>").appendTo($('.container'));
        /*<div class=\"test\" id=\"test2\">LEFT</div><div class=\"test\" id=\"test3\">RIGHT</div><div class=\"test\" id=\"test4\">UP</div><div class=\"test\" id=\"test5\">DOWN</div>*/

        getNext();

        $('#test1').click(function() {
            $('#test1').html("RESET");
            initNumbers();
            getNext();
            transData();
        });
        $('#test2').click(function() {
            initNumbers();
            transData();
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
        */
    });


    var startx = 0;
    var starty = 0;
    var endx = 0;
    var endy = 0;

    document.addEventListener('touchstart', function(event) {
        startx = event.touches[0].pageX;
        starty = event.touches[0].pageY;
    });

    document.addEventListener('touchend', function(event) {
        endx = event.changedTouches[0].pageX;
        endy = event.changedTouches[0].pageY;

        deltaX = startx - endx;
        deltaY = starty - endy;

        if (Math.abs(deltaX) + Math.abs(deltaY) < $g) {
            //Not a move

        } else if (Math.abs(deltaX) > Math.abs(deltaY)) {
            //Hov
            if (deltaX > 0) {
                //left
                gridMove("left");
            } else {
                //right
                gridMove("right");
            }
        } else {
            //Vert
            if (deltaY > 0) {
                gridMove("up");
            } else {
                gridMove("down");
            }

        }
    });

    $(document).keydown(function(event) {
        if (event.which == 38)
            gridMove("up");
        if (event.which == 40)
            gridMove("down");
        if (event.which == 37)
            gridMove("left");
        if (event.which == 39)
            gridMove("right");
        if (event.which == 32 || event.which == 82) {
            initNumbers();
            transData();
        }
    });

    //FUNCTIONS====================================================================

    function initGrid() {

        if (!$('#grid').size()) {
            $("<div id =\"grid\" class=\"grid\"></div>").appendTo($('div.container')).hide();
        }

        //Determine grid size and cell size
        $g = 0.20 * (Math.min($(window).height(), $(window).width()));
        $edge = $(window).height() - $(window).width();

        if ($edge > 0) {
            $('#grid').css({
                'margin-top': 0.8 * $edge,
                'margin-left': 0.5 * $g,
                'width': 4 * $g,
                'height': 4 * $g
            });
        } else {
            $('#grid').css({
                'margin-top': 0.5 * $g,
                'margin-left': Math.abs(0.5 * $edge),
                'width': 4 * $g,
                'height': 4 * $g
            });
        }

    }

    function initCell() {
        $("<div class=\"row r1\"><span class=\"cell r1 c1\"></span><span class=\"cell r1 c2\"></span><span class=\"cell r1 c3\"></span><span class=\"cell r1 c4\" ></span></div><div class=\"row r2\"><span class=\"cell r2 c1\"></span><span class=\"cell r2 c2\"></span><span class=\"cell r2 c3\"></span><span class=\"cell r2 c4\" ></span></div><div class=\"row r3\"><span class=\"cell r3 c1\"></span><span class=\"cell r3 c2\"></span><span class=\"cell r3 c3\"></span><span class=\"cell r3 c4\" ></span></div><div class=\"row r4\"><span class=\"cell r4 c1\"></span><span class=\"cell r4 c2\"></span><span class=\"cell r4 c3\"></span><span class=\"cell r4 c4\" ></span></div>")
            .appendTo($('div.grid'));
        $('.cell').css({
            'margin': (0.1 * $g),
            'height': 0.8 * $g,
            'width': 0.8 * $g,
            'display': 'block',
            'position': 'absolute'
        });
        $('span.c2').css({
            'left': $g
        });
        $('span.c3').css({
            'left': 2 * $g
        });
        $('span.c4').css({
            'left': 3 * $g
        });
    }

    function transData() {
        //每一格根据值的变化改变颜色
        for (var i = 0; i < 16; i += 1) {
            $('.cell').eq(i).text(gridNow[i]).attr("val", gridNow[i]).css({
                'font-size': 0.4 * $g,
                'left': i % 4 * $g,
                'top': Math.floor(i / 4) * $g
            });

        }
        $('.cell').not('[val="0"]').css({
            "background-color": "#fff",
            "color": "#000",
            "display": "inline-block",
            'box-shadow': '5px 5px 1px #999999'
        });
        $('[val="0"]').css({
            "display": "none"
        });
        $('[val="1"]').css({
            "background-color": "#7EDAFF",
            "color": "#FFF",
            'box-shadow': '5px 5px 1px #4488ee'
        });
        $('[val="2"]').css({
            "background-color": "#FF6F8A",
            "color": "#FFF",
            'box-shadow': '5px 5px 1px #cc4477'
        });
    }

    function gridMove(direction) {
        gridBK = gridNow;
        var newStep = move(gridNow, direction);
        gridNow = newStep.grid;
        if (gridBK.join() !== gridNow.join()) {
            gridNow[newStep.addposition] = $next;

            setTimeout(transData(), 400); //传递变化量
            getNext();
        }
        console.log(gridBK.slice(0, 4) + " ==> " + gridNow.slice(0, 4) + "\n" + gridBK.slice(4, 8) + " ==> " + gridNow.slice(4, 8) + "\n" + gridBK.slice(8, 12) + " ==> " + gridNow.slice(8, 12) + "\n" + gridBK.slice(12) + " ==> " + gridNow.slice(12));
        //moveAnimation(direction);//移动动画效果

        if (isGameOver()) {
            $('#test1').html("GameOver");
        } else {
            $('#test1').html("RESET");
        }

    }

    function addNew(direction) {
        return null
    }

    function isMoved(a, b) {
        var judge = 0;
        for (var i = 0; i < 16; i += 1) {
            judge += a[i] - b[i];
            if (judge > 0)
                return true;
        }

        return false;
    }

    function isGameOver(g) {
        var t = g || gridNow,
            a = (t === move(t, 'up', 1).grid),
            b = (t === move(t, 'right', 1).grid),
            c = (t === move(t, 'down', 1).grid),
            d = (t === move(t, 'left', 1).grid);

        //console.log("isGameOver:" + a + b + c + d);

        if (a && b && c && d) {
            return true;
        } else return false;

    }

    function getNext() {
        var tempNext = parseInt(Math.random() * 4);
        var countOne = gridNow.reduce(function(x, y) { if (y == 1) { return x + 1 } else return x }, 0),
            countTwo = gridNow.reduce(function(x, y) { if (y == 2) { return x + 1 } else return x }, 0);
        var i;
        var gridJoined = [].concat(gridNow);
        if (tempNext < 3) {
            $next = tempNext + 1;
        } else {
            $next = 1.5;
            for (i = 0; i < 0.4; i = Math.random()) {
                $next = $next * 2;
            }
        }

        if (countOne > countTwo + 2)
            $next = 2;
        if (countOne < countTwo - 2)
            $next = 1;

        gridJoined.sort(function(a, b) {
            return a - b;
        });

        if ($next > gridJoined[15]) $next = gridJoined[15];
        $('#next').html($next);
    }

    function resetArray(array) {
        for (var i = 0; i < array.length; i += 1) {
            array[i] = 0;
        }
    }

    function moveAnimation(D) {
        //if(!d||d) return 0;
        //
        var x = 0;
        var y = 0;
        var i, j;
        //    console.log(cellMoving);
        if (D == "left") {
            for (i = 0; i < 4; i += 1) {
                for (j = 0; j < 4; j += 1) {
                    if (cellMoving[i][j]) {
                        $('.cell').eq((j * 4) + i).css({
                            left: $g * (i % 4 + 1)
                        }).animate({
                            left: $g * (i % 4),
                            color: 'red',
                        }, 300);
                    }
                }
            }
        } else if (D == "right") {
            for (i = 0; i < 4; i += 1) {
                for (j = 0; j < 4; j += 1) {
                    if (cellMoving[i][j]) {
                        $('.cell').eq((j * 4) + i + 1).css({
                            left: $g * (i % 4 - 1)
                        }).animate({
                            left: $g * (i % 4),
                            color: 'red',
                        }, 300);
                    }
                }
            }
        } else if (D == "up") {
            y--;
            x = 0;
        } else if (D == "down") {
            y += 1;
            x = 0;
        }
        /*
        for(var i=0;i<4;i+=1){
                console.log(cellMoving[i]);
            for(var j=0;j<4;j+=1){
                if(cellMoving[i][j]){
                    //var p=i-x;
                    //var q=j+y;
                    $('.cell').eq((j*4)+i).animate({
                        left:$g*(i+x),
                        //top:$g*(j+y),
                        //fontSize:30,
                    },400);
                    //$('.cell').eq(i*4+j).html("nihao");
                }
            }
        }
        */
        /*
        if(cellMoving[0][0]){
            $('.cell').eq(0).animate({
                        top:$g*x,
                        left:$g*y,
                        //fontSize:30,
                    },400);
        }
        */
    }



}
$(document).ready(main3);