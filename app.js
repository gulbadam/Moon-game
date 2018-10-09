(function(){
    var canvas, ctx, w, h, player1X, player2X, playerY, radius;
    function init() {
        canvas = document.getElementById('moonWarsCanvas');
        ctx = canvas.getContext('2d');
        w = canvas.width;
        h = canvas.height;
    }
    init();
}());