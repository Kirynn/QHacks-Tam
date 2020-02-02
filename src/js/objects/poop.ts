import { sprite } from "@js/core/sprite";
import { draggable } from "@js/events/events";
import { animData } from "@js/types/animationData";

export class poop extends sprite implements draggable {

    dragging: boolean = false;

    constructor(name: string, animData: animData, flags?: Array<string>, position?: Array<number>) {
        super(name, animData, flags, position);

        if (flags?.includes('draggable')) {
            ENGINE.registerDraggable(this.GUID, this.onMouseUp, this.onMouseMove, this.onMouseDown);
        }
    }

    onMouseDown = (event: MouseEvent) => {

        if (this.isInside(event.pageX, event.pageY)) {

            this.dragging = true;
        }
    }

    onMouseMove = (event: MouseEvent) => {
        if (this.dragging) {
            this.position = ENGINE.toCanvasPos(event.pageX, event.pageY);
            this.updateHitBox();
        }
    }

    onMouseUp = (event: MouseEvent) => {

        if (this.dragging) {
            DEBUG.log("moues up");
            this.dragging = false;
        }
    }
}