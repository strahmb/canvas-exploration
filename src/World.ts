import { RenderSystem } from "./RenderComponent";

export default class World {
    private MAX_ENTITIES = 100;
    HeroId = 0;

    RenderSystem = new RenderSystem(this.MAX_ENTITIES);
}
