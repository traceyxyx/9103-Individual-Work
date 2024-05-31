// Define a class named BigRectangle for creating and displaying large rectangles
class BigRectangle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.initialColor = color; // 初始颜色，用于重置
    this.baseX = x;
    this.baseY = y;
    this.baseWidth = width;
    this.baseHeight = height;
  }

  // Method to resize the rectangle based on the new canvas size
  resize(canvasSize) {
    this.x = this.baseX * canvasSize;
    this.y = this.baseY * canvasSize;
    this.width = this.baseWidth * canvasSize;
    this.height = this.baseHeight * canvasSize;
  }
   
  // Method to display the rectangle
  display() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.width, this.height);}

      // 重置颜色为初始颜色的方法
  resetColor() {
    this.color = this.initialColor;
  }
  
}

let bigRectangles = []

function mapToColorIndex(freqValue) {
  return Math.floor(map(freqValue, 0, 255, 0, colors.length - 1));
}

// Define color variables in hexadecimal format
let ww = '#EBCF14';
let dd = '#A53A32';
let bb = '#39468C';
let gg = '#D8D6C7';

let song;
let fft;
let numBins = 128;
let smoothing = 0.8;
let button; 
let buttonLabel = 'Night'
let isButtonPressed = false;


// 颜色数组，可以根据需要添加更多颜色
let colors =['#0388A6','#EBCF14', '#A53A32', '#39468C', '#D8D6C7', '#F20530','#401019','#D99962', '#04ADBF' ];


// Load sound file before setup() function runs
function preload() {
  song = loadSound("assets/meditation_guitar.wav");
}

// The setup function to initialize the canvas and create rectangle objects
function setup() {
  let canvasSize = min(windowWidth, windowHeight);
  createCanvas(canvasSize, canvasSize);

  fft = new p5.FFT(smoothing, numBins);
  song.connect(fft);

  button = createButton(buttonLabel);
  button.position(width, height/2);
  button.mousePressed(togglePlaying);

  
  //————————————————————BIG RECT SECTION——————————————————

  // Set big rectangle, Layer them on the canvas from largest to smallest.
  bigRectangles.push(new BigRectangle(0.868, 0.22, 0.066, 0.066, dd));
  bigRectangles.push(new BigRectangle(0.648, 0.198, 0.088, 0.165, bb));
  bigRectangles.push(new BigRectangle(0.087, 0.66, 0.066, 0.066, bb));
  bigRectangles.push(new BigRectangle(0.154, 0.770, 0.088, 0.088, ww));
  bigRectangles.push(new BigRectangle(0.185, 0.793, 0.022, 0.022, gg));
  bigRectangles.push(new BigRectangle(0.846, 0.666, 0.066, 0.066, bb));
  bigRectangles.push(new BigRectangle(0.846, 0.732, 0.066, 0.033, ww));
  bigRectangles.push(new BigRectangle(0.846, 0.765, 0.066, 0.035, dd));
  bigRectangles.push(new BigRectangle(0.154, 0.088, 0.088, 0.022, ww));
  bigRectangles.push(new BigRectangle(0.868, 0.21, 0.066, 0.066, dd));
  bigRectangles.push(new BigRectangle(0.648, 0.198, 0.088, 0.165, bb));
  bigRectangles.push(new BigRectangle(0.352, 0.374, 0.065, 0.187, ww));
  bigRectangles.push(new BigRectangle(0.692, 0.462, 0.088, 0.1, dd));
  bigRectangles.push(new BigRectangle(0.176, 0.358, 0.044, 0.088, ww));
  bigRectangles.push(new BigRectangle(0.286, 0.07, 0.066, 0.11, dd));
  bigRectangles.push(new BigRectangle(0.176, 0.066, 0.044, 0.11, dd));
  bigRectangles.push(new BigRectangle(0.286, 0.154, 0.066, 0.028, gg));
  bigRectangles.push(new BigRectangle(0.3, 0.099, 0.033, 0.033, gg));
  bigRectangles.push(new BigRectangle(0.352, 0.44, 0.066, 0.022, gg));
  bigRectangles.push(new BigRectangle(0.352, 0.487, 0.066, 0.044, gg));
  bigRectangles.push(new BigRectangle(0.176, 0.11, 0.044, 0.022, gg));
  bigRectangles.push(new BigRectangle(0.187, 0.396, 0.022, 0.022, gg));
  bigRectangles.push(new BigRectangle(0.286, 0.456, 0.044, 0.11, bb));
  bigRectangles.push(new BigRectangle(0.286, 0.456, 0.044, 0.022, ww));
  bigRectangles.push(new BigRectangle(0.297, 0.5, 0.022, 0.022, ww));
  bigRectangles.push(new BigRectangle(0.648, 0.264, 0.088, 0.066, dd));
  bigRectangles.push(new BigRectangle(0.67, 0.275, 0.044, 0.033, ww));
  bigRectangles.push(new BigRectangle(0.714, 0.502, 0.044, 0.033, gg));
  bigRectangles.push(new BigRectangle(0.692, 0.58, 0.088, 0.04, gg));
  bigRectangles.push(new BigRectangle(0.846, 0.502, 0.105, 0.04, ww));
  bigRectangles.push(new BigRectangle(0.888, 0.502, 0.022, 0.04, dd));
  bigRectangles.push(new BigRectangle(0.088, 0.22, 0.045, 0.045, bb));
  bigRectangles.push(new BigRectangle(0.89, 0.11, 0.06, 0.047, bb));
  bigRectangles.push(new BigRectangle(0.154, 0.265, 0.088, 0.075, ww));
  bigRectangles.push(new BigRectangle(0.181, 0.287, 0.035, 0.035, gg));
  bigRectangles.push(new BigRectangle(0.381, 0.946, 0.066, 0.044, dd));


  // Resize all big rectangles to fit the current canvas size
  bigRectangles.forEach(rectangle => rectangle.resize(canvasSize));

}

  
  //————————————————————LINES AND ROWS——————————————————
