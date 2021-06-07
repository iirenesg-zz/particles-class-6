(() => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const numParticles = 1000;
  const particles = [];

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
  }

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
  }

  const setup = () => {
    for(let i=0; i<numParticles; i++) {
      const particle = new Particle(canvas.width / 2, canvas.height / 2, getRandom(5, 20));

      particles.push(particle);
    }
  };

  const draw = () => {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for(let i=0; i<particles.length; i++) {
      particles[i].run();
    }

    requestAnimationFrame(draw);
  };

  setup();
  requestAnimationFrame(draw);
})();