import { animController } from "@js/controllers/animController";
import { animData } from "@js/animData";
import { Guid } from "./GUID";

export class sprite {

    public GUID : string;
    
    private position : Array<number>;
    
    protected name: string;
    protected animController : animController;

    constructor(name : string, animData: animData, position ?: Array<number>) {

        this.GUID = Guid.newGuid();

        this.animController = new animController(animData);
        this.position = position ?? [0, 0];
        this.name = name;
    }

    update() : void {

        if (ENGINE.drawCount % 4 == 0) {
            RENDERER.drawImage(this.animController.sheet,
                this.animController.slicePos[0], this.animController.slicePos[1],
                this.animController.animData.size[0], this.animController.animData.size[1],
                this.position[0], this.position[1]);
        this.animController.update();
        }
    }
}