let img;

function preload() {
  img = loadImage("20243129 최진영 과제4-1.gif");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  image(img, 0, 0, width, height);
}
