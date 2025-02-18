const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const speed_factor = 5;

function drawBackground() {
    

    ctx.strokeStyle = "rgba(16, 0, 140, 0.78)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }
    for (let i = 0; i <= canvas.height; i += 50) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }
}




class Write_A {
  constructor() {
    this.ball_one = { x: 0.1 * canvas.width, y: (20 / 300) * canvas.height };
    this.ball_two = {
      x: (46.2 / 1500) * canvas.width,
      y: (279.5 / 300) * canvas.height,
    };
    this.ball_three = { x: 0.05 * canvas.width, y: canvas.height / 1.8 };
    this.vertical_distance = 0;
  }

  draw(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "gray";
    ctx.fill();
  }

  Ball_One_Move() {
    if (this.vertical_distance < 260) {
      this.draw(this.ball_one.x, this.ball_one.y);
      this.ball_one.x += 0.12 * speed_factor;
      this.ball_one.y += 0.3 * speed_factor;
    }
  }
  Ball_Two_Move() {
    if (this.vertical_distance < 260) {
      this.draw(this.ball_two.x, this.ball_two.y);
      //   console.log(this.ball_two.x , this.ball_two.y)
      this.ball_two.x += 0.12 * speed_factor;
      this.ball_two.y -= 0.3 * speed_factor;
    }
  }
  Ball_Three_Move() {
    if (this.vertical_distance < 260 && this.vertical_distance > 130) {
      this.draw(this.ball_three.x, this.ball_three.y);
      this.ball_three.x += 0.4 * speed_factor;
      this.ball_three.y -= 0.1 * speed_factor;
    }
  }
  draw_A_ONE() {
    this.vertical_distance += 0.3 * speed_factor;
    this.Ball_One_Move();
    this.Ball_Two_Move();
    this.Ball_Three_Move();
  }
}

class write_K {
  constructor() {
    this.ball_one = {
      x: canvas.width * (1 / 5 + 1 / 20),
      y: (20 / 300) * canvas.height,
    };
    this.ball_two = {
      x: canvas.width * (1 / 5 + 3 / 20),
      y: (20 / 300) * canvas.height,
    };
    this.vertical_distance = 0;
  }
  draw(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "gray";
    ctx.fill();
  }

  Ball_One_Move() {
    if (this.vertical_distance < 260) {
      this.draw(this.ball_one.x, this.ball_one.y);
      this.ball_one.y += 0.3 * speed_factor;
    }
  }
  Ball_Two_Move() {
    if (this.vertical_distance < 260) {
      this.draw(this.ball_two.x, this.ball_two.y);
      if (this.vertical_distance < 110) {
        this.ball_two.x -= 0.4 * speed_factor;
      } else {
        this.ball_two.x += 0.3 * speed_factor;
      }
      this.ball_two.y += 0.3 * speed_factor;
    }
  }
  draw_K() {
    this.vertical_distance += 0.3 * speed_factor;
    this.Ball_One_Move();
    this.Ball_Two_Move();
  }
}

class Write_A_2 {
  constructor() {
    this.ball_one = { x: 0.5 * canvas.width, y: 20 };
    this.ball_two = {
      x: (2 * canvas.width) / 5 + 46.2,
      y: (279.5 / 300) * canvas.height,
    };
    this.ball_three = {
      x: (2 / 5 + 0.05) * canvas.width,
      y: canvas.height / 1.8,
    };
    this.vertical_distance = 0;
  }

  draw(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "gray";
    ctx.fill();
  }

  Ball_One_Move() {
    if (this.vertical_distance < 260) {
      this.draw(this.ball_one.x, this.ball_one.y);
      this.ball_one.x += 0.12 * speed_factor;
      this.ball_one.y += 0.3 * speed_factor;
    }
  }
  Ball_Two_Move() {
    if (this.vertical_distance < 260) {
      this.draw(this.ball_two.x, this.ball_two.y);

      this.ball_two.x += 0.12 * speed_factor;
      this.ball_two.y -= 0.3 * speed_factor;
    }
  }
  Ball_Three_Move() {
    if (this.vertical_distance < 260 && this.vertical_distance > 130) {
      this.draw(this.ball_three.x, this.ball_three.y);
      this.ball_three.x += 0.4 * speed_factor;
      this.ball_three.y -= 0.1 * speed_factor;
    }
  }
  draw_A_two() {
    this.vertical_distance += 0.3 * speed_factor;
    this.Ball_One_Move();
    this.Ball_Two_Move();
    this.Ball_Three_Move();
  }
}


class Write_S {
    constructor() {
        
        this.ball_one = { x: (3/5 + 3/20) * canvas.width, y: 20/300 * canvas.height };
        
        this.vertical_distance = 0;
    }

