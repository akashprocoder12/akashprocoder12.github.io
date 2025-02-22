const c = document.querySelector("#background-canvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx_ = c.getContext("2d");

const speed_factor_ = 5;
function drawBackground_() {
  ctx_.strokeStyle = "rgb(5, 0, 41)";
  ctx_.lineWidth = 1;
  for (let i = 0; i <= c.width; i += 50) {
    ctx_.beginPath();
    ctx_.moveTo(i, 0);
    ctx_.lineTo(i, c.height);
    ctx_.stroke();
  }
  for (let i = 0; i <= c.height; i += 50) {
    ctx_.beginPath();
    ctx_.moveTo(0, i);
    ctx_.lineTo(c.width, i);
    ctx_.stroke();
  }
}
drawBackground_();
window.addEventListener("resize", function () {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  drawBackground_();
});

// Set canvas to window size
function resizeCanvas() {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Configuration
const particles = [];
const particleCount = Math.floor(
  (window.innerWidth * window.innerHeight) / 10000
);
const maxDistance = 100;
const particleSpeed = 0.5;
const colors = ["#FF61D2", "#7D6BFF", "#6BFFD3"];

// Particle class
class Particle {
  constructor() {
    this.reset(true);
  }

  reset(initial) {
    this.x = initial ? Math.random() * c.width : -50;
    this.y = initial
      ? Math.random() * c.height
      : Math.random() * c.height;
    this.radius = Math.random() * 2 + 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.velocity = {
      x: (Math.random() - 0.5) * particleSpeed,
      y: (Math.random() - 0.5) * particleSpeed,
    };
    this.angle = 0;
  }

  update() {
    this.angle += 0.01;
    this.velocity.x += Math.sin(this.angle) * 0.001;
    this.velocity.y += Math.cos(this.angle) * 0.001;

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (
      this.x < -50 ||
      this.x > c.width + 50 ||
      this.y < -50 ||
      this.y > c.height + 50
    ) {
      this.reset(false);
    }
  }

  draw() {
    ctx_.beginPath();
    const gradient = ctx_.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.radius
    );
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx_.fillStyle = gradient;
    ctx_.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx_.fill();
  }
}

// Create particles
for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

// Animation loop with efficiency optimizations
let lastTime = 0;
const interval = 1000 / 60; // ~60fps



let scrollY = 0;
let scrollTimeout = null;

// Set canvas size
function resizeCanvas() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
}
resizeCanvas();

// Create stars
const stars = Array(20).fill().map(() => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    size: Math.random() * 2,
    speed: Math.random() * 0.5 + 0.2,
    brightness: 0
  }));
  
  

// Scroll handler
window.addEventListener('scroll', () => {
    scrollY = window.pageYOffset;
    
    // Reset stars' brightness when scrolling starts
    stars.forEach(star => star.brightness = Math.random() * 0.5 + 0.5);

    // Add content parallax effect
    document.querySelectorAll('.content-section').forEach((section, index) => {
        const speed = 0.3 + (index * 0.1);
        section.style.transform = `translateY(${scrollY * speed}px)`;
    });

    // Clear previous timeout and set a new one
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Fade out stars after 300ms of no scrolling
        stars.forEach(star => star.brightness = 0);
    }, 60);
});

// Window resize handler
window.addEventListener('resize', resizeCanvas);



// // Add some random star twinkle
// setInterval(() => {
//     stars.forEach(star => {
//         if (Math.random() < 0.01) {
//             star.brightness = Math.random() * 0.5 + 0.5;
//         }
//     });
// }, 100);






function animate_(timestamp) {
  // console.log(particles.length)
  const deltaTime = timestamp - lastTime;
    
  if (deltaTime > interval) {
      ctx_.fillStyle = "rgba(0, 0, 0,0.08)";
      ctx_.fillRect(0, 0, c.width, c.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    drawConnections();
    lastTime = timestamp - (deltaTime % interval);
  }
  // stars.forEach(star => {
  //   ctx_.beginPath();
  //   ctx_.arc(star.x+Math.sin(scrollY*0.025)*5, star.y + (scrollY * star.speed), star.size*8, 0, Math.PI * 2);
    
  //   ctx_.fillStyle = `rgba(0, ${scrollY*0.3}, 255, ${star.brightness})`;
    // ctx_.fill();
    
    // ctx_.moveTo(star.x,c.height);
    // ctx_.lineTo(star.x+Math.sin(scrollY*0.025)*50, star.y + (scrollY * star.speed));
    // ctx_.strokeStyle =  `rgba(0, 0, 200, ${star.brightness})`;
    // ctx_.lineWidth = 1;
    // ctx_.stroke();

// });


  requestAnimationFrame(animate_);
}

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const p1 = particles[i];
      const p2 = particles[j];
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < maxDistance) {
          ctx_.beginPath();
          ctx_.strokeStyle = p1.color;
        ctx_.lineWidth = 0.3;
        ctx_.globalAlpha = 1 - dist / maxDistance;
        ctx_.moveTo(p1.x, p1.y);
        ctx_.lineTo(p2.x, p2.y);
        ctx_.stroke();
      }
    }
  }
  ctx_.globalAlpha = 1;
}

// Start animation
animate_(0);