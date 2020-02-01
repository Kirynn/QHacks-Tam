import {tamController} from "./tamController";
import testchar from '@assets/testchar.json';

export class gameController {

    tams: Array<tamController> = [];
    canvas: HTMLCanvasElement;
    animHandle: number = 0;
    drawCount = 0;

    constructor(canvas: HTMLCanvasElement) {

        this.canvas = canvas;
        this.tams.push(new tamController('Tam1', testchar));
        this.runGame();
    }


    runGame() {

        setInterval(this.simulate, 1000/120);
    }

    private draw = () => {

    }

    private simulate = () => {


        if (Math.random() * 1000 > 800) {
            cancelAnimationFrame(this.animHandle);
            this.animHandle = requestAnimationFrame(this.draw);
        }
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