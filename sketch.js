let points = [[0,-6], [8,3], [8,7],[4,9],[0,6],[-4,9],[-8,7],[-8,3],[0,-6]];
let s ="TKU ET";
function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}

function draw() {
  background(255);
  //依滑鼠移動位置縮放圖片之指令
  let zoom = map(mouseY,0,height,0.5,2);
  scale(zoom)
  
  // 文字
  textSize(100)
  noStroke()
  fill("#bde0fe")
  text(s,100,100)

  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  scale(1, -1);  //上下翻轉
  strokeWeight(5)//線條的粗細
  for (l = 1; l<5; l = l+0.5) {//宣告一個指令可以產生多層圖之指令
  for (let i = 0; i < points.length-1; i++) { //從第一點點連成一線，接著第二點與第三點連成一線，以此類推到最後一個點
    
    //顏色宣告的指令
    let clr1=color("#779be7")
    let clr2=color("#f0a6ca")
    
    //當前線段百分比
    let percent=map(i,0,points.length-2,0,1,);
    //當前線段的顏色
    stroke(lerpColor(clr1,clr2,percent));
    line(points[i][0]/l,points[i][1]/l,points[i+1][0]/l,points[i+1][1]/l);
      }
    let clr1=color("#779be7")
    let clr2=color("#f0a6ca")
    //計算最後一條線斷百分比
    let percent=map(points.length-1,0,points.length-2,0,1);
    stroke(lerpColor(clr1,clr2,percent));//執行線條顏色之指令
    //最後一個點與第一個點連成一線  
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線

 }
}