
alert("hey")
(function() {
    var canvas, ctx, w, h, player1X, player2X, playerY, radius, backImg;
    function init() {
        console.log("start")
        canvas = document.getElementById('moonWarsCanvas');
        ctx = canvas.getContext('2d');
        w = canvas.width;
        h = canvas.height;
        player1X = w/4;
        player2x = 3*(w/4);
        playerY =  h-27;
        radius = 25;
        addBackground();
        console.log("loaded")
    }
backImg = new Image();
backImg.onload = function() {
    console.log ('Hi ya!!');

ctx.drawImage(backImg, 0, 0, w, h)
drawLayout();
}
function addBackground() {
    console.log ('Hey yo!!');

    backImg.src = 'back.jpeg'
}
function drawLayout() {
   ctx.strokeStyle  = 'black'
}
    init();
}());