var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.lineWidth = 4;
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.arc(50, 50, 5, 0, Math.PI * 2, false);
ctx.fill();

$('html').mousemove(function(event) {
    $(canvas).offset({
        left: event.pageX,
        top: event.pageY
    });

});