let img;

function preload() {
  img = loadImage("20243129_최진영_과제1 (2).png");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  image(img, 0, 0, width, height);
}
