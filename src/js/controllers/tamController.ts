import {gameController} from "./gameController";

export class tamController {

    health: Number = 0;
    animcntrl: gameController;
    

    constructor() {

    }

    updateHealth(i:number) {
        this.health = i;
    }
}