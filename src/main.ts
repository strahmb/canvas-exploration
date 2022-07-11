var canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
var ctx = <CanvasRenderingContext2D> canvas.getContext("2d");

let tileSize = 40;
let heroPosition = {
    x: 20,
    y: 40
};
let heroSize = 40;
let keyPress = {
    right: false,
    left: false
}


function render() {
    ctx.clearRect(0,0,canvas.width, canvas.height);

    if(keyPress.right) {
        heroPosition.x += 7;
        if (heroPosition.x + heroSize > canvas.width){
            heroPosition.x = canvas.width - heroSize;
        }
    }
    else if(keyPress.left) {
        heroPosition.x -= 7;
        if (heroPosition.x < 0){
            heroPosition.x = 0;
        }
    }
    

    ctx.beginPath();
    ctx.rect(heroPosition.x, heroPosition.y, heroSize, heroSize);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}
setInterval(render, 10);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        keyPress.right = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        keyPress.left = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        keyPress.right = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        keyPress.left = false;
    }
}


// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept();
}