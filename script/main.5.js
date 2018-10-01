function main3() {
    //'use strict';
    var $next = 0,
        $g = 0,
        $edge = 0,
        gridNow = [],
        gridBK = [],
        cellMoving = [];

    setInterval(sizeAdapt, 1000);
    var initNumbers = function() {
        for (var i = 0; i < 16; i += 1) {
            gridNow[i] = parseInt(Math.floor(Math.random() * 4));
            cellMoving[i] = 0;
        }
        gridBK = gridNow;
    };
    initNumbers();

    $('.starter').click(getStart);

    $('#goFS').click(function() {
        toggleFullScreen();
    })

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
        sizeAdapt()
    }

    function initCell() {
        $("<div class=\"row r1\"><span class=\"cell r1 c1\"></span><span class=\"cell r1 c2\"></span><span class=\"cell r1 c3\"></span><span class=\"cell r1 c4\" ></span></div><div class=\"row r2\"><span class=\"cell r2 c1\"></span><span class=\"cell r2 c2\"></span><span class=\"cell r2 c3\"></span><span class=\"cell r2 c4\" ></span></div><div class=\"row r3\"><span class=\"cell r3 c1\"></span><span class=\"cell r3 c2\"></span><span class=\"cell r3 c3\"></span><span class=\"cell r3 c4\" ></span></div><div class=\"row r4\"><span class=\"cell r4 c1\"></span><span class=\"cell r4 c2\"></span><span class=\"cell r4 c3\"></span><span class=\"cell r4 c4\" ></span></div>")
            .appendTo($('div.grid'));
        sizeAdapt()
    }

    function transData() {
        //每一格根据值的变化改变颜色
        for (var i = 0; i < 16; i += 1) {
            $('.cell').eq(i).text(gridNow[i]).attr("val", gridNow[i])
        }
        $('.cell').not('[val="0"]').css({
            "background-color": "#fff",
            "color": "#000",
            'opacity': 1,
            'box-shadow': '5px 5px 1px #999999'
        });
        $('[val="0"]').css({
            'opacity': 0,
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
        var newStep = move(gridNow, direction, 0);
        gridNow = newStep.grid;
        if (gridBK.join() !== gridNow.join()) {
            if (gridNow[newStep.addposition] === 0) gridNow[newStep.addposition] = $next;

            setTimeout(transData(), 2000); //传递变化量
            getNext();
        }
        console.log(direction);
        console.log(gridBK.slice(0, 4) + " ==> " + gridNow.slice(0, 4) + "\n" + gridBK.slice(4, 8) + " ==> " + gridNow.slice(4, 8) + "\n" + gridBK.slice(8, 12) + " ==> " + gridNow.slice(8, 12) + "\n" + gridBK.slice(12) + " ==> " + gridNow.slice(12));
        //moveAnimation(direction);//移动动画效果
        if (isGameOver(gridNow)) {
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
            a = (t.join([]) === move(t, 'up').grid.join([])),
            b = (t.join([]) === move(t, 'right').grid.join([])),
            c = (t.join([]) === move(t, 'down').grid.join([])),
            d = (t.join([]) === move(t, 'left').grid.join([]));
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

    function cellMerge(a, b) {
        if (a + b === 0) return [0, 1];
        if (a === 0 && b != 0) return [b, 1];
        if (a + b === 3 && b) return [3, 1];
        if (a === b && a + b > 4) return [a + b, 1];
        return [a, 0];
    }

    function rotateClock(g, time) {
        if (g.length != 16 || time == 0) return g.slice(0, 16);
        if (time > 0) {
            newGrid = rotateClock([g[12], g[8], g[4], g[0], g[13], g[9], g[5], g[1], g[14], g[10], g[6], g[2], g[15], g[11], g[7], g[3]], --time);
            g = [].concat(newGrid);
        }
        return g;
    }

    function move(g, direct, testing) {
        function showLog(Message) { if (testing) return console.log(Message) }
        var moved = [],
            gNew = [],
            r = 0;
        if (direct == 'up') r = 1;
        if (direct == 'right') r = 2;
        if (direct == 'down') r = 3;

        g = rotateClock(g, 4 - r);

        for (var i = 0; i < 16; i++) {
            if (i % 4 === 0) {
                gNew[i] = cellMerge(g[i], g[i + 1])[0];
                moved[i] = cellMerge(g[i], g[i + 1])[1];
            } else if (i % 4 === 3) {
                gNew[i] = moved[i - 1] ? 0 : g[i];
                moved[i] = moved[i - 1] || 0;
            } else if (moved[i - 1] == 1) {
                gNew[i] = g[i + 1];
                moved[i] = 1;
            } else {
                gNew[i] = cellMerge(g[i], g[i + 1])[0];
                moved[i] = cellMerge(g[i], g[i + 1])[1];
                if (g[i] == 0) moved[i] = 1;
                if (g[i] !== 0 && g[i + 1] == 0) moved[i] = 0;
            }
        }
        for (var j = 3, s = []; j < 16; j += 4) {
            if (moved[j]) s.push(j);
        }
        showLog("POSITION:" + moved[3] + moved[7] + moved[11] + moved[15] + "," + s.length);
        showLog("akjwhdgakwjdhg : " + Math.floor(Math.random() * s.length));
        var t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        t[s[Math.floor(Math.random() * s.length)]] = 1;
        t = rotateClock(t, r);
        return {
            grid: rotateClock(gNew, r),
            addposition: (t.join([]).split('1')[0].length)
        }
    }

    function sizeAdapt() {
        $g = 0.20 * (Math.min($(window).height(), $(window).width()));
        $edge = $(window).height() - $(window).width();
        $('html').css({
            'font-size': 0.02 * (Math.min($(window).height(), $(window).width()))
        });
        //console.log($edge > 0 ? "Virtical" : "Horizotal")
        if ($edge > 0) {
            //console.log("vertical");
            $('.container').css({
                'flex-flow': 'column',
            });
            $('#grid').css({
                'margin-top': 0,
                //'margin-left': '5rem',
                //'margin-right': '5rem',
                'margin': '0 auto',
                //'right': 0,

            });
            $('.header').css({
                'margin-top': 0.5 * $edge,
                'margin-left': "5%",
                'width': '90%',
                'height': '5rem',
                'flex-flow': 'row',
            });
            $('.next').css({
                'height': '5rem',
                'line-height': '5rem'
            })
            $('.test').css({
                'width': '12rem',
                'margin': '1rem',
            })

        } else {
            $('.container').css({
                'flex-flow': 'row',
            });
            $('#grid').css({
                //'margin-top': '5rem',
                //'right': Math.abs(0.45 * $edge)
            });
            $('.header').css({
                'width': '14rem',
                'height': '40rem',
                //'margin-top': '5rem',
                'flex-flow': 'column',
                //'margin-left': Math.abs(0.45 * $edge)
            });
            $('.next').css({
                'height': '12rem',
                'line-height': '12rem'
            });
            $('.test').css({
                //'margin': -0.1 * $edge
            })
        }
    }

    function Animation(direction) {
        for (var i = 0; i < 16; i++) {
            console.log($('.cell:eq(' + i + ')').css('left'))
        }
    }

    function getStart() {
        $("<div class=\"header\"><div class=\"next\">NEXT\:<span id=\"next\">0</span></div><div class=\"test\" id=\"test2\">Test</div><div class=\"test\" id=\"test1\">RESET</div></div>").appendTo($('.container'));
        initGrid();
        initCell();
        transData();
        $('.startset').fadeOut('fast', function() {
            $('#grid').slideDown('slow');
        });
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
    }

    var toggleFullScreen = function() {
        console.log('triggered')
        var doc = window.document;
        var docEl = doc.documentElement;

        var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            requestFullScreen.call(docEl);
        } else {
            cancelFullScreen.call(doc);
        }
    }


}
$(document).ready(main3);