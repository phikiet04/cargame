carOne = 1;
carTwo = 2;
var STEP = 10;
var y = 0;
var x = 0;
var x1 = 100;
var x2 = 100;
car1 = document.getElementById('car_1');
car2 = document.getElementById('car_2');
xang1 = document.getElementById('xang1');
xang2 = document.getElementById('xang2');

const log = document.getElementById('log');
document.addEventListener('keyup', logKey);

function logKey(e) {
    console.log(e['key'])
    switch (e['key']) {
        case 'q':
            x += STEP;
            x1 -= 1;
            car1.style.paddingLeft = x + 'px';
            xang1.style.width = x1 + 'px';
            break;
        case 'e':
            y += STEP;
            x2 -= 1;
            car2.style.paddingLeft = y + 'px';
            xang2.style.width = x2 + 'px';
            break;
    }
    if (x == 10000) {
        alert('xe do  chiến thắng');
        repeat();
    } else if (y == 1000) {
        alert('xe vang hiến thắng');
        repeat();
    }
}

function repeat() {
    x = 0;
    y = 0;
    x1 = 100;
    x2 = 100;
    car1.style.paddingLeft = x + 'px';
    car2.style.paddingLeft = y + 'px';
    xang1.style.width = x1 + 'px';
    xang2.style.width = x2 + 'px';
}

function start() {
    red = document.getElementById('red');
    yellow = document.getElementById('yellow');
    green = document.getElementById('green');
    handleRed = setInterval(bgred, 1000);

    function bgred() {
        resetColor()
        red.style.backgroundColor = 'red';
        clearInterval(handleRed);
        handleYellow = setInterval(bgyellow, 1000);
    }

    function bgyellow() {
        resetColor()
        yellow.style.backgroundColor = 'yellow';
        clearInterval(handleYellow);
        handleGreen = setInterval(bggreen, 1000);
    }

    function bggreen() {
        resetColor()
        green.style.backgroundColor = 'green';
        clearInterval(handleGreen);
    }

    function resetColor() {
        red.style.backgroundColor = "white";
        yellow.style.backgroundColor = "white";
        green.style.backgroundColor = "white";
    }
}