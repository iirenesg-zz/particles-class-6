import Particle from '/Particle';
import { getRandom, HSVtoRGB } from '/util';

(() => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const numParticles = 1000;
  const particles = [];

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