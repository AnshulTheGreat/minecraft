var canvas = new fabric.Canvas('myCanvas');

player_x = 10;

player_y = 10;

block_img_width = 30;

block_img_height = 30;

var player_object = "";

var block_image_object = "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top:player_y,left:player_x});
        canvas.add(player_object);
    });
}

function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_img_width);
        block_image_object.scaleToHeight(block_img_height);
        block_image_object.set({top:player_y,left:player_x});
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if(e.shiftKey==true && keypressed=='80'){
        console.log("shift+p pressed");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(e.shiftKey==true && keypressed=='77'){
        console.log("shift+m pressed");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(keypressed == '38'){
        console.log("up");
        player_update()
        up();
    }

    if(keypressed == '40'){
        console.log("down");
        down();
    }

    if(keypressed == '37'){
        console.log("left");
        left();
    }

    if(keypressed == '39'){
        console.log("right");
        right();
    }

    if(keypressed=='87'){
        new_img('wall.jpg');
        console.log("w");
    }
    if(keypressed=='71'){
        new_img('ground.png');
        console.log("g");
    }
    if(keypressed=='76'){
        new_img('light_green.png');
        console.log("l");
    }
    if(keypressed=='84'){
        new_img('trunk.jpg');
        console.log("t");
    }
    if(keypressed=='82'){
        new_img('roof.jpg');
        console.log("r");
    }
    if(keypressed=='89'){
        new_img('yellow_wall.png');
        console.log("y");
    }
    if(keypressed=='68'){
        new_img('dark_green.png');
        console.log("d");
    }
    if(keypressed=='85'){
        new_img('unique.png');
        console.log("u");
    }
    if(keypressed=='67'){
        new_img('cloud.jpg');
        console.log("c");
    }
}