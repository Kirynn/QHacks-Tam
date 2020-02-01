import {tamController} from "./tamController";
import testchar from '@assets/testchar.json';
import heartSpriteSheet from '@assets/heartSpriteSheet.json';
import { renderer } from "@js/renderer";
import { debug } from "@js/debug";
import { uiController } from "./uiController";
import { UITextElement } from "@js/UI/uiElements";
import { sprite } from "@js/sprite";

export class gameController {

    flags: {[name : string]: Array<string>} = {};
    sprites: {[guid : string] : sprite} = {};

    tams : Array<tamController> = [];
    animHandle : number = 0;
    drawCount : number =  0;
    checkinTime : number = 5;

    public RENDERER: renderer;
    public DEBUG: debug;
    public UI: uiController;

    constructor() {

        this.RENDERER = new renderer();
        this.DEBUG = new debug();
        this.UI = new uiController();
    }

    runGame() : void {

        new tamController('tam', testchar, ['test']);
        this.UI.addElement(new UITextElement([150, 100], "Hello There!"));

        setInterval(this.simulate, 1000/120);
        setInterval(this.checkin, 1000 * this.checkinTime);
    }

    private checkin = () : void => {

        DEBUG.log(`${this.checkinTime} has passed`)
    }

    public draw = () : void => {

        this.RENDERER.clear();

        Object.values(this.sprites).forEach(sprite => {
            sprite.update();
        });

        this.UI.updateUI();

        this.drawCount < 30 ? this.drawCount++ : this.drawCount = 0;
    }

    private simulate = () : void => {

        if (Math.random() * 1000 > 800) {
            this.flags["test"].forEach(GUID => {

                let curSprite = this.sprites[GUID];

                Object.entries(this.sprites).forEach((KeyValuePair) {
                    if (GUID != KeyValuePair[0]) {
                        curSprite.isCollision(KeyValuePair[1]);
                    }
                })
            });
            cancelAnimationFrame(this.animHandle);
            this.animHandle = requestAnimationFrame(this.draw);
        }
    }

    addTam(tam: tamController) : void {
        this.tams.push(tam);
    }

    updateTam() : void {
        // this.tams[0].updateHealth(10);
        // this.tams[0].updateHappiness(10);
    }

    moveTam() : void {
        // this.tams[0].moveLeft(5);
        // this.tams[0].moveRight(5);
        // this.tams[0].jump(5);
        // this.tams[0].crouch(5);
    }

    updateStateTam() : void {

    }

    deceaseTam() : void {
        this.tams.shift();
    }

    nameTam() : void {
        this.tams[0].updateName(name);
    }
}