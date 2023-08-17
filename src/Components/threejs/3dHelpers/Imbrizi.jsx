import { canvas } from "canvas-sketch";

const Canvas = () => {};

const settings = {
  dimensions: [1000, 1000],
};

const particles = [];

const sketch = ({ width, height }) => {
  let x, y, particle;

  for (let i = 0; i < 1; i++) {
    x = width * 0.5;
    y = height * 0.5;

    particle = new Particles({ x, y });

    particles.push(particle);
  }

  return ({ context, width, height }) => {
    context.fillstyle = "white";
    context.fillRect(0, 0, width, height);

    particles.forEach(particle => {
      particle.draw(context);
    });
  };
};

canvas(sketch, settings);

class Particles {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(context) {
    context.save();
    context.translate(this.x, this.y);
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.restore();
  }
}
