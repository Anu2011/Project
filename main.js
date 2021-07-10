var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update() {
fabric.Image.fromURL("player.png", function(Img){
player_object = Img; 
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y, 
left: player_x
});
canvas.add(player_object);
});
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
    block_image_object = Img; 
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:player_y, 
    left: player_x
    });
    canvas.add(block_image_object);
    });
    }
    window.addEventListener("keydown", my_keydown);
    function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed); 
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift pressed together");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
     document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;   
    }
    if(e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift pressed together");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
     document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;   
    }
    if(keyPressed == '38'){
    
        up();
console.log("up");
    }
    if(keyPressed == '40'){
    
        down();
console.log("down");
    }
    if(keyPressed == '37'){
    
        left();
console.log("left");
    }
    if(keyPressed == '39'){
    
        right();
console.log("right");
    }
    if(keyPressed == '87'){
    
        new_image('https://www.google.com/imgres?imgurl=https%3A%2F%2Fbbts1.azureedge.net%2Fimages%2Fp%2Ffull%2F2020%2F12%2Fb1e1f4b7-8b40-4fa2-bb68-6ef0422c1d3d.jpg&imgrefurl=https%3A%2F%2Fwww.bigbadtoystore.com%2FProduct%2FVariationDetails%2F145288&tbnid=goHKIGyQ3Y34vM&vet=12ahUKEwiJzMrwwtnxAhUan3IEHcgpCRAQMygAegUIARDeAg..i&docid=RBLhtP5naIkySM&w=720&h=540&q=power%20rangers&ved=2ahUKEwiJzMrwwtnxAhUan3IEHcgpCRAQMygAegUIARDeAg');
console.log("a");
    }
    if(keyPressed == '71'){
    
        new_image('https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.sideshow.com%2Fstorage%2Fproduct-images%2F907475%2Fgreen-ranger_mighty-morphin-power-rangers_silo.png&imgrefurl=https%3A%2F%2Fwww.sideshow.com%2Fcollectibles%2Fmighty-morphin-power-rangers-green-ranger-threezero-907475&tbnid=Q35dzr8suSUZuM&vet=12ahUKEwiViJ2rw9nxAhUHjuAKHeLSBmMQMygBegUIARDkAg..i&docid=QjxhjPn68j0pdM&w=480&h=992&q=power%20rangers&hl=en&ved=2ahUKEwiViJ2rw9nxAhUHjuAKHeLSBmMQMygBegUIARDkAg');
console.log("g");
    }
    if(keyPressed == '76'){
    
        new_image('https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F71RFHsNxtuL._AC_SY741_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FMighty-Morphin-Power-Rangers-6-5-Inch%2Fdp%2FB01H04OH16&tbnid=5iqJ72jwiIeOsM&vet=12ahUKEwjay73cw9nxAhUGHN8KHTaCB6gQMygAegUIARCIAg..i&docid=2xbooLIRZz3nmM&w=449&h=741&q=power%20rangers&hl=en&ved=2ahUKEwjay73cw9nxAhUGHN8KHTaCB6gQMygAegUIARCIAg');
console.log("p");
    }
    if(keyPressed == '84'){
    
        new_image('https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F71xQAopYJiL._AC_SL1500_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FPower-Rangers-12IN-MMPR-Ranger%2Fdp%2FB083W4B86T&tbnid=Td8TKelFlHUixM&vet=12ahUKEwi0uYTkxNnxAhXQD1kFHeLoCW8QMygAegUIARDkAg..i&docid=0c2MW7An_jwSjM&w=1107&h=1500&q=power%20rangers&hl=en&ved=2ahUKEwi0uYTkxNnxAhXQD1kFHeLoCW8QMygAegUIARDkAg');
console.log("b");
    }
    if(keyPressed == '82'){
    
        new_image('https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F71oVDoupHcL._AC_SL1500_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FPower-Rangers-12IN-Black-Ranger%2Fdp%2FB083VMRGHR&tbnid=ub8pKPlcLsJGCM&vet=12ahUKEwj6_fmFxdnxAhXvhHIEHWipBzEQMygBegUIARDiAQ..i&docid=_QZAPu3XtqXnSM&w=973&h=1500&q=black%20rangers&hl=en&ved=2ahUKEwj6_fmFxdnxAhXvhHIEHWipBzEQMygBegUIARDiAQ');
console.log("d");
    }
    if(keyPressed == '89'){
    
        new_image('https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.sideshow.com%2Fstorage%2Fproduct-images%2F907473%2Fyellow-ranger_mighty-morphin-power-rangers_silo.png&imgrefurl=https%3A%2F%2Fwww.sideshow.com%2Fcollectibles%2Fmighty-morphin-power-rangers-yellow-ranger-threezero-907473&tbnid=kk7_8U-r2bn6rM&vet=12ahUKEwjyx56pxdnxAhUGhHIEHcjpD8EQMygEegUIARDmAg..i&docid=9Bsc48am7OjDtM&w=480&h=1000&q=Power%20rangers&hl=en&ved=2ahUKEwjyx56pxdnxAhUGhHIEHcjpD8EQMygEegUIARDmAg');
console.log("y");
    }
    }

function up(){
if(player_y >= 0){
player_y = player_y - block_image_height;
console.log("block image height = " + block_image_height);
console.log("When up arrow key is pressed, X = " + player_x + " , Y = " + player_y);
canvas.remove(player_object); 
player_update();
}
}
function down(){
    if(player_y <= 500){
    player_y = player_y + block_image_height;
    console.log("block image height = " + block_image_height);
    console.log("When down arrow key is pressed, X = " + player_x + " , Y = " + player_y);
    canvas.remove(player_object); 
    player_update();
    }
    }
    
    function left(){
    if(player_x >0){
    player_x = player_x - block_image_width;
    console.log("block image width = " + block_image_width);
    console.log("When left arrow key is pressed, X = " + player_x + ", Y = "+ player_y);
    canvas.remove(player_object);
    player_update();
    }
    }

    function right(){
        if(player_x <= 900){
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When right arrow key is pressed, X = " + player_x + ", Y = "+ player_y);
        canvas.remove(player_object);
        player_update();
        }
        }