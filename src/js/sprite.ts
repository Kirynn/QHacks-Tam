import { animController } from "@js/controllers/animController";
import { animData } from "@js/animData";

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

        if (window.RENDERER.drawCount % 4 == 0) {
        window.RENDERER.drawImage(this.animController.sheet, this.animController.slicePos[0], 0, this.animController.animData.size[0], this.animController.animData.size[1], this.position[0], this.position[1]);
        this.animController.update();
        }
    }
}