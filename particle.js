class Particle {
  constructor(x, y, z) {
    this.position = createVector(x, y, z);
    this.previous = this.position.copy();
    this.dt = random(0.0001, 0.0002);
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
  // update() {
  //   let b = 0.208186;

  //   this.previous = this.position.copy();

  //   let dx = (sin(this.position.y) - b * this.position.x) * this.dt;
  //   let dy = (sin(this.position.z) - b * this.position.y) * this.dt;
  //   let dz = (sin(this.position.x) - b * this.position.z) * this.dt;

  //   this.position.x += dx;
  //   this.position.y += dy;
  //   this.position.z += dz;
  // }

  // Rossler
  // update() {
  //   const a = 0.2;
  //   const b = 0.2;
  //   const c = 5.7;

  //   this.previous = this.position.copy();

  //   let dx = (-this.position.y - this.position.z) * this.dt;
  //   let dy = (this.position.x + a * this.position.y) * this.dt;
  //   let dz = (b + this.position.z * (this.position.x - c)) * this.dt;

  //   this.position.x += dx;
  //   this.position.y += dy;
  //   this.position.z += dz;
  // }

  // Chen Lee
  // update() {
  //   const a = 5;
  //   const b = -10;
  //   const d = -0.38;

  //   this.previous = this.position.copy();

  //   let dx =
  //     (a * this.position.x - this.position.y * this.position.z) * this.dt;
  //   let dy =
  //     (b * this.position.y + this.position.x * this.position.z) * this.dt;
  //   let dz =
  //     (d * this.position.z + (this.position.x * this.position.y) / 3) * this.dt;

  //   this.position.x += dx;
  //   this.position.y += dy;
  //   this.position.z += dz;
  // }

  // Sprott B
  // update() {
  //   const a = 0.4;
  //   const b = 1.2;
  //   const c = 1;

  //   this.previous = this.position.copy();

  //   let dx = a * this.position.y * this.position.z * this.dt;
  //   let dy = (this.position.x - b * this.position.y) * this.dt;
  //   let dz = (c - this.position.x * this.position.y) * this.dt;

  //   this.position.x += dx;
  //   this.position.y += dy;
  //   this.position.z += dz;
  // }

  // random
  update() {
    this.previous = this.position.copy();

    const a = 0.5;
    const b = 0.1;
    const c = 1.4;

    let dx = (a * this.position.x + this.position.y * this.position.z) * this.dt;
    let dy = (b * this.position.y + this.position.x * this.position.z) * this.dt;
    let dz = (c + this.position.x * this.position.y - this.position.z ** 2) * this.dt;

    this.position.x += dx;
    this.position.y += dy;
    this.position.z += dz;

    if (!this.isOnScreen()) {
      this.position = createVector(
        random(-100, 100),
        random(-100, 100),
        random(-100, 100)
      );
      this.previous = this.position.copy();
    }

    // if (!this.isOnScreen()) {
    //   this.position = createVector(
    //     random(-width / 4, width / 4),
    //     random(-height / 4, height / 4),
    //     random(-width / 4, width / 4)
    //   );

    //   this.previous = this.position.copy();
    // }
  }

  show() {
    let diffx = this.position.x - this.previous.x;
    let diffy = this.position.y - this.previous.y;
    let diffz = this.position.z - this.previous.z;


    stroke(
      map(abs(diffz), 0, 1, 0, 255),
      map(abs(diffx), 0, 1, 0, 255),
      map(abs(diffy), 0, 1, 0, 255),
    );

    // stroke(
    //   map(abs(this.position.z), 0, width / scl, 100, 250),
    //   map(abs(this.position.y), 0, height / scl, 150, 0),
    //   map(abs(this.position.x), 0, width / scl, 255, 150)
    // );
    strokeWeight(0.5);

    line(this.position.x, this.position.y, this.previous.x, this.previous.y);
  }

  isOnScreen() {
    return (
      this.previous.x > -width / 2 &&
      this.previous.x < width / 2 &&
      this.previous.y > -height / 2 &&
      this.previous.y < height / 2
    );
  }
}
