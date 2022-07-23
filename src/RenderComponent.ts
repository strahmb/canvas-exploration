export class RenderComponent {
    private id: number;
    private renderFunction: Function;

    constructor(id: number, renderFunction: Function) {
        this.id = id;
        this.renderFunction = renderFunction;
    }

    update(secondsPassed: number) {
        this.renderFunction();
    }
}

export class RenderSystem {
    private components: RenderComponent[];
    private numEntities: number;
    private numActive: number;

    constructor(MAX_ENTITIES) {
        this.components = new Array(MAX_ENTITIES);
        this.numEntities = 0;
        this.numActive = 0;
    }

    add(renderFunction) {
        this.components[this.numEntities] = new RenderComponent(
            this.numEntities,
            renderFunction
        );
        this.numEntities++;
    }

    remove() {
        delete this.components[this.numEntities];
        this.numEntities--;
    }

    clear() {
        const MAX_ENTITIES = this.components.length;
        this.components = new Array(MAX_ENTITIES);
        this.numEntities = 0;
        this.numActive = 0;
    }

    update(secondsPassed: number) {
        for (let i = 0; i <= this.numEntities; i++) {
            this.components[i].update(secondsPassed);
        }
    }
}
