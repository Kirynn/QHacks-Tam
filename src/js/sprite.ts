import { animController } from "@js/controllers/animController";
import { animData } from "@js/animData";
import { Guid } from "./GUID";

export class sprite {

    public GUID: string;

    protected position: Array<number>;
    protected name: string;
    protected animController: animController;
    protected flags: Array<string>;

    public hitbox: Array<number> | undefined | null;

    constructor(name: string, animData: animData, flags?: Array<string>, position?: Array<number>, hitbox: boolean = false) {

        this.GUID = Guid.newGuid();
        ENGINE.sprites[this.GUID] = this;

        this.flags = flags ?? [];

        if (flags) {

            flags.forEach(flag => {
                if (ENGINE.flags[flag] == null) {
                    ENGINE.flags[flag] = Array<string>();
                }
                ENGINE.flags[flag].push(this.GUID);
            });
        }

        this.animController = new animController(animData);
        this.position = position ?? [0, 0];
        this.name = name;
        if (hitbox == true || this.flags.includes('collider')) {
            this.hitbox = [
                this.position[0],
                this.position[1],
                this.animController.animData.size[0] + this.position[0],
                this.animController.animData.size[1] + this.position[1]
            ]
        }
    }

    update(): void {

        RENDERER.drawSprite(this.animController.sheet,
            this.animController.slicePos[0], this.animController.slicePos[1],
            this.animController.animData.size[0], this.animController.animData.size[1],
            this.position[0], this.position[1],
            this.animController.animData.size[0], this.animController.animData.size[1]);
        this.animController.update();
    }

    updateHitBox() {
        if (this.hitbox) {
            this.hitbox = [
                this.position[0],
                this.position[1],
                this.animController.animData.size[0] + this.position[0],
                this.animController.animData.size[1] + this.position[1]
            ]
        }
    }

    isCollision = (hitbox2: Array<number>) => {
        if (this.hitbox == null || this.hitbox == undefined) {
            return false;
        }
        if (this.hitbox[0] < hitbox2[0] + hitbox2[2] &&
            this.hitbox[0] + this.hitbox[2] > hitbox2[0] &&
            this.hitbox[1] < hitbox2[1] + hitbox2[3] &&
            this.hitbox[1] + this.hitbox[3] > hitbox2[1]) {
            console.log(true);
            return true;
        }
    }

    protected isInside(x: number, y: number) {

        let pos = ENGINE.toCanvasPos(x, y);
        x = pos[0];
        y = pos[1];

        if (this.hitbox) {

            return (this.hitbox[0] <= x && x <= this.hitbox[2] && this.hitbox[1] <= y && y <= this.hitbox[3]);
        }

        throw new Error("This object has no hitbox");
    }
}