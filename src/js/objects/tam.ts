import { sprite } from '@js/core/sprite';
import { animData } from '@js/types/animationData';
import { clickable, collison } from '@js/events/events';

export class tam extends sprite implements clickable, collison {

    /**
     * Happiness & Health start at 100 and go down
     */
    happiness: number = 90;
    health: number = 100;
    poop: number = 0;
    animList: Array<string>;

    constructor(name: string, animData: animData, flags?: Array<string>, position?: Array<number>) {
        super(name, animData, flags, position);

        this.animList = Object.keys(animData.animations);

        if (flags?.includes('clickable')) {
            ENGINE.registerClickable(this.GUID, this.onClick);
        }
    }

    setAnimation(name: string): void {

        if (this.animList.includes(name)) {

            super.animator.nextAnim = name;
        }

        else {

            throw new Error(`There is no animation called ${name}`);
        }
    }

    updateName(s: string) {
        super.name = s;
        /**
         * happy animation
         */
    }
    updateHealth(i: number) {
        var heal: number = i + this.health;
        if (heal <= 100) {
            this.health = heal;
        }
        if (Math.sign(i) == 1) {
            /**
             * Start happy animation?
             */
        } else {
            /**
             * sad animation?
             */
        }
    }

    updateHappiness(i: number) {
        let happy: number = i + this.happiness;
        if (happy <= 100) {
            this.happiness = happy;
        }
        if (Math.sign(i) == 1) {
            /**
             * Start happy animation?
             */
        } else {
            /**
             * sad animation?
             */
        }

        dispatchEvent(new CustomEvent("updateText", {
            detail: {
                "name": "happiness",
                "value": `Happiness ${this.happiness}`
            }
        }));
    }

    updatePoop(time: number) {
        if (time % 20 == 0) {
            this.poop++;
        }
        if (this.poop > 5) {
            this.updateHealth(-4);
            this.updateHappiness(-2);
        }
    }

    idleState(time: number) {
        /**
         * Start idle animation?
         */
        if (time % 10 == 0) {
            this.updateHealth(-3);
        }
        if (time % 5 == 0) {
            this.updateHappiness(-5);
        }
    }

    happyState(time: number) {
        /**
         * Start happy animation?
         */
        if (time % 10 == 0) {
            this.updateHealth(2);
        }
        if (time % 5 == 0) {
            this.updateHappiness(5);
        }
    }

    sadState(time: number) {
        /**
         * Start sad/sick animation?
         */
        if (time % 10 == 0) {
            this.updateHealth(-5);
        }
        if (time % 5 == 0) {
            this.updateHappiness(-8);
        }
    }

    onClick = (event: MouseEvent): Boolean => {

        if (this.flags && this.flags.includes('collider') && this.hitbox != null) {
            let canvaspos : Array<number> = ENGINE.toCanvasPos(event.pageX, event.pageY);
            return this.isInside(canvaspos[0], canvaspos[1]);

        }
        return false;

    }

    onCollison(collisonSprite : sprite) : void {

        console.log(`collided with ${collisonSprite.name}`);
        if (collisonSprite.flags.includes('food')) {
            this.updateHappiness(10);
            ENGINE.destory(collisonSprite.GUID);
        }
    }
}