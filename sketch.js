function setup() {
  createCanvas(windowWidth, windowHeight); //產生畫布
  background(255) //白色
}

function draw() { //每秒畫60次
  background(220);  //灰白色(0黑~255白)
  rectMode(CENTER)
  noFill()//以下不要充滿顏色
  stroke("#003566") //線顏色
  strokeWeight(1) //線粗細
 //宣告變數
 var rect_width = 50 +mouseX/10   //方形寬度
 var bc_width =50 +mouseY/10  //大圓寬度
 var sc_width = 25 +mouseX/10 //小圓
 //for迴圈
  for(let j=0;j<20;j=j+1){ //共20排
    for(let i=0;i<40;i=i+1){
      if(j<5){ //0~4排的顏色
        stroke("#1d3557")
      }else if(j<10){ //5~9排的顏色
        stroke("#457b9d")
      }else{
        stroke("#8ecae6")
      }
      ellipse(25+50*i,25+50*j,bc_width) 
      rect(25+50*i,25+50*j,rect_width) 
      ellipse(50+50*i,50+50*j,sc_width)
    }
  }
  }