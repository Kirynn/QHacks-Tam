import { animController } from "./animController";

export class tamController {

    health: Number = 0;
    animController: animController;

    constructor(animController: animController) {
        this.animController = animController;
    }

    updateHealth(i:number) {
        this.health = i;
    }
}