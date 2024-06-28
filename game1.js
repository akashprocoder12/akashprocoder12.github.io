const canvas = document.querySelector('canvas');
canvas.width = innerWidth
canvas.height = innerHeight
canvas.style.background = "pink";

console.log(canvas);

const ctx = canvas.getContext('2d');

let score = 0;
class Player {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.fillStyle = "black"
        ctx.font = "30px Arial"
        ctx.fillText("Score is "+score , 20,40)

        

    }

}


class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }

    update(projectile) {
        this.draw();
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;

        for (let i = projectile.length - 1; i >= 0; i--) {
            let element = projectile[i];
            if (element.x > canvas.width || element.x < 0 || element.y > canvas.height || element.y < 0) {
                projectile.splice(i, 1);
            }
        }

    }
}

class Enemy {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.fillStyle = 'black'
        ctx.font = "10px Arial"
        ctx.fillText("enemy", this.x-this.x/2, this.y - 20);
        
        
    }

    update(projectiles, enemies) {
        this.draw();
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;

        for (let i = projectiles.length - 1; i >= 0; i--) {
            let element = projectiles[i];
            if (collisionDetection(element, this)) {

                const index = enemies.indexOf(this);
                if (index > -1) {
                    enemies.splice(index, 1);
                }


                projectiles.splice(i, 1);
                score+=5;

            }
        }
        if (collisionDetection(player, this)){
            canvas.style.display = "None";
            enemies=[];
            score = 0;
        }


    }
}

const enemies = [];

function spawnENEMIES() {
    setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = 10;
        const x_dif = canvas.width / 2 - x;
        const y_dif = canvas.height -120 - y;
        const angl = Math.atan2(y_dif, x_dif);
        const x_v = 2*Math.cos(angl);
        const y_v = 2*Math.sin(angl);
        const velocity = {
            x: x_v,
            y: y_v
        }
        enemies.push(new Enemy(x, y, 20, "green", velocity))
        console.log(enemies)
    }, 5000)

}

function collisionDetection(circle1, circle2) {

    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);


    return distance < (circle1.radius + circle2.radius);
}




const x = canvas.width / 2;
const y = canvas.height -120 ;
let mouse = { x: 1, y: 1 }
let velocity = { x: 1, y: 0 }

const projectile = [];



window.addEventListener('click', (e) => {
    mouse = {
        x: e.clientX,
        y: e.clientY
    }
    const y_diff = mouse.y - y;
    const x_diff = mouse.x - x;
    const angle = Math.atan2(y_diff, x_diff);
    const x_velocity = Math.cos(angle);
    const y_velocity = Math.sin(angle);
    const amplity = 6;
    velocity = {
        x: amplity * x_velocity,
        y: amplity * y_velocity
    };
    projectile.push(new Projectile(x, y, 10, "red", velocity));
    console.log(projectile)



})

const player = new Player(x, y, 70, "brown")

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
    if (projectile.length >= 1) {
        projectile.forEach(element => {
            element.update(projectile);
        });
    }
    if (enemies.length >= 1) {
        enemies.forEach(element => {
            element.update(projectile, enemies);
        })
    }



}
spawnENEMIES();
animate();
