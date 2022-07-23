import Hero from "./Hero";
import { setupEventHandlers } from "./InputComponent";
import Terrain from "./Terrain";
import World from "./World";

var canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
var ctx = <CanvasRenderingContext2D>canvas.getContext("2d");

// Initialize
let world = new World();
setupScene(world);
setupEventHandlers();

// Game loop
let secondsPassed = 0;
let oldTimestamp = 0;
function gameLoop(timestamp) {
    // Handle time
    secondsPassed = (timestamp - oldTimestamp) / 1000;
    oldTimestamp = timestamp;

    // Process input. Handled by the browser and callbacks?

    // Update

    // Render
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    world.RenderSystem.update(secondsPassed);

    requestAnimationFrame(gameLoop);
}
// setInterval(gameLoop, 1000 / FPS);
requestAnimationFrame(gameLoop);

function setupScene(world: World) {
    let wallTerrain = new Terrain("#999");
    let grassTerrain = new Terrain("#aaffaa");

    let level = [
        [
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
        ],
        [
            wallTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            wallTerrain,
        ],
        [
            wallTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            wallTerrain,
        ],
        [
            wallTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            wallTerrain,
        ],
        [
            wallTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            wallTerrain,
        ],
        [
            wallTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            wallTerrain,
        ],
        [
            wallTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            grassTerrain,
            wallTerrain,
        ],
        [
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
            wallTerrain,
        ],
    ];

    level.forEach((column, i) =>
        column.forEach((tile, j) =>
            world.RenderSystem.add(() => {
                tile.render(
                    ctx,
                    j * tile.getInfo().dimensions.w,
                    i * tile.getInfo().dimensions.h
                );
            })
        )
    );

    let hero = new Hero("red", 120, 120);
    world.RenderSystem.add(() => hero.render(ctx));
}

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept();
}
