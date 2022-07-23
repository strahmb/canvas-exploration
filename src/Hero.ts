const HERO_SIZE = 40;

export default class Hero {
    private color: string;
    private dimensions: { x: number; y: number; w: number; h: number };

    constructor(
        color: string,
        x: number = 0,
        y: number = 0,
        width: number = HERO_SIZE,
        height: number = HERO_SIZE
    ) {
        this.color = color;
        this.dimensions = { x: x, y: y, w: width, h: height };
    }

    getInfo() {
        return { color: this.color, dimensions: this.dimensions };
    }

    setDimensions(dim: { x: number; y: number; w: number; h: number }) {
        this.dimensions = dim;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.rect(
            this.dimensions.x,
            this.dimensions.y,
            this.dimensions.w,
            this.dimensions.h
        );
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
