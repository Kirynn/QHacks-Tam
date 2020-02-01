import { tamController } from "./tamController";
import { renderer } from "@js/renderer";
import { debug } from "@js/debug";
import { uiController } from "./uiController";
import { UITextElement } from "@js/UI/uiElements";
import { sprite } from "@js/sprite";
import { apple } from "@js/objects/apple";

import testchar from '@assets/testchar.json';
import heartSpriteSheet from '@assets/heartSpriteSheet.json';
import appleFile from '@assets/apple.json';

export class gameController {

    flags: { [name: string]: Array<string> } = {};
    sprites: { [guid: string]: sprite } = {};

    tams: Array<tamController> = [];
    animHandle: number = 0;
    frameCount: number = 0;
    checkinTime: number = 5;

    public RENDERER: renderer;
    public DEBUG: debug;
    public UI: uiController;

    constructor() {

        this.RENDERER = new renderer();
        this.DEBUG = new debug();
        this.UI = new uiController();
    }

    runGame(): void {

        let t1 = new tamController('tam', testchar, ['collider', 'clickable']);
        this.tams.push(t1);
        this.UI.addElement(new UITextElement([150, 100], `Happiness: ${this.tams[0].happiness}`));

        new apple('apple1', appleFile, ['collider', 'draggable'], [500, 500]);

        setInterval(this.simulate, 1000 / 120);
        setInterval(this.checkin, 1000 * this.checkinTime);
    }

    private checkin = (): void => {

        DEBUG.log(`${this.checkinTime} has passed`)
    }

    public draw = (): void => {

        this.RENDERER.clear();

        Object.values(this.sprites).forEach(sprite => {
            sprite.update();
        });

        this.UI.updateUI();

        this.RENDERER.context.beginPath();
        RENDERER.context.strokeStyle = "red";
        this.RENDERER.context.fillStyle = 'red';
        RENDERER.context.rect(0, 0, 5, 5);
        this.RENDERER.context.stroke();
        
        this.RENDERER.context.beginPath();
        RENDERER.context.strokeStyle = "red";
        this.RENDERER.context.fillStyle = 'red';
        RENDERER.context.rect(this.RENDERER.canvas.width-5, this.RENDERER.canvas.height-5, this.RENDERER.canvas.width, this.RENDERER.canvas.height);
        this.RENDERER.context.stroke();

        this.frameCount < 30 ? this.frameCount++ : this.frameCount = 0;
    }

    private simulate = (): void => {

        if (Math.random() * 1000 > 800) {

            if (Object.keys(this.flags).includes("collider")) {
                this.flags["collider"].forEach(GUID => {

                    let curSprite = this.sprites[GUID];

                    Object.entries(this.sprites).filter(tuple => tuple[1].hitbox).forEach((KeyValuePair) => {
                        if (GUID != KeyValuePair[0]) {
                            if (KeyValuePair[1].hitbox != null) {
                                let x = curSprite.isCollision(KeyValuePair[1].hitbox);
                                console.log(x);
                            }
                        }
                    });
                });
                cancelAnimationFrame(this.animHandle);
                this.animHandle = requestAnimationFrame(this.draw);
            }
        }
    }

    public registerClickable(GUID: string, func: Function) {

        if (this.flags['clickable'].includes(GUID)) {
            this.RENDERER.canvas.addEventListener('click', (event) => {
                func(event);
            });
        }
    }

    public registerDraggable(GUID : string, funcUp : Function, funcMove : Function, funcDown : Function) {

        if (this.flags['draggable'].includes(GUID)) {
            RENDERER.canvas.addEventListener('mouseup', (event) => {
                funcUp(event);
            });
            RENDERER.canvas.addEventListener('mousemove', (event) => {
                funcMove(event);
            });
            RENDERER.canvas.addEventListener('mousedown', (event) => {
                funcDown(event);
            });
        }
    }

    public toCanvasPos(x : number, y : number) {

        return [x - this.RENDERER.canvas.offsetLeft, y - this.RENDERER.canvas.offsetTop]
    }

    addTam(tam: tamController): void {
        this.tams.push(tam);
    }

    updateTam(): void {
        // this.tams[0].updateHealth(10);
        // this.tams[0].updateHappiness(10);
    }

    moveTam(): void {
        // this.tams[0].moveLeft(5);
        // this.tams[0].moveRight(5);
        // this.tams[0].jump(5);
        // this.tams[0].crouch(5);
    }

    updateStateTam(): void {

    }

    deceaseTam(): void {
        this.tams.shift();
    }

    nameTam(): void {
        this.tams[0].updateName(name);
    }
}