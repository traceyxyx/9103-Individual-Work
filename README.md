# 9103-Individual-Work

Inspiration:
https://github.com/preziotte/party-mode?tab=readme-ov-file


let song; // 声音文件
let fft; // FFT对象

// 定义初始参数
let phase = 0;
let xSpacing = 20;
let ySpacing = 2 * xSpacing;
let ampAngle = 0;
let frequency = 2;

let button; // 播放/暂停按钮

function preload() {
  // 加载音频文件
  song = loadSound("assets/meditation_guitar.wav");
}

function setup() {
  createCanvas(500, 500);
  noStroke();

  // 创建 FFT 对象
  fft = new p5.FFT();

  // 创建播放/暂停按钮
  button = createButton("Play/Pause");
  button.position(10, height - 40);
  button.mousePressed(togglePlaying); // 按钮点击事件

  // 播放音频文件
  song.loop();
}

function draw() {
  background(0);

  // 获取音频频谱数据
  let spectrum = fft.analyze();

  // 循环绘制波形
  for (let y = -100; y <= height + 100; y += ySpacing) {
    for (let x = 0; x <= width; x += xSpacing) {
      // 计算当前角度
      let angle = map(x, 0, width, 0, TWO_PI);
      
      // 根据频谱数据调整振幅
      let amplitude = map(spectrum[int(x / xSpacing)], 0, 255, -100, 100);
      
      // 根据频谱数据调整色调
      let c = map(spectrum[int(x / xSpacing)], 0, 255, 0, 255);
      fill(c, 100, 100);
      
      // 计算矩形高度
      let h = y + sin(angle * frequency + phase) * amplitude;
      rect(x, h, xSpacing, xSpacing);
    }
  }

  // 更新参数
  ampAngle += 0.001;
  phase += 0.001;
}

function togglePlaying() {
  if (song.isPlaying()) {
    song.pause(); // 暂停音乐
  } else {
    song.loop(); // 播放音乐
  }
}
