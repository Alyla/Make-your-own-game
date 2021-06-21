var w=createSprite(40,32,20,80);
w.shapeColor="seagreen";
var w1=createSprite(100,32,20,80);
w1.shapeColor="seagreen";
var w2=createSprite(162,32,20,80);
w2.shapeColor="gold";
var w3=createSprite(223,32,20,80);
w3.shapeColor="gold";
var w4=createSprite(282,32,20,80);
w4.shapeColor="seagreen";
var w5=createSprite(340,32,20,80);
w5.shapeColor="seagreen";

var w6=createSprite(70,140,20,80);
w6.shapeColor="seagreen";
var w7=createSprite(130,140,20,80);
w7.shapeColor="seagreen";
var w8=createSprite(194,140,20,80);
w8.shapeColor="gold";
var w9=createSprite(252,140,20,80);
w9.shapeColor="seagreen";
var w10=createSprite(313,140,20,80);
w10.shapeColor="seagreen";

var v=createSprite(40,250,20,80);
v.shapeColor="seagreen";
var v1=createSprite(100,250,20,80);
v1.shapeColor="seagreen";
var v2=createSprite(162,250,20,80);
v2.shapeColor="gold";
var v3=createSprite(223,250,20,80);
v3.shapeColor="gold";
var v4=createSprite(282,250,20,80);
v4.shapeColor="seagreen";
var v5=createSprite(340,250,20,80);
v5.shapeColor="seagreen";

var v6=createSprite(70,360,20,80);
v6.shapeColor="seagreen";
var v7=createSprite(130,360,20,80);
v7.shapeColor="seagreen";
var v8=createSprite(194,360,20,80);
v8.shapeColor="gold";
var v9=createSprite(252,360,20,80);
v9.shapeColor="seagreen";
var v10=createSprite(313,360,20,80);
v10.shapeColor="seagreen";

var gs=createSprite(14,182,20,20);
gs.shapeColor="lightsalmon";

function draw() {
  
  background("black");
  
if (keyDown("RIGHT_ARROW")) {
   gs.velocityX=2;
   gs.velocityY=0;
 }
 if (keyDown("LEFT_ARROW")) {
   gs.velocityX=-2;
   gs.velocityY=0;
 }
 if (keyDown("UP_ARROW")) {
   gs.velocityX=0;
   gs.velocityY=-2;
 }
  if (keyDown("DOWN_ARROW")) {
   gs.velocityX=0;
   gs.velocityY=2;
 }
 
   createEdgeSprites();
gs.bounceOff(edges); 
gs.bounceOff(w);
gs.bounceOff(w1);
gs.bounceOff(w2);
gs.bounceOff(w3);
gs.bounceOff(w4);
gs.bounceOff(w5);
gs.bounceOff(w6);
gs.bounceOff(w7);
gs.bounceOff(w8);
gs.bounceOff(w9);
gs.bounceOff(w10);

gs.bounceOff(v);
gs.bounceOff(v1);
gs.bounceOff(v2);
gs.bounceOff(v3);
gs.bounceOff(v4);
gs.bounceOff(v5);
gs.bounceOff(v6);
gs.bounceOff(v7);
gs.bounceOff(v8);
gs.bounceOff(v9);
gs.bounceOff(v10);

text("try 2 get 2 de nothr end -->", 60,305);



if (gs.x>100){
  var o=createSprite(96,90,20,20);
o.shapeColor="crimson";
gs.bounceOff(o);

}  

if (gs.x>100){
  var o2=createSprite(220,190,20,20);
o2.shapeColor="crimson";
gs.bounceOff(o2);

}  

if (gs.x>100){
  var o3=createSprite(190,305,20,20);
o3.shapeColor="crimson";
gs.bounceOff(o3);

}  
  
  if (gs.x>225){
  var o4=createSprite(312,81,20,20);
o4.shapeColor="crimson";
gs.bounceOff(o4);

}  
  
  if (gs.x>225){
  var o5=createSprite(340,305,20,20);
o5.shapeColor="crimson";
gs.bounceOff(o5);

}  

 if (gs.x>315){
  var o6=createSprite(369,196,20,20);
o6.shapeColor="crimson";
gs.bounceOff(o6);

}  

 if (gs.x>315){
  var o7=createSprite(339,169,20,20);
o7.shapeColor="crimson";
gs.bounceOff(o7);

}  

  drawSprites();
}
