import {tamController} from "./tamController";

export class gameController {

    tams: Array<tamController> = [];

    constructor() {

    }

    addTam(tam: tamController) {
        this.tams.push(tam);
    }

    updateTam() {
        this.tams[0].updateHealth(10);
    }
}