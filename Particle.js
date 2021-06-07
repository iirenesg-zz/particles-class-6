class Particle {
  constructor(_x, _y, _r) {
    this.positionX = _x;
    this.positionY = _y;
    this.radius = _r;
    this.velocityX = 0;
    this.velocityY = 0;
  }

  draw() {
    const { r, g, b } = HSVtoRGB(getRandom(0, 200), 100, 300);

    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.beginPath();
    ctx.arc(this.positionX, this.positionY, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  };

  update() {
    this.velocityX += getRandom(-1, 1);
    this.velocityY += getRandom(-1, 1);

    this.positionX += this.velocityX;
    this.positionY += this.velocityY;
  };

  run() {
    this.draw();
    this.update();
  }
};

export default Particle;