var canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
var ctx = <CanvasRenderingContext2D> canvas.getContext("2d");

function render() {
    ctx;

    ctx.beginPath();
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}
setInterval(render, 10);

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept();
}