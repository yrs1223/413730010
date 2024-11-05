let font;
let points = [];
let angle = 0
let r  =10

function preload(){

    font = loadFont("fonts/NotoSansTC-VariableFont_wght.ttf")
}
function setup() {
  createCanvas(windowWidth, windowHeight); //產生畫布
  angleMode(DEGREES)
  background("#caf0f8") //白色

  points = font.textToPoints("BEOMGYU",-300,80,200, {
     sampleFactor:0.1
});
fill("#03045e")
 for (let i=0; i<points.length-1; i++){
    ellipse(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),10)
    stroke("#778da9")
    strokeWeight(2)
    line(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),points[i+1].x,points[i+1].y)
}
angle = angle+10
}

function draw(){
background("#caf0f8")
translate(width/2,height/2)
rotate(frameCount%365)
 for(let i=0; i<points.length-1;i++){
  stroke("#778da9")
  strokeWeight(2)
  line(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),points[i+1].x,points[i+1].y)
 }
 angle =angle+10
}

