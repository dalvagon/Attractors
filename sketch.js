let as, bs, cs;

let points = [];
let x = 0.1;
let y = 0;
let z = 0;
let dt = 0.0002;

const scl = 40;

let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 500; i++) {
    particles.push(
      new Particle(random(-10, 10), random(-10, 10), random(-10, 10))
    );
  }

  // as = createSlider(-100, 100, 10, 0.1);
  // bs = createSlider(-100, 100, 20, 0.1);
  // cs = createSlider(-100, 100, 30, 0.1);

  // as.position(10, 10);
  // bs.position(10, 40);
  // cs.position(10, 70);
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
  dy = (d * x + (z - b) * y) * dt;
  dz = (c + a * z - z ** 3 / 3 - (x ** 2 + y ** 2) * (1 + e * z)) * dt;

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

function ChenLeeAttractor() {
  const a = 5;
  const b = -10;
  const d = -0.38;

  dx = (a * x - y * z) * dt;
  dy = (b * y + x * z) * dt;
  dz = (d * z + (x * y) / 3) * dt;

  x += dx;
  y += dy;
  z += dz;

  points.push(createVector(x, y, z));
}

function SprottBAttractor() {
  const a = 0.4;
  const b = 1.2;
  const c = 1;

  dx = a * y * z * dt;
  dy = (x - b * y) * dt;
  dz = (c - x * y) * dt;

  x += dx;
  y += dy;
  z += dz;

  points.push(createVector(x, y, z));
}

function RandomAttractor() {
  const a = 99.9;
  const b = 0.4;
  const c = 20;

  dx = (a * y + b * y ** 2 - c * z) * dt;
  dy = (x * a - y ** 2 - x * b) * dt;
  dz = x * y * x;

  z += dx;
  y += dy;
  z += dz;

  points.push(createVector(x, y, z));
}

function draw() {
  background(0, 20);
  translate(width / 2, height / 2);
  frameRate(200);
  scale(scl);

  for (let p of particles) {
    p.update();
    p.show();
  }

  // background(0);
  // stroke(255);
  // RandomAttractor();

  // translate(0, 0, -80);
  // let camX = map(mouseX, 0, width, -2000, 2000);
  // let camY = map(mouseY, 0, height, -2000, 2000);
  // camera(
  //   camX,
  //   camY,
  //   height / (4.0 * tan((PI * 30.0) / 180.0)),
  //   0,
  //   0,
  //   0,
  //   0,
  //   1,
  //   0
  // );
  // scale(20);

  // drawAttractor();
}

function drawAttractor() {
  noFill();
  strokeWeight(0.7);

  beginShape();
  for (let p of points) {
    vertex(p.x, p.y, p.z);
  }
  endShape();

  if (points.length > 1000) {
    points.shift();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
