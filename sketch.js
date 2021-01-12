const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var engine, world;
var ball2
var g1,g2,g3,g4;
var dv1,dv2,dv3,dv4,dv5,dv6,dv7
var particles = [];
var plinkos   = [];
var divisions = [];
var divisionHeight =300;
var D
var boy_running
var ball3
var r
var A
function preload(){
    boy_running= loadAnimation("images/walking Frame/walking_1.png","images/walking Frame/walking_2.png","images/walking Frame/walking_3.png","images/walking Frame/walking_4.png")
    ball3=loadImage("1.png")
}
function setup() {
  createCanvas(400,700);
  engine= Engine.create();// world
  world= engine.world;
  D=new Boy(200,500,50,1)
  //D.addAnimation("running",boy_running)
  b=createSprite(200,250,50,50)
  r=new Rain1(200,450,80,80)
  b.addAnimation("running",boy_running)
}
function draw() {
  background(0);  

  Engine.update(engine)
  if (frameCount%2===0){
    particles.push(new Rain(random(30,600),5,5));
  }
 // if (frameCount%10===0){
   // A=new thunder(200,100,60,60)
  //}
  for (var i =0 ;i < particles.length;i++){
    particles[i].display()
  
   }
   D.display()
   drawSprite();
  
}
 