let img;

function preload() {
  img = loadImage("pic4.gif");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  image(img, 0, 0, width, height);
}
