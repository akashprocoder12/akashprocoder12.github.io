const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const speed_factor = 5;

function drawBackground() {
    

    ctx.strokeStyle = "rgb(16, 0, 140)";
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
    ctx.fillStyle = `rgb(${this.vertical_distance},0,${this.vertical_distance})`;
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
    ctx.fillStyle = `rgb(${this.vertical_distance},0,${this.vertical_distance})`;
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
    ctx.fillStyle = `rgb(${this.vertical_distance},0,${this.vertical_distance})`;
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
        ctx.fillStyle = `rgb(${this.vertical_distance},0,${this.vertical_distance})`;
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
    ctx.fillStyle = `rgb(${this.vertical_distance},0,${this.vertical_distance})`;
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
  if ( A.vertical_distance > 1000){
    restore();
  }
  
}


animate();
partition_through_line();
drawBackground();


function restore(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  partition_through_line();
  drawBackground();
  A.ball_one = { x: 0.1 * canvas.width, y: (20 / 300) * canvas.height };
  A.ball_two = {
    x: (46.2 / 1500) * canvas.width,
    y: (279.5 / 300) * canvas.height,
  };
  A.ball_three = { x: 0.05 * canvas.width, y: canvas.height / 1.8 };
  A.vertical_distance = 0;
  K.ball_one = {
    x: canvas.width * (1 / 5 + 1 / 20),
    y: (20 / 300) * canvas.height,
  };
  K.ball_two = {
    x: canvas.width * (1 / 5 + 3 / 20),
    y: (20 / 300) * canvas.height,
  };
  K.vertical_distance = 0;
  A2.ball_one = { x: 0.5 * canvas.width, y: 20 };
    A2.ball_two = {
      x: (2 * canvas.width) / 5 + 46.2,
      y: (279.5 / 300) * canvas.height,
    };
    A2.ball_three = {
      x: (2 / 5 + 0.05) * canvas.width,
      y: canvas.height / 1.8,
    };
    A2.vertical_distance = 0;
    S.ball_one = { x: (3/5 + 3/20) * canvas.width, y: 20/300 * canvas.height };
        
        S.vertical_distance = 0;
        H.ball_one = {
          x: (4 / 5 + 1 / 20) * canvas.width,
          y: (20 / 300) * canvas.height,
        };
        H.ball_two = {
          x: (4 / 5 + 3 / 20) * canvas.width,
          y: (279.5 / 300) * canvas.height,
        };
        H.ball_three = {
          x: (4 / 5 + 0.05) * canvas.width,
          y: canvas.height / 1.8,
        };
        H.vertical_distance = 0;



}