// The draw function that gets called repeatedly to draw the content on the canvas
function drawOriginal() {
  // Set canvas size and clear the background
  let canvasSize = min(windowWidth, windowHeight);
  resizeCanvas(canvasSize, canvasSize);
  background(255);

  // Define the size ratio of small squares to the canvas
  let rectWidth = canvasSize * 0.022;
  let rectHeight = canvasSize * 0.02;


//Draw rows and columns
  translate(0, canvasSize * 0.56);
  noStroke();

  //lower half rows
  drawRow(0, 0, rectWidth, rectHeight,
    [ww, ww, gg, bb, ww, ww, bb, ww, ww, ww, bb, ww, gg, ww, dd, ww, ww, dd,
      gg, gg, dd, ww, ww, gg, ww, gg, ww, ww, ww, dd, ww, bb, gg, gg, bb, ww, ww, dd,
      ww, ww, ww, bb, gg, dd, ww, ww]);
  drawRow(0, canvasSize * 0.06, rectWidth, rectHeight,
    [ww, ww, gg, dd, ww, ww, bb, ww, ww, gg, ww, dd, ww, ww, gg, ww, ww, bb, ww,
      ww, dd, ww, ww, bb, ww, ww, gg, ww, gg, ww, ww, gg, ww, bb, ww, bb, ww,
      ww, bb, ww, ww, ww, dd, gg, ww, dd]);
  drawRow(canvasSize * 0.058, canvasSize * 0.165, rectWidth, rectHeight,
    [dd, ww, dd, ww, ww, gg, ww, bb, ww, ww, gg, ww, ww, bb, ww, dd, ww, bb, ww,
      gg, dd, gg]);
  drawRow(0, canvasSize * 0.125, rectWidth, rectHeight,
    [ww, bb, ww]);
  drawRow(0, canvasSize * 0.216, rectWidth, rectHeight,
    [ww, bb, ww]);
  drawRow(0, canvasSize * 0.295, rectWidth, rectHeight,
    [ww, gg, ww, bb, ww, bb, ww, ww, dd, gg, bb, ww, ww, ww, gg, ww, ww, bb, ww,
      dd, ww, bb, ww, dd, ww, bb, ww, dd, ww, bb, ww, dd, ww, bb, ww, ww, gg, ww,
      ww, dd, ww, ww, bb, ww, ww, dd, ww]);
  drawRow(0, canvasSize * 0.386, rectWidth, rectHeight,
    [ww, ww, gg, dd, ww, ww, bb, ww, ww, dd, ww, bb, ww, ww, ww, gg, ww, gg, ww,
      bb, ww, bb, ww, ww, gg, ww, gg, ww, dd, ww, bb, ww, bb, ww, ww, gg, ww, ww,
      ww, bb, ww, ww, dd, ww, ww, dd, ww]);
  drawRow(0, canvasSize * 0.325, rectWidth, rectHeight,
    [ww, dd, ww]);
  drawRow(canvasSize * 0.838, canvasSize * 0.24, rectWidth, rectHeight,
    [bb, ww, ww, gg, ww, dd]);



  // the first row
  drawRow(0, canvasSize * -0.51, rectWidth, rectHeight*1.02,
    [ww, bb, ww, ww, ww, ww, ww, bb, ww, gg, ww, ww, ww, ww, ww, gg, ww,
      ww, ww, ww, ww, ww, ww, ww, gg, ww, gg, ww, gg, ww, ww, ww, ww, ww,
      gg, gg, ww, ww, ww, gg, bb, ww, gg, ww, bb, gg, ww, gg]);

  // the second row
  drawRow(0, canvasSize * -0.38, rectWidth, rectHeight,
    [ww, dd, ww, ww, ww, bb, ww, gg, gg, dd, ww, gg, ww, bb, ww, gg, ww, ww,
      ww, ww, ww, gg, gg, bb, ww, dd, gg, gg, ww, ww, ww, ww, gg, gg, ww,
      ww, ww, gg, gg, gg, dd, ww, ww, gg, bb, ww]);

  // the third row
  drawRow(0, canvasSize * -0.2, rectWidth, rectHeight,
    [ww, dd, ww, bb, ww, gg, dd, ww, ww, gg, bb, ww, ww, gg, ww, bb, ww, ww, ww,
      dd, ww, ww, bb, ww, ww, dd, ww, bb, ww, ww, dd, ww, ww, ww, dd, ww, ww, ww,
      ww, bb, ww, bb, ww, dd, ww, gg, bb, gg, ww]);

  // the fourth row
  drawRow(0, canvasSize * -0.12, rectWidth, rectHeight,
    [ww, dd, gg, bb, ww, ww, dd, gg, ww, ww, gg, bb, ww, ww, dd, gg, gg, ww, ww, dd,
      gg, gg, gg, gg, bb, ww, ww, gg, ww, gg, ww, ww, dd, gg, ww, gg, ww, ww, bb, ww,
      ww, ww, dd, ww, ww, gg, dd, ww, dd, gg]);


  //column
  translate(0, (-canvasSize * 0.56));

  let rectNewHeight = canvasSize * 0.022;
  //first column from the left
  drawColumn(canvasSize * 0.022, 0, rectWidth, rectNewHeight,
    [ww, bb, gg, ww, ww, bb, ww, ww, dd, ww, ww, bb, ww, dd, ww, gg, dd]);
  //second column from the left
  drawColumn(canvasSize * 0.066, 0, rectWidth, rectNewHeight,
    [dd, ww, gg, ww, ww, dd, ww, gg, ww, gg, ww, ww, gg, ww, ww, ww, ww, bb, ww, ww, bb, dd, ww, ww, gg, bb, ww, ww, dd, ww, gg, dd, gg, dd, ww, dd, gg, ww, ww, bb, gg, ww, gg, dd, ww, ww]);
  //third column from the left
  drawColumn(canvasSize * 0.132, 0, rectWidth, rectNewHeight,
    [ww, ww, ww, gg, gg, bb, ww, ww, bb, ww, bb, bb, ww, dd, gg, gg, bb, gg, bb, gg, dd, ww, bb, ww, ww, bb, ww, ww, bb, ww, ww, bb, bb, dd, ww, bb, gg, dd, ww, bb, gg, bb, gg, bb]);
  //forth column from the left
  drawColumn(canvasSize * 0.242, 0, rectWidth, rectNewHeight,
    [dd, ww, gg, ww, ww, bb, ww, bb, ww, gg, ww, bb, ww, dd, ww, gg, ww, bb, gg, ww, bb, gg, ww, gg, ww, ww, bb, ww, dd, ww, gg, ww, ww, bb, ww, dd, gg, ww, gg, bb, gg, dd, ww, bb, ww, ww]);

  //first column from the right
  drawColumn(canvasSize * 0.95, 0, rectWidth, rectNewHeight,
    [dd, ww, dd, gg, ww, dd, ww, gg, bb, gg, ww, bb, gg, ww, dd, ww, gg, ww, ww, gg, dd, ww, bb, gg, ww, dd, ww, gg, ww, gg, ww, ww, dd, gg, bb, ww, ww, dd, ww, dd, ww, gg, ww, ww, dd, ww, ww]);
  //second column from the right
  drawColumn(canvasSize * 0.912, 0, rectWidth, rectNewHeight,
    [ww, bb, gg, ww, gg, bb, bb]);
  drawColumn(canvasSize * 0.912, canvasSize * 0.179, rectWidth, rectNewHeight*0.98,
    [ww, gg, dd, dd, dd, gg, ww, gg, ww, gg, ww, ww, dd]);
  drawColumn(canvasSize * 0.912, canvasSize * 0.64, rectWidth, rectNewHeight,
    [dd, gg, ww, ww, gg, gg, bb, ww, ww, gg]);
  //third column
  drawColumn(canvasSize * 0.868, 0, rectWidth, rectNewHeight*0.96,
    [dd, gg, bb, gg, ww, dd, ww, gg, ww, gg, dd, dd, dd, gg, ww, bb, ww, dd]);

  //fourth column
  drawColumn(canvasSize * 0.824, 0, rectWidth, rectNewHeight,
    [ww, bb, gg, ww, ww, ww, bb, ww, bb, ww, ww, dd, ww, ww, gg, bb, ww, bb, ww, gg, dd, ww, ww, bb, ww, dd, ww, gg, bb, gg, ww, ww, dd, gg, bb, ww, ww, dd, gg, bb, ww, ww, bb, ww, dd, ww, gg, ww, ww, bb, gg, ww]);

  // fifth column
  drawColumn(canvasSize * 0.52, 0, rectWidth, rectNewHeight,
    [ww, gg, dd, ww, gg, ww, gg, dd, gg, ww, dd, ww, gg, ww, gg, ww, bb])
  drawColumn(canvasSize * 0.52, canvasSize * 0.465, rectWidth, rectNewHeight,
    [gg, ww, ww, bb, ww, ww, dd, gg, ww, ww, gg, bb, ww, gg, ww, gg, ww, ww, dd, gg, ww, dd, gg, ww, ww, bb, gg, ww, ww])

  //sixth column
  drawColumn(canvasSize * 0.472, 0, rectWidth, rectNewHeight,
    [dd, ww, gg, ww, bb, dd, ww, bb, ww, dd, gg, ww, ww, bb, ww, dd, gg, bb, ww, gg, ww, dd, ww, ww, gg, ww, dd, gg, dd, gg, ww, gg, ww, bb, ww, ww, dd, bb, gg, ww, dd, gg, ww]);

  //inner column
  drawColumn(canvasSize * 0.592, canvasSize * 0.465, rectWidth, rectNewHeight,
    [ww, ww, gg, ww, dd, ww, dd]);


  // Display all the big rectangles by iterating over the array and resizing them
  bigRectangles.forEach(rectangle => {
    rectangle.resize(canvasSize);
    rectangle.display();
  });

}



//——————————————EFFECTS AFTER THE SOUND————————————

function drawWithAudioEffects() {
  let canvasSize = min(windowWidth, windowHeight);
  resizeCanvas(canvasSize, canvasSize);
  background(0);

  // 获取频谱数据
  let spectrum = fft.analyze();
  let numBars = spectrum.length; // 频谱数据的长度，即方块的数量

  // 定义方块的尺寸
  let barWidth = canvasSize * 0.022; // 每个方块的宽度
  let barHeight = canvasSize * 0.02; // 每个方块的高度

  // 根据频谱数据绘制动态方块
  for (let i = 0; i < numBars; i++) {
    // 映射频谱值到颜色索引
    let colorIndex = mapToColorIndex(spectrum[i]) % colors.length;
    let color = colors[colorIndex];

    // 映射频谱值到方块的振幅
    let freqValue = spectrum[i];
    let amplitude = map(freqValue, 0, 255, 0, barHeight * 2); // 振幅是方块高度的5倍

    // 计算方块的新位置
    let x = i * barWidth;
    let y = height / 2 + sin(frameCount * 0.02 * i) * amplitude;
    
    let x2 = width / 2 + cos(frameCount * 0.02 * i) * amplitude;
    let y2 = i * barHeight;

    let x3 = i * barWidth;
    let y3 = height / 2 + cos(frameCount * 0.02 * i) * amplitude;

    let x4 = width / 2 + sin(frameCount * 0.02 * i) * amplitude;
    let y4 = i * barHeight;

    // 绘制方块
    fill(color);
    
    rect(x, y+100, barWidth, barHeight);
    rect(x, y+200, barWidth, barHeight);

    rect(x, y+400, barWidth, barHeight);

    rect(x, y-100, barWidth, barHeight);
    rect(x, y-200, barWidth, barHeight);
    

    rect(x2, y2, barWidth, barHeight);
    rect(x2+40, y2, barWidth, barHeight);
    rect(x2-250, y2, barWidth, barHeight);
    rect(x2-350, y2, barWidth, barHeight);
    rect(x2+280, y2, barWidth, barHeight);
    
    
    rect(x3, y3, barWidth, barHeight);
    rect(x3, y3+300, barWidth, barHeight);
    rect(x3, y3-350, barWidth, barHeight);
    
    rect(x4-100, y4, barWidth, barHeight);
    rect(x4-150, y4, barWidth, barHeight);
    rect(x4+200, y4, barWidth, barHeight);
    rect(x4+250, y4, barWidth, barHeight);
    rect(x4+320, y4, barWidth, barHeight);
    
  }

 
}



//————————————————FUNCTIONS BEFORE THE BUTTON————————————————
// Function to draw a row of colored squares with dynamic height
function drawRow(x, y, w, h, colors) {
  noStroke();
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);  // Set the fill color for the square
    rect(x + i * w, y, w, h);  // Draw the square with dynamic height
  }
}

// Function to draw a column of colodd squares
function drawColumn(x, y, w, h, colors) {
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);  // Set the fill color for the square
    rect(x, y + i * h, w, h);  // Draw the square
  }
}

  
  //————————————————————DRAW FUNCTION——————————————————

  function draw() {
    let canvasSize = min(windowWidth, windowHeight);
    resizeCanvas(canvasSize, canvasSize);
    background(255);
  
    
  if (isButtonPressed) {
   
  
    // 根据音频频谱数据调整 bigRectangles 的大小和颜色
    let spectrum = fft.analyze();

    drawWithAudioEffects();
    
    bigRectangles.forEach((rectangle, index) => {
      // 使用第一个频谱值作为示例来更新颜色和大小
      let freqValue = spectrum[0];
      let colorIndex = mapToColorIndex(freqValue) % colors.length;
      let dynamicColor = color(colors[colorIndex]); // 将颜色代码转换为 p5.js 颜色对象

      // 确保 rectangle.color 是一个 p5.js 颜色对象
      if (typeof rectangle.color === 'string') {
        rectangle.color = color(rectangle.color); // 转换已有的颜色代码为 p5.js 颜色对象
      }
      frameRate(30); // 设置帧率为 30 FPS
      // 使用 lerpColor 实现颜色的平滑过渡
      rectangle.color = lerpColor(rectangle.color, dynamicColor, 0.05);
    
      // 更新矩形的大小
      let dynamicScale = map(freqValue, 0, 255, 0.5, 2); // 根据频谱值调整缩放比例
      rectangle.width = rectangle.baseWidth * dynamicScale * canvasSize;
      rectangle.height = rectangle.baseHeight * dynamicScale * canvasSize;

      // 确保矩形大小不超过画布大小
      rectangle.width = min(rectangle.width, canvasSize * 0.5);
      rectangle.height = min(rectangle.height, canvasSize * 0.5);

   
    });

    // 绘制更新后的 bigRectangles
    bigRectangles.forEach(rectangle => {
      rectangle.display();
    });
  } else {
      // 如果按钮未被按下，绘制原始画面
      drawOriginal();
    }
  
    // 无论按钮状态如何，都绘制大矩形
    bigRectangles.forEach(rectangle => {
      rectangle.display();
    });
  }
  
  function togglePlaying() {
    if (song.isPlaying()) {
      song.pause(); // 暂停音乐
      isButtonPressed = false;
      button.html("Night");
      resetBigRectangles(); // 重置 bigRectangles 的状态
    } else {
      song.play(); // 播放音乐
      isButtonPressed = true;
      button.html("Day");
    }
  }
  
  // 重置 bigRectangles 状态的函数
  function resetBigRectangles() {
    bigRectangles.forEach(rectangle => {
      rectangle.resetColor(); // 重置颜色
      rectangle.width = rectangle.baseWidth; // 重置宽度
      rectangle.height = rectangle.baseHeight; // 重置高度
      // 如果需要，可以添加更多重置属性的代码
    });
  }
  
  //————————————————————WINDOW SIZE——————————————————
// Adjust canvas size when window is resized
function windowResized() {
  let canvasSize = min(windowWidth, windowHeight);
  resizeCanvas(canvasSize, canvasSize);
  draw(); // ddraw the canvas after resizing
}