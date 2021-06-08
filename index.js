import Particle from './Particle.js';
import { getRandom, getContext } from './util.js';

const numParticles = 1000;
const particles = [];
const ctx = getContext();

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