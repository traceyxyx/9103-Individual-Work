


// Define a class named BigRectangle for creating and displaying large rectangles
class BigRectangle {
  constructor(x, y, width, height, color) {
    this.x = x;      // The x-coordinate of the rectangle
    this.y = y;      // The y-coordinate of the rectangle
    this.width = width;  // The width of the rectangle
    this.height = height; // The height of the rectangle
    this.color = color;  // The color of the rectangle
    this.baseX = x;     // Base x-coordinate for resizing
    this.baseY = y;     // Base y-coordinate for resizing
    this.baseWidth = width; // Base width for resizing
    this.baseHeight = height; // Base height for resizing
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
    fill(this.color);  // Set the fill color for the rectangle
    noStroke();        // Remove the stroke (outline) of the shape
    rect(this.x, this.y, this.width, this.height);  // Draw the rectangle
  }
}

let bigRectangles = [];  // Initialize an empty array to store big rectangle objects

// Define color variables in hexadecimal format
let yellow = '#EBCF14';
let red = '#A53A32';
let blue = '#39468C';
let grey = '#D8D6C7';


let song;

let fft;

let numBins = 128;

let smoothing = 0.8;

// Load sound file before setup() function runs
function preload() {
  //audio file from freesound https://freesound.org/people/multitonbits/sounds/383935/?
  song = loadSound("assets/meditation_guitar.wav");
}

// The setup function to initialize the canvas and create rectangle objects
function setup() {
  let canvasSize = min(windowWidth, windowHeight);  // Set the canvas size to the smaller dimension of the window
  createCanvas(canvasSize, canvasSize);            // Create a square canvas


   // Create a new instance of p5.FFT() object
   fft = new p5.FFT(smoothing, numBins);

   song.connect(fft);


  button = createButton("Play/Pause");

  //set the position of the button to the bottom center
  button.position((width - button.width) / 2, height - button.height - 2);

  //We set the action of the button by choosing what action and then a function to run
  //In this case, we want to run the function play_pause when the button is pressed
  button.mousePressed(play_pause);

 
  
  //————————————————————GROUP SECTION——————————————————

  // Set big rectangle, Layer them on the canvas from largest to smallest.
  bigRectangles.push(new BigRectangle(0.868, 0.22, 0.066, 0.066, red));
  bigRectangles.push(new BigRectangle(0.648, 0.198, 0.088, 0.165, blue));
  bigRectangles.push(new BigRectangle(0.087, 0.66, 0.066, 0.066, blue));
  bigRectangles.push(new BigRectangle(0.154, 0.770, 0.088, 0.088, yellow));
  bigRectangles.push(new BigRectangle(0.185, 0.793, 0.022, 0.022, grey));
  bigRectangles.push(new BigRectangle(0.846, 0.666, 0.066, 0.066, blue));
  bigRectangles.push(new BigRectangle(0.846, 0.732, 0.066, 0.033, yellow));
  bigRectangles.push(new BigRectangle(0.846, 0.765, 0.066, 0.035, red));
  bigRectangles.push(new BigRectangle(0.154, 0.088, 0.088, 0.022, yellow));
  bigRectangles.push(new BigRectangle(0.868, 0.21, 0.066, 0.066, red));
  bigRectangles.push(new BigRectangle(0.648, 0.198, 0.088, 0.165, blue));
  bigRectangles.push(new BigRectangle(0.352, 0.374, 0.065, 0.187, yellow));
  bigRectangles.push(new BigRectangle(0.692, 0.462, 0.088, 0.1, red));
  bigRectangles.push(new BigRectangle(0.176, 0.358, 0.044, 0.088, yellow));
  bigRectangles.push(new BigRectangle(0.286, 0.07, 0.066, 0.11, red));
  bigRectangles.push(new BigRectangle(0.176, 0.066, 0.044, 0.11, red));
  bigRectangles.push(new BigRectangle(0.286, 0.154, 0.066, 0.028, grey));
  bigRectangles.push(new BigRectangle(0.3, 0.099, 0.033, 0.033, grey));
  bigRectangles.push(new BigRectangle(0.352, 0.44, 0.066, 0.022, grey));
  bigRectangles.push(new BigRectangle(0.352, 0.487, 0.066, 0.044, grey));
  bigRectangles.push(new BigRectangle(0.176, 0.11, 0.044, 0.022, grey));
  bigRectangles.push(new BigRectangle(0.187, 0.396, 0.022, 0.022, grey));
  bigRectangles.push(new BigRectangle(0.286, 0.456, 0.044, 0.11, blue));
  bigRectangles.push(new BigRectangle(0.286, 0.456, 0.044, 0.022, yellow));
  bigRectangles.push(new BigRectangle(0.297, 0.5, 0.022, 0.022, yellow));
  bigRectangles.push(new BigRectangle(0.648, 0.264, 0.088, 0.066, red));
  bigRectangles.push(new BigRectangle(0.67, 0.275, 0.044, 0.033, yellow));
  bigRectangles.push(new BigRectangle(0.714, 0.502, 0.044, 0.033, grey));
  bigRectangles.push(new BigRectangle(0.692, 0.58, 0.088, 0.04, grey));
  bigRectangles.push(new BigRectangle(0.846, 0.502, 0.105, 0.04, yellow));
  bigRectangles.push(new BigRectangle(0.888, 0.502, 0.022, 0.04, red));
  bigRectangles.push(new BigRectangle(0.088, 0.22, 0.045, 0.045, blue));
  bigRectangles.push(new BigRectangle(0.89, 0.11, 0.06, 0.047, blue));
  bigRectangles.push(new BigRectangle(0.154, 0.265, 0.088, 0.075, yellow));
  bigRectangles.push(new BigRectangle(0.181, 0.287, 0.035, 0.035, grey));
  bigRectangles.push(new BigRectangle(0.381, 0.946, 0.066, 0.044, red));


  // Resize all big rectangles to fit the current canvas size
  bigRectangles.forEach(rectangle => rectangle.resize(canvasSize));

}

