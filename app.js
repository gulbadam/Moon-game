
(function() {
    var canvas, ctx, w, h, player1X, player2X, playerY, radius, backImg, angle1, angle2, currIndex1, currIndex2, turn, team, moveStep, angleStep, dirX, dirY, tempIndex1, tempIndex2, asteroidRadius ;
    function init() {
        console.log("start")
        canvas = document.getElementById('moonWarsCanvas');
        ctx = canvas.getContext('2d');
        w = canvas.width;
        h = canvas.height;
        player1X = w/4;
        player2X = 3*(w/4);
        playerY =  h-27;
        radius = 25;
        angle1 = 0;
        angle2 = Math.PI;
        currIndex1 = {x: 0, y: 0};
        currIndex2 = {x: 0, y: 0};
        tempIndex1 ={x: -10, y: -10};
        tempIndex2 = { x: -10, y: -10 };
        asteroidRadius = 2;
        dirX= 1;
        dirY=1;
        turn = 0;
        team = "none";
        moveStep = 2;
        angleStep = Math.PI/40;
        window.onkeydown = keyEvent;
        addBackground();
        console.log("loaded")
    }
backImg = new Image();
backImg.onload = function() {
    console.log ('Hi ya!!');

ctx.drawImage(backImg, 0, 0, w, h)
drawLayout();
drawPlayer1(player1X, playerY, angle1);
drawPlayer2(player2X, playerY, angle2);
if(!turn && tempIndex1.x!=-10 && tempIndex1.y!=-10) {
    launchAsteroid(tempIndex1);
} else if (turn && tempIndex2.x != -10 && tempIndex2.y != -10){
    launchAsteroid (tempIndex2);
}
}
function addBackground() {
    console.log ('Hey yo!!');
    backImg.src = 'back.jpeg'
}
function drawLayout() {
   ctx.strokeStyle  = 'black';
   ctx.lineWidth=1;
   ctx.strokeRect(0, 0, w, h,);
   ctx.strokeStyle = 'white';
   ctx.lineWidth =4;
   ctx.beginPath();
   ctx.moveTo(w/2, h);
   ctx.lineTo(w/2, h-100);
   ctx.stroke();
}
function drawPlayer1(x, y,  angle) {
    currIndex1.x = x + 35 * Math.cos(angle);
    currIndex1.y = y - 35 * Math.sin(angle);
    ctx.strokeStyle= "#DA0000";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(currIndex1.x, currIndex1.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle='#DA0000';
    ctx.fill();
    }
function drawPlayer2(x, y, angle) {
    currIndex2.x = x + 35 * Math.cos(angle);
    currIndex2.y = y - 35 * Math.sin(angle);
    ctx.strokeStyle = "#004cb3";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(currIndex2.x, currIndex2.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#004cb3';
    ctx.fill();
    }
     function launchAsteroid(index) {
         if (index.x>=(w/2)-2 && index.x<=(w/2)+2 && index.y<=h && index.y>=h-100) {
             dirX = -dirX;
         } else if (index.x < 0) {
             dirX = -dirX;
         } else if (index.x > w) {
             dirX = -dirX;
        } else if ( index.y < 0) {
            dirY = -dirY;
        } else if (index.y > h) {
            turn = 1- turn;
            return;
        }
        if(!turn) {
            tempIndex1.x = index.x + dirX*2*Math.cos(angle1);
            tempIndex1.y = index.y + dirY * 2 * Math.sin(angle1)
        } else{
            tempIndex2.x = index.x + dirX * 2 * Math.cos(angle2);
            tempIndex2.y = index.y + dirY * 2 * Math.sin(angle2)
        }
        ctx.beginPath();
        if(!turn) {
            ctx.arc(tempIndex1.x, tempIndex1.y, asteroidRadius, 0, 2*Math.PI, false )
        }else{
            ctx.arc(tempIndex2.x, tempIndex2.y, asteroidRadius, 0, 2 * Math.PI, false) 
        }
        ctx.fillStyle ="yellow";
        ctx.fill();
        setTimeout(() => {
            addBackground()
        }, 100);


     }
    function keyEvent(e) {
        e.stopImmediatePropagation();
        var keyCode = e.which;
        console.log(keyCode)
        switch (keyCode) {
            case 37 :
                if(!turn) {
                    console.log("running 37")
                    if(player1X - 40 > 0) {
                        player1X = player1X - moveStep;
                        console.log("1x +"+player1X)
                        console.log ('-40 1x');
                        }
                } else {
                    if(player2X - 40 > (w/2)+2) {
                        player2X = player2X - moveStep;
                        console.log ("2x -" + player2X);
                        console.log ('-40 2x');
                    }
                }
                addBackground();
                break;
            case 39:
                if (!turn) {
                    console.log("running 39")
                    if (player1X + 40 < (w/2)-2) {
                        player1X = player1X + moveStep;
                        console.log ("1x ++" + player1X);
                        console.log("+40 1x")
                    }
                } else {
                    if (player2X + 40 < w ) {
                        player2X = player2X + moveStep;
                        console.log("2x +" + player2X)
                        console.log("+40 2x")
                    }
                }
                addBackground();
                break;
            case 38:
                if (!turn) {
                    console.log("running 38")
                    if (angle1 + angleStep < Math.PI) {
                        angle1 = angle1 + angleStep;
                        console.log("angle1 +" + angle1);
                        }
                } else {
                    if (angle2 + angle2 < Math.PI) {
                        angle2 = angle2 + angleStep;
                        console.log("angle2" + angle2)
                        }
                }
                addBackground();
                break;
            case 40:
                if (!turn) {
                    console.log("running 40")
                    if (angle1 - angleStep > 0) {
                        angle1 = angle1 - angleStep;
                        console.log("angle1 +" + angle1);
                    }
                } else {
                    if (angle2 - angle2 > 0) {
                        angle2 = angle2 -  angleStep;
                        console.log("angle2" + angle2)
                    }
                }
                addBackground();
                break;
            case 32:
            launchAsteroid(currIndex1);
                break;
        
            default:
                break;
        }

    }
    init();
}());