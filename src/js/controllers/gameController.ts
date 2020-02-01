import {tamController} from "./tamController";
import {animController} from "./animController";

export class gameController {

    tams: Array<tamController> = [];

    constructor() {

    }

    addTam(tam: tamController) {
        this.tams.push(tam);
    }

    updateTam() {
        this.tams[0].updateHealth(10);
        this.tams[0].updateHappiness(10);
    }

    moveTam() {
        this.tams[0].moveLeft(5);
        this.tams[0].moveRight(5);
        this.tams[0].jump(5);
        this.tams[0].crouch(5);
    }

    updateStateTam() {

    }

    deceaseTam(){
        this.tams.shift();
    }

    nameTam(){
        this.tams[0].updateName(name);
    }
}