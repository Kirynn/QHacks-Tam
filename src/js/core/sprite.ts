import { animator } from "@js/core/animator";
import { animData } from "@js/types/animationData";
import { Guid } from "@js/utils/GUID";

export class sprite {

    public GUID: string;
    public name: string;
    public hitbox: Array<number> | undefined | null;
    public flags: Array<string>;
    
    protected position: Array<number>;
    protected animator: animator;

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

        this.animator = new animator(animData);
        this.position = position ?? [0, 0];
        this.name = name;
        if (hitbox == true || this.flags.includes('collider')) {
            this.hitbox = [
                this.position[0],
                this.position[1],
                this.animator.animData.size[0] + this.position[0],
                this.animator.animData.size[1] + this.position[1]
            ]
        }
    }

    update(): void {

        RENDERER.drawSprite(this.animator.sheet,
            this.animator.slicePos[0], this.animator.slicePos[1],
            this.animator.animData.size[0], this.animator.animData.size[1],
            this.position[0], this.position[1],
            this.animator.animData.size[0], this.animator.animData.size[1]);
        this.animator.update();
    }

    updateHitBox() {
        if (this.hitbox) {
            this.hitbox = [
                this.position[0],
                this.position[1],
                this.animator.animData.size[0] + this.position[0],
                this.animator.animData.size[1] + this.position[1]
            ]
        }
    }

    isCollision = (sprite: sprite) => {
        if (this.hitbox == null || this.hitbox == undefined) {
            throw new Error('One or more hitboxes are not defined');
        }

        let hitbox2 = sprite.hitbox;

        return (
            hitbox2 && 
            this.hitbox[0] < hitbox2[0] + hitbox2[2] &&
            this.hitbox[0] + this.hitbox[2] > hitbox2[0] &&
            this.hitbox[1] < hitbox2[1] + hitbox2[3] &&
            this.hitbox[1] + this.hitbox[3] > hitbox2[1]
        )
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