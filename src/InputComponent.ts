export let Keys = {
    rightPressed: false,
    leftPressed: false,
    upPressed: false,
    downPressed: false,
};

export function setupEventHandlers() {
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
}

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        Keys.rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        Keys.leftPressed = true;
    } else if (e.key == "Up" || e.key == "ArrowUp") {
        Keys.upPressed = true;
    } else if (e.key == "Down" || e.key == "ArrowDown") {
        Keys.downPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        Keys.rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        Keys.leftPressed = false;
    } else if (e.key == "Up" || e.key == "ArrowUp") {
        Keys.upPressed = false;
    } else if (e.key == "Down" || e.key == "ArrowDown") {
        Keys.downPressed = false;
    }
}
