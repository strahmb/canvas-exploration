var canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
var ctx = <CanvasRenderingContext2D>canvas.getContext("2d");

const FPS = 60;

const TILE_SIZE = 40;

class Hero {
    position: { x: number; y: number };
    size: number;

    constructor(position = { x: 20, y: 40 }) {
        this.size = 40;
        this.position = position;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.rect(hero.position.x, hero.position.y, hero.size, hero.size);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
    }
}

let keyPress = {
    right: false,
    left: false,
};
let _stop = false;

let hero = new Hero();
function render() {
    // Handle events
    if (!_stop) {
        if (keyPress.right) {
            hero.position.x += 7;
            if (hero.position.x + hero.size > canvas.width) {
                hero.position.x = canvas.width - hero.size;
            }
        } else if (keyPress.left) {
            hero.position.x -= 7;
            if (hero.position.x < 0) {
                hero.position.x = 0;
            }
        }
    }

    // Draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hero.draw(ctx);
}
setInterval(render, 1000 / FPS);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        keyPress.right = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        keyPress.left = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        keyPress.right = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        keyPress.left = false;
    }
}

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept();
}
