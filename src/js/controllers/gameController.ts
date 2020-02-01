import {tamController} from "./tamController";
import testchar from '@assets/testchar.json';

import { renderer } from "@js/renderer";
import { debug } from "@js/debug";
import { uiController } from "./uiController";


export class gameController {

    
    

    tams : Array<tamController> = [];
    animHandle : number = 0;
    drawCount : number =  0;
    checkinTime : number = 5;
    flags = Array<string>;

    public RENDERER: renderer;
    public DEBUG: debug;
    public UI: uiController;

    constructor() {

        this.tams.push(new tamController('Tam1', testchar));
        this.flags.push({
            key: "Tam1", 
            value: "collide"
        });
        this.runGame();

        this.RENDERER = new renderer();
        this.DEBUG = new debug();
        this.UI = new uiController();
    }


    runGame() {

        setInterval(this.simulate, 1000/120);
        setInterval(this.checkin, 1000 * this.checkinTime);
    }

    private checkin = () => {

        DEBUG.log(`${this.checkinTime} has passed`)
    }

    private draw = () => {
        this.tams.forEach(tam => {
            tam.update();
        });
        this.drawCount < 30 ? this.drawCount++ : this.drawCount = 0;
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
        // this.tams[0].updateHealth(10);
        // this.tams[0].updateHappiness(10);
    }

    moveTam() {
        // this.tams[0].moveLeft(5);
        // this.tams[0].moveRight(5);
        // this.tams[0].jump(5);
        // this.tams[0].crouch(5);
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