    draw(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "gray";
        ctx.fill();
    }
    // 
    Ball_One_Move() {
        if (this.vertical_distance < 260) {
            this.draw(this.ball_one.x, this.ball_one.y);
            if(this.vertical_distance < 52){
                this.ball_one.x -= 0.9*speed_factor;
                this.ball_one.y += 0.01*speed_factor;
            }
            else if (this.vertical_distance < 104){
                this.ball_one.x += 0.01*speed_factor;
                this.ball_one.y += 0.7 *speed_factor ;
            }
            else if (this.vertical_distance < 156){
                this.ball_one.x += 0.8*speed_factor;
                this.ball_one.y += 0.01 *speed_factor ;
            }
            else if (this.vertical_distance < 208){
                this.ball_one.x += 0.01*speed_factor;
                this.ball_one.y += 0.7*speed_factor ;
            }

            else {
                this.ball_one.x -= 0.9*speed_factor;
                this.ball_one.y += 0.01*speed_factor;
            }
            
        }
    }

    

    draw_S() {
        this.vertical_distance += 0.3 * speed_factor;
        this.Ball_One_Move();
        
    }
}


class Write_H {
  constructor() {
    this.ball_one = {
      x: (4 / 5 + 1 / 20) * canvas.width,
      y: (20 / 300) * canvas.height,
    };
    this.ball_two = {
      x: (4 / 5 + 3 / 20) * canvas.width,
      y: (279.5 / 300) * canvas.height,
    };
    this.ball_three = {
      x: (4 / 5 + 0.05) * canvas.width,
      y: canvas.height / 1.8,
    };
    this.vertical_distance = 0;
  }

  draw(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "gray";
    ctx.fill();
  }

  Ball_One_Move() {
    if (this.vertical_distance < 260) {
      this.draw(this.ball_one.x, this.ball_one.y);
      //   this.ball_one.x += 0.12*speed_factor;
      this.ball_one.y += 0.3 * speed_factor;
    }
  }
  Ball_Two_Move() {
    if (this.vertical_distance < 260) {
      this.draw(this.ball_two.x, this.ball_two.y);

      // this.ball_two.x += 0.12*speed_factor;
      this.ball_two.y -= 0.3 * speed_factor;
    }
  }
  Ball_Three_Move() {
    if (this.vertical_distance < 260 && this.vertical_distance > 180) {
      this.draw(this.ball_three.x, this.ball_three.y);
      this.ball_three.x += 0.5 * speed_factor;
      this.ball_three.y -= 0.1 * speed_factor;
    }
  }
  draw_H() {
    this.vertical_distance += 0.3 * speed_factor;
    this.Ball_One_Move();
    this.Ball_Two_Move();
    this.Ball_Three_Move();
  }
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velX = (Math.random() - 0.5) * 0.2;
        this.velY = -(Math.random() * 3 + 2);
        this.size = Math.random() * 10 + 5;
        this.life = 1;
        this.decay = Math.random() * 0.015 + 0.015;
        this.color = `hsl(${Math.random() * 20 + 30}, 100%, ${Math.random() * 30 + 50}%)`;
    }

    update() {
        this.x += this.velX + Math.sin(Date.now() * 0.001) * 0.3;
        this.y += this.velY;
        this.velY += 0.1;
        this.life -= this.decay;
        this.size *= 0.98;
    }

    draw() {
        ctx.globalAlpha = this.life;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}


class Fire {
    constructor() {
        this.particles = [];
        this.maxParticles = 200;
        this.spawnRate = 5;
        this.baseX = canvas.width / 2;
        this.baseY = canvas.height - 50;
    }

    spawn() {
        for (let i = 0; i < this.spawnRate; i++) {
            if (this.particles.length < this.maxParticles) {
                this.particles.push(new Particle(
                    this.baseX + (Math.random() - 0.5) * 100,
                    this.baseY
                ));
            }
        }
    }

    update() {
        this.spawn();
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].update();
            if (this.particles[i].life <= 0) {
                this.particles.splice(i, 1);
            }
        }
    }

    draw() {
        ctx.globalCompositeOperation = 'lighter';
        this.particles.forEach(particle => particle.draw());
        ctx.globalCompositeOperation = 'source-over';
        
        // Draw glowing base
        const gradient = ctx.createRadialGradient(
            this.baseX, this.baseY, 0,
            this.baseX, this.baseY, 100
        );
        gradient.addColorStop(0, 'rgba(255, 100, 0, 0.8)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(this.baseX - 100, this.baseY - 100, 200, 200);
    }
}

const fire = new Fire();


// function animate_two() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
    
//     // Draw background gradient
//     const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
//     gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
//     gradient.addColorStop(1, 'rgba(50, 20, 0, 0.5)');
//     ctx.fillStyle = gradient;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     fire.update();
//     fire.draw();
    
//     requestAnimationFrame(animate_two);
// }
// animate_two();


function partition_through_line() {
  for (let i = 1; i <= 5; i++) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";

    ctx.beginPath();
    ctx.moveTo((canvas.width / 5) * i, 0);
    ctx.lineTo((canvas.width / 5) * i, canvas.height);
    ctx.stroke();
  }
}

partition_through_line();
drawBackground();

const A = new Write_A();
const K = new write_K();
const A2 = new Write_A_2();
const S = new Write_S();
const H = new Write_H();
function animate() {
  requestAnimationFrame(animate);
  A.draw_A_ONE();
  K.draw_K();
  A2.draw_A_two();
  S.draw_S();
  H.draw_H();
}

animate();

