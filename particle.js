const SIGMA = 10;
const RHO = 28;
const BETA = 8 / 3;
const DT = 0.1;

class Particle {
  constructor(x, y, z) {
    this.position = createVector(x, y, z);
    this.velocity = createVector(0, 0, 0);
    this.previous = this.position.copy();
    this.hue = random(255);
  }

  update() {
    let x = this.position.x;
    let y = this.position.y;
    let z = this.position.z;
    let DT = 0.01;
    let dx = SIGMA * (y - x) * DT;
    let dy = (x * (RHO - z) - y) * DT;
    let dz = (x * y - BETA * z) * DT;

    this.previous = this.position.copy();
    this.velocity = createVector(dx, dy, dz);
    this.velocity.setMag(random(1, 5));
    this.position.add(this.velocity);
  }

  show() {
    stroke(this.hue, 255, 255);
    this.hue = (this.hue + 1) % 255;
    strokeWeight(1);
    line(
      this.position.x,
      this.position.y,
      this.position.z,
      this.previous.x,
      this.previous.y,
      this.previous.z
    );
  }
}
