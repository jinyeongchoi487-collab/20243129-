let img;

function preload() {
  img = loadImage("20243129 최진영 과제2 캐리커쳐 그리기 (2).png");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  image(img, 0, 0, width, height);
}

