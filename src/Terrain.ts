const TILE_SIZE = 40;

export default class Terrain {
    private color: string;
    private dimensions: { w: number; h: number };

    constructor(
        color: string,
        width: number = TILE_SIZE,
        height: number = TILE_SIZE
    ) {
        this.color = color;
        this.dimensions = { w: width, h: height };
    }

    getInfo() {
        return { color: this.color, dimensions: this.dimensions };
    }

    render(ctx: CanvasRenderingContext2D, x: number, y: number) {
        ctx.beginPath();
        ctx.rect(x, y, this.dimensions.w, this.dimensions.h);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
