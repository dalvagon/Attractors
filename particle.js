class Particle {
  constructor(x, y, z) {
    this.position = createVector(x, y, z);
    this.previous = this.position.copy();
    this.dt = 0.2;
  }

  // Aizawa
  // update() {
  //   const a = 0.95;
  //   const b = 0.7;
  //   const c = 0.65;
  //   const d = 3.5;
  //   const e = 0.25;
  //   const f = 0.1;

  //   this.previous = this.position.copy();

  //   let dx =
  //     ((this.position.z - b) * this.position.x - d * this.position.y) * this.dt;
  //   let dy =
  //     (d * this.position.x + (this.position.z - b) * this.position.y) * this.dt;
  //   let dz =
  //     (c +
  //       a * this.position.z -
  //       this.position.z ** 3 / 3 -
  //       (this.position.x ** 2 + this.position.y ** 2) *
  //         (1 + e * this.position.z)) *
  //     this.dt;

  //   this.position.x += dx;
  //   this.position.y += dy;
  //   this.position.z += dz;
  // }

  // Lorenz
  // update() {
  //   const sigma = 10;
  //   const rho = 28;
  //   const beta = 8 / 3;

  //   this.previous = this.position.copy();

  //   let dx = sigma * (this.position.y - this.position.x) * this.dt;
  //   let dy =
  //     (this.position.x * (rho - this.position.z) - this.position.y) * this.dt;
  //   let dz =
  //     (this.position.x * this.position.y - beta * this.position.z) * this.dt;
  //   this.position.x += dx;
  //   this.position.y += dy;
  //   this.position.z += dz;
  // }

  // Thomas
  update() {
    let b = 0.208186;

    this.previous = this.position.copy();

    let dx = (sin(this.position.y) - b * this.position.x) * this.dt;
    let dy = (sin(this.position.z) - b * this.position.y) * this.dt;
    let dz = (sin(this.position.x) - b * this.position.z) * this.dt;

    this.position.x += dx;
    this.position.y += dy;
    this.position.z += dz;
  }

  show() {
    stroke(
      map(abs(this.position.z), 0, width / scl, 100, 255),
      map(abs(this.position.y), 0, height / scl, 100, 155),
      map(abs(this.position.x), 0, width / scl, 255, 40)
    );
    strokeWeight(0.03);

    line(this.position.x, this.position.y, this.previous.x, this.previous.y);
  }
}
