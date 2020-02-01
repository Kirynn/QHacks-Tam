import { animController } from "./controllers/animController";
import { animData } from "./animData";

export class sprite {

    animController : animController;
    position : Array<number>;
    name: string;

    constructor(name : string, position : Array<number> | undefined, animData: animData) {
        this.animController = new animController(animData);
        this.position = position ?? [0, 0];
        this.name = name;
    }

    update() : void { 
        this.animController.update();
    }
}