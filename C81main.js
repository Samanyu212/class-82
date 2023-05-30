canvas=document.getElementById("canvas1");
ctx=canvas.getContext("2d");
color="red";
line_width=5;

var mouseEvent="empty";
var last_position_x,last_position_y;

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseup";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_x=e.clientX-canvas.offsetLeft;
current_y=e.clientY-canvas.offsetTop;

if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(current_x,current_y,30,0,2*Math.PI);
    ctx.stroke();

}
last_position_x=current_x;
last_position_y=current_y;
}
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}