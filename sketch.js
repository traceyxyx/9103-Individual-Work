// Define a class named BigRectangle for creating and displaying large rectangles
class BigRectangle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
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
    rect(this.x, this.y, this.width, this.height);
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
let numBins = 64;
let smoothing = 0.4;
let isButtonPressed = false;

// 颜色数组，可以根据需要添加更多颜色
let colors = ['#FFFFFF', '#EBCF14', '#A53A32', '#39468C', '#D8D6C7', '#F20530','#401019','#0388A6', '#D99962', '#04ADBF' ];


// 存储每行和每列的颜色数组
let rowColorsArrays = [
  // ... 将 drawOriginal 函数中的每个 drawRow 调用的颜色数组放入这里 ...
];

let columnColorsArrays = [
  // ... 将 drawOriginal 函数中的每个 drawColumn 调用的颜色数组放入这里 ...
];

// 计算行和列的数量
let numRows = rowColorsArrays.length;
let numColumns = columnColorsArrays.length;
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

  button = createButton("Play/Pause");
  button.position((width - button.width) / 2, height - button.height - 2);
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


function togglePlaying() {
  if (song.isPlaying()) {
    song.pause(); // 暂停音乐
    isButtonPressed = false;
  } else {
    song.play(); // 播放音乐
    isButtonPressed = true;
  }
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

function drawWithAudioEffects() {
  let canvasSize = min(windowWidth, windowHeight);
  resizeCanvas(canvasSize, canvasSize);
  background(255);

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
    let amplitude = map(freqValue, 0, 255, 0, barHeight * 5); // 振幅是方块高度的5倍

    // 计算方块的新位置
    let x = i * barWidth;
    let y = height / 2 + sin(frameCount * 0.02 * i) * amplitude;

    // 绘制方块
    fill(color);
    rect(x, y, barWidth, barHeight);
  }

  // 绘制大矩形
  bigRectangles.forEach(rectangle => {
    rectangle.display();
  });
}




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

  
  //————————————————————BUTTON FUNCTION——————————————————

  function draw() {
    background(255); // 清屏
    
    if (isButtonPressed) {
      drawWithAudioEffects(); // 如果按钮被按下，绘制动态效果
    } else {
      drawOriginal(); // 如果按钮未被按下，绘制原始画面
    }
    
    // 无论按钮状态如何，都绘制大矩形
    bigRectangles.forEach(rectangle => {
      rectangle.display();
    });
  }
  
  
  //————————————————————WINDOW SIZE——————————————————
// Adjust canvas size when window is resized
function windowResized() {
  let canvasSize = min(windowWidth, windowHeight);
  resizeCanvas(canvasSize, canvasSize);
  draw(); // ddraw the canvas after resizing
}