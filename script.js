//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400
canvas.addEventListener("mousemove",function(evt){
  mouse.x=evt.offsetX
  mouse.y=evt.offsetY
})
var time=200

var mouse= {
  x: 0,
  y: 0
}

function draw(){
  time--  

ctx.clearRect(0,0,400,400)    
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,1)"
  ctx.stroke()


  //Left building//
ctx.fillStyle="#8FB9AA"
ctx.fillRect(50,125,100,225)

ctx.beginPath()
ctx.moveTo(100,50)
ctx.lineTo(150,125)
ctx.lineTo(50,125)
ctx.closePath()
ctx.fill()

 //outline//
ctx.beginPath()
ctx.moveTo(100,50)
ctx.lineTo(150,125)
ctx.lineTo(150,350)
ctx.lineTo(50,350)
ctx.lineTo(50,125)
ctx.closePath()
ctx.stroke()


ctx.beginPath()
ctx.moveTo(125,350)
ctx.lineTo(125,300)
ctx.lineTo(75,300)
ctx.lineTo(75,350)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(125,310)
ctx.lineTo(75,310)
ctx.stroke()

  //Middle building//
ctx.fillStyle="#FFDFD3"
ctx.fillRect(150,200,100,150)
ctx.fillRect(160,180,80,20)

ctx.beginPath()
ctx.moveTo(200,150)
ctx.lineTo(240,180)
ctx.lineTo(160,180)
ctx.closePath()
ctx.fill()

//outline//
ctx.beginPath()
ctx.moveTo(200,150)
ctx.lineTo(240,180)
ctx.lineTo(240,200)
ctx.lineTo(250,200)
ctx.lineTo(250,350)
ctx.lineTo(150,350)
ctx.lineTo(150,200)
ctx.lineTo(160,200)
ctx.lineTo(160,180)
ctx.closePath()
ctx.stroke()

ctx.beginPath()
ctx.moveTo(225,350)
ctx.lineTo(225,290)
ctx.lineTo(175,290)
ctx.lineTo(175,350)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(200,290)
ctx.lineTo(200,350)
ctx.stroke()

  //Right building//
ctx.fillStyle="#E0BBE4"
ctx.fillRect(250,250,100,100)
ctx.fillRect(275,240,50,50)

ctx.beginPath()
ctx.arc(300,240,25,Math.PI*2,Math.PI,true)
ctx.closePath()
ctx.fillStyle="#304D63"
ctx.fill()

//outline//
ctx.beginPath()
ctx.moveTo(350,350)
ctx.lineTo(250,350)
ctx.lineTo(250,250)
ctx.lineTo(275,250)
ctx.lineTo(275,240)
ctx.arc(300,240,25,Math.PI*2,Math.PI,true)
ctx.lineTo(325,240)
ctx.lineTo(325,250)
ctx.lineTo(350,250)
ctx.closePath()
ctx.stroke()

ctx.beginPath()
ctx.moveTo(325,350)
ctx.lineTo(325,310)
ctx.lineTo(275,310)
ctx.lineTo(275,350)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(325,320)
ctx.lineTo(275,320)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(300,320)
ctx.lineTo(300,350)
ctx.stroke()

//windows//
ctx.fillStyle="#304D63"
ctx.fillRect(80,120,40,30)
ctx.strokeRect(80,120,40,30)
ctx.beginPath()
ctx.moveTo(100,120)
ctx.lineTo(100,150)
ctx.stroke()
ctx.beginPath()
ctx.moveTo(80,135)
ctx.lineTo(120,135)
ctx.stroke()

ctx.fillRect(180,225,40,50)
ctx.strokeRect(180,225,40,50)
ctx.beginPath()
ctx.moveTo(200,225)
ctx.lineTo(200,275)
ctx.stroke()
ctx.beginPath()
ctx.moveTo(180,250)
ctx.lineTo(220,250)
ctx.stroke()

ctx.fillRect(290,265,20,30)
ctx.strokeRect(290,265,20,30)
ctx.beginPath()
ctx.moveTo(300,265)
ctx.lineTo(300,295)
ctx.stroke()
ctx.beginPath()
ctx.moveTo(290,280)
ctx.lineTo(310,280)
ctx.stroke()

//balloon//
  
let by=time

ctx.beginPath()
ctx.arc(275,by,30,0,2*Math.PI)
ctx.stroke()
ctx.fillStyle="#8FB9AA"
ctx.fill()

ctx.beginPath()
ctx.moveTo(275,by+30)
ctx.lineTo(270,by+35)
ctx.lineTo(280,by+35)
ctx.closePath()
ctx.fillStyle="#8FB9AA"
ctx.fill()
ctx.stroke()

ctx.beginPath()
ctx.moveTo(275,by+35)
ctx.lineTo(275,by+75)
ctx.stroke()
  
 //grass

  ctx.beginPath()
  ctx.moveTo(25,350)
  ctx.lineTo(25,300-mouse.y/5)
  ctx.strokeStyle="green"
  ctx.stroke()
  
    ctx.beginPath()
  ctx.moveTo(40,350)
  ctx.lineTo(40,310-mouse.y/5)
  ctx.strokeStyle="green"
  ctx.stroke()
  
    ctx.beginPath()
  ctx.moveTo(360,350)
  ctx.lineTo(360,330-mouse.y/5)
  ctx.strokeStyle="green"
  ctx.stroke()
  
      ctx.beginPath()
  ctx.moveTo(375,350)
  ctx.lineTo(375,290-mouse.y/5)
  ctx.strokeStyle="green"
  ctx.stroke()
}
//draw()
setInterval(draw,30)