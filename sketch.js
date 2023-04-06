let startButton, clearButton, ellipseButton, lineButton;
let drawingPerm = false;
let isDrawingEllipse = true;
let titleText = "Daniel Feuer's p5JS WebToy";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(110, 217, 220);
  startButton = createButton("Start Rolling");
  startButton.position(width/2 - startButton.width/2, height/2 + 50);
  startButton.mousePressed(startToy);

  // titleText
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  text(titleText, width / 2, height/2 - 50);

  console.log("setup");
}

function startToy() {
  startButton.hide();
  clearButton = createButton("Clear");
  clearButton.position(width/2 - 25, height - 600);
  clearButton.mousePressed(clearCanvas);

  ellipseButton = createButton("Draw with Circles");
  ellipseButton.position(width/2 - 100, height - 70);
  ellipseButton.mousePressed(setEllipseDrawing);

  lineButton = createButton("Draw with Lines");
  lineButton.position(width/2 + 20, height - 70);
  lineButton.mousePressed(setLineDrawing);

  // Start the drawing
  background(110, 217, 220);
  drawingPerm = true;
  console.log("startToy");
}

function setEllipseDrawing() {
  isDrawingEllipse = true;
}

function setLineDrawing() {
  isDrawingEllipse = false;
}

function draw() {
  if (drawingPerm) {
    if (mouseIsPressed) {
      fill(random(0, 256), random(0, 256), random(0, 256));
    } 
    if (isDrawingEllipse) {
      if (mouseIsPressed) 
        ellipse(mouseX, mouseY, 20, 20);
    } else {
      if (mouseIsPressed)
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }

  console.log("draw");
}

function clearCanvas() {
  clear(); // clear the canvas
  background(110, 217, 220); // set the background color
}