var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 5;
ctx.rect(150, 143, 430, 200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.linewidth = 4;
ctx.arc(240, 200, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.linewidth = 2;
ctx.arc(330, 200, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "red";
ctx.linewidth = 2;
ctx.arc(420, 200, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.linewidth = 2;
ctx.arc(285, 240, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "green";
ctx.linewidth = 2;
ctx.arc(375, 240, 40, 0, 2 * Math.PI);
ctx.stroke();