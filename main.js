var canvas =new fabric.Canvas("myCanvas");
player_x=30;
player_y=50;

block_imagen_width=30;
block_imagen_height=30;

var player_object = "";
var block_image_object= "";

function player_update ()
{
    fabric.Image.fromURL ("player.png" , function(Img) {
        player_object - Img;
        
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
	    player_object.set({
	    top:player_y,
	    left:player_x
	    });
	    canvas.add(player_object);
        });
}
windows.addEventListener ("keydown" , key_down);

function key_down (s)
{
    keyPressed=s.keyCode;
    if(e.shiftKey == true && keyPressed == '80')
{
	console.log("Se presiona p y shift al mismo tiempo");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("Se presiona m y shift al mismo tiempo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

}
windows.addEventListener ("keyup" , key_up);

function key_down (o)
{
    keyPressed=o.keyCode;
    if(e.shiftKey == true && keyPressed == '80')
{
	console.log("Se presiona p y shift al mismo tiempo");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("Se presiona m y shift al mismo tiempo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}
    if (keyPressed== ´)
}