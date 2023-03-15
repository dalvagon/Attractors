let points = [];
let x = 0.1;
let y = 1;
let z = 1;
let hu = 0;
let dt = 0.02;

function setup() {
  createCanvas(1519, 864, WEBGL);
}

function LorenzAttractor() {
  const sigma = 10;
  const rho = 28;
  const beta = 8 / 3;

  dx = sigma * (y - x) * dt;
  dy = (x * (rho - z) - y) * dt;
  dz = (x * y - beta * z) * dt;
  x += dx;
  y += dy;
  z += dz;

  points.push(createVector(x, y, z));
}

function ThomasAttractor() {
  let b = 0.208186;
  dx = (sin(y) - b * x) * dt;
  dy = (sin(z) - b * y) * dt;
  dz = (sin(x) - b * z) * dt;
  x += dx;
  y += dy;
  z += dz;

  points.push(createVector(x, y, z));
}

function AizawaAttractor() {
  const a = 0.95;
  const b = 0.7;
  const c = 0.65;
  const d = 3.5;
  const e = 0.25;
  const f = 0.1;
  dx = ((z - b) * x - d * y) * dt;
  dy = (d * x - (z - b) * y) * dt;
  dz =
    (c +
      a * z -
      pow(z, 3) / 3 -
      (pow(x, 2) + pow(y, 2)) * (1 + e * z) +
      f * z * pow(x, 3)) *
    dt;
  x += dx;
  y += dy;
  z += dz;

  points.push(createVector(x, y, z));
}

function RosslerAttractor() {
  const a = 0.2;
  const b = 0.2;
  const c = 5.7;

  dx = (-y - z) * dt;
  dy = (x + a * y) * dt;
  dz = (b + z * (x - c)) * dt;

  x += dx;
  y += dy;
  z += dz;

  points.push(createVector(x, y, z));
}

function draw() {
  RosslerAttractor();

  background(0);
  translate(0, 0, -80);
  let camX = map(mouseX, 0, width, -2000, 2000);
  let camY = map(mouseY, 0, height, -2000, 2000);
  camera(
    camX,
    camY,
    height / (2.0 * tan((PI * 30.0) / 180.0)),
    0,
    0,
    0,
    0,
    1,
    0
  );
  scale(20);

  drawAttractor();
}

function drawAttractor() {
  noFill();
  strokeWeight(1.5);
  stroke(255);

  beginShape();
  for (let p of points) {
    stroke(128, 255, 255);
    vertex(p.x, p.y, p.z);
  }
  hu = (hu + 1) % 255;
  endShape();
}
