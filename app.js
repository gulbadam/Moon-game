
(function() {
    var canvas, ctx, w, h, player1X, player2X, playerY, radius, backImg, angle1, angle2, currIndex1, currIndex2;
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
    console.log("draw2")
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
    console.log("finis")
}
    init();
}());