// The draw function that gets called repeatedly to draw the content on the canvas
function draw() {
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
    [yellow, yellow, grey, blue, yellow, yellow, blue, yellow, yellow, yellow, blue, yellow, grey, yellow, red, yellow, yellow, red,
      grey, grey, red, yellow, yellow, grey, yellow, grey, yellow, yellow, yellow, red, yellow, blue, grey, grey, blue, yellow, yellow, red,
      yellow, yellow, yellow, blue, grey, red, yellow, yellow]);
  drawRow(0, canvasSize * 0.06, rectWidth, rectHeight,
    [yellow, yellow, grey, red, yellow, yellow, blue, yellow, yellow, grey, yellow, red, yellow, yellow, grey, yellow, yellow, blue, yellow,
      yellow, red, yellow, yellow, blue, yellow, yellow, grey, yellow, grey, yellow, yellow, grey, yellow, blue, yellow, blue, yellow,
      yellow, blue, yellow, yellow, yellow, red, grey, yellow, red]);
  drawRow(canvasSize * 0.058, canvasSize * 0.165, rectWidth, rectHeight,
    [red, yellow, red, yellow, yellow, grey, yellow, blue, yellow, yellow, grey, yellow, yellow, blue, yellow, red, yellow, blue, yellow,
      grey, red, grey]);
  drawRow(0, canvasSize * 0.125, rectWidth, rectHeight,
    [yellow, blue, yellow]);
  drawRow(0, canvasSize * 0.216, rectWidth, rectHeight,
    [yellow, blue, yellow]);
  drawRow(0, canvasSize * 0.295, rectWidth, rectHeight,
    [yellow, grey, yellow, blue, yellow, blue, yellow, yellow, red, grey, blue, yellow, yellow, yellow, grey, yellow, yellow, blue, yellow,
      red, yellow, blue, yellow, red, yellow, blue, yellow, red, yellow, blue, yellow, red, yellow, blue, yellow, yellow, grey, yellow,
      yellow, red, yellow, yellow, blue, yellow, yellow, red, yellow]);
  drawRow(0, canvasSize * 0.386, rectWidth, rectHeight,
    [yellow, yellow, grey, red, yellow, yellow, blue, yellow, yellow, red, yellow, blue, yellow, yellow, yellow, grey, yellow, grey, yellow,
      blue, yellow, blue, yellow, yellow, grey, yellow, grey, yellow, red, yellow, blue, yellow, blue, yellow, yellow, grey, yellow, yellow,
      yellow, blue, yellow, yellow, red, yellow, yellow, red, yellow]);
  drawRow(0, canvasSize * 0.325, rectWidth, rectHeight,
    [yellow, red, yellow]);
  drawRow(canvasSize * 0.838, canvasSize * 0.24, rectWidth, rectHeight,
    [blue, yellow, yellow, grey, yellow, red]);



  // the first row
  drawRow(0, canvasSize * -0.51, rectWidth, rectHeight*1.02,
    [yellow, blue, yellow, yellow, yellow, yellow, yellow, blue, yellow, grey, yellow, yellow, yellow, yellow, yellow, grey, yellow,
      yellow, yellow, yellow, yellow, yellow, yellow, yellow, grey, yellow, grey, yellow, grey, yellow, yellow, yellow, yellow, yellow,
      grey, grey, yellow, yellow, yellow, grey, blue, yellow, grey, yellow, blue, grey, yellow, grey]);

  // the second row
  drawRow(0, canvasSize * -0.38, rectWidth, rectHeight,
    [yellow, red, yellow, yellow, yellow, blue, yellow, grey, grey, red, yellow, grey, yellow, blue, yellow, grey, yellow, yellow,
      yellow, yellow, yellow, grey, grey, blue, yellow, red, grey, grey, yellow, yellow, yellow, yellow, grey, grey, yellow,
      yellow, yellow, grey, grey, grey, red, yellow, yellow, grey, blue, yellow]);

  // the third row
  drawRow(0, canvasSize * -0.2, rectWidth, rectHeight,
    [yellow, red, yellow, blue, yellow, grey, red, yellow, yellow, grey, blue, yellow, yellow, grey, yellow, blue, yellow, yellow, yellow,
      red, yellow, yellow, blue, yellow, yellow, red, yellow, blue, yellow, yellow, red, yellow, yellow, yellow, red, yellow, yellow, yellow,
      yellow, blue, yellow, blue, yellow, red, yellow, grey, blue, grey, yellow]);

  // the fourth row
  drawRow(0, canvasSize * -0.12, rectWidth, rectHeight,
    [yellow, red, grey, blue, yellow, yellow, red, grey, yellow, yellow, grey, blue, yellow, yellow, red, grey, grey, yellow, yellow, red,
      grey, grey, grey, grey, blue, yellow, yellow, grey, yellow, grey, yellow, yellow, red, grey, yellow, grey, yellow, yellow, blue, yellow,
      yellow, yellow, red, yellow, yellow, grey, red, yellow, red, grey]);


  //column
  translate(0, (-canvasSize * 0.56));

  let rectNewHeight = canvasSize * 0.022;
  //first column from the left
  drawColumn(canvasSize * 0.022, 0, rectWidth, rectNewHeight,
    [yellow, blue, grey, yellow, yellow, blue, yellow, yellow, red, yellow, yellow, blue, yellow, red, yellow, grey, red]);
  //second column from the left
  drawColumn(canvasSize * 0.066, 0, rectWidth, rectNewHeight,
    [red, yellow, grey, yellow, yellow, red, yellow, grey, yellow, grey, yellow, yellow, grey, yellow, yellow, yellow, yellow, blue, yellow, yellow, blue, red, yellow, yellow, grey, blue, yellow, yellow, red, yellow, grey, red, grey, red, yellow, red, grey, yellow, yellow, blue, grey, yellow, grey, red, yellow, yellow]);
  //third column from the left
  drawColumn(canvasSize * 0.132, 0, rectWidth, rectNewHeight,
    [yellow, yellow, yellow, grey, grey, blue, yellow, yellow, blue, yellow, blue, blue, yellow, red, grey, grey, blue, grey, blue, grey, red, yellow, blue, yellow, yellow, blue, yellow, yellow, blue, yellow, yellow, blue, blue, red, yellow, blue, grey, red, yellow, blue, grey, blue, grey, blue]);
  //forth column from the left
  drawColumn(canvasSize * 0.242, 0, rectWidth, rectNewHeight,
    [red, yellow, grey, yellow, yellow, blue, yellow, blue, yellow, grey, yellow, blue, yellow, red, yellow, grey, yellow, blue, grey, yellow, blue, grey, yellow, grey, yellow, yellow, blue, yellow, red, yellow, grey, yellow, yellow, blue, yellow, red, grey, yellow, grey, blue, grey, red, yellow, blue, yellow, yellow]);

  //first column from the right
  drawColumn(canvasSize * 0.95, 0, rectWidth, rectNewHeight,
    [red, yellow, red, grey, yellow, red, yellow, grey, blue, grey, yellow, blue, grey, yellow, red, yellow, grey, yellow, yellow, grey, red, yellow, blue, grey, yellow, red, yellow, grey, yellow, grey, yellow, yellow, red, grey, blue, yellow, yellow, red, yellow, red, yellow, grey, yellow, yellow, red, yellow, yellow]);
  //second column from the right
  drawColumn(canvasSize * 0.912, 0, rectWidth, rectNewHeight,
    [yellow, blue, grey, yellow, grey, blue, blue]);
  drawColumn(canvasSize * 0.912, canvasSize * 0.179, rectWidth, rectNewHeight*0.98,
    [yellow, grey, red, red, red, grey, yellow, grey, yellow, grey, yellow, yellow, red]);
  drawColumn(canvasSize * 0.912, canvasSize * 0.64, rectWidth, rectNewHeight,
    [red, grey, yellow, yellow, grey, grey, blue, yellow, yellow, grey]);
  //third column
  drawColumn(canvasSize * 0.868, 0, rectWidth, rectNewHeight*0.96,
    [red, grey, blue, grey, yellow, red, yellow, grey, yellow, grey, red, red, red, grey, yellow, blue, yellow, red]);

  //fourth column
  drawColumn(canvasSize * 0.824, 0, rectWidth, rectNewHeight,
    [yellow, blue, grey, yellow, yellow, yellow, blue, yellow, blue, yellow, yellow, red, yellow, yellow, grey, blue, yellow, blue, yellow, grey, red, yellow, yellow, blue, yellow, red, yellow, grey, blue, grey, yellow, yellow, red, grey, blue, yellow, yellow, red, grey, blue, yellow, yellow, blue, yellow, red, yellow, grey, yellow, yellow, blue, grey, yellow]);

  // fifth column
  drawColumn(canvasSize * 0.52, 0, rectWidth, rectNewHeight,
    [yellow, grey, red, yellow, grey, yellow, grey, red, grey, yellow, red, yellow, grey, yellow, grey, yellow, blue])
  drawColumn(canvasSize * 0.52, canvasSize * 0.465, rectWidth, rectNewHeight,
    [grey, yellow, yellow, blue, yellow, yellow, red, grey, yellow, yellow, grey, blue, yellow, grey, yellow, grey, yellow, yellow, red, grey, yellow, red, grey, yellow, yellow, blue, grey, yellow, yellow])

  //sixth column
  drawColumn(canvasSize * 0.472, 0, rectWidth, rectNewHeight,
    [red, yellow, grey, yellow, blue, red, yellow, blue, yellow, red, grey, yellow, yellow, blue, yellow, red, grey, blue, yellow, grey, yellow, red, yellow, yellow, grey, yellow, red, grey, red, grey, yellow, grey, yellow, blue, yellow, yellow, red, blue, grey, yellow, red, grey, yellow]);

  //inner column
  drawColumn(canvasSize * 0.592, canvasSize * 0.465, rectWidth, rectNewHeight,
    [yellow, yellow, grey, yellow, red, yellow, red]);



  // Display all the big rectangles by iterating over the array and resizing them
  bigRectangles.forEach(rectangle => {
    rectangle.resize(canvasSize);
    rectangle.display();
  });

}

// Function to draw a row of colored squares
function drawRow(x, y, w, h, colors) {
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);  // Set the fill color for the square
    rect(x + i * w, y, w, h);  // Draw the square
  }
}

// Function to draw a column of colored squares
function drawColumn(x, y, w, h, colors) {
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);  // Set the fill color for the square
    rect(x, y + i * h, w, h);  // Draw the square
  }
}


function play_pause() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    //we can use song.play() here if we want the song to play once
    //In this case, we want the song to loop, so we call song.loop()
    song.loop();
  }
}

// Adjust canvas size when window is resized
function windowResized() {
  let canvasSize = min(windowWidth, windowHeight);
  resizeCanvas(canvasSize, canvasSize);
  draw(); // redraw the canvas after resizing
}
