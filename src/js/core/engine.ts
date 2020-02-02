import { tam } from "@js/objects/tam";
import { renderer } from "@js/core/renderer";
import { debug } from "@js/core/debug";
import { ui } from "./ui";
import { UITextElement } from "@js/ui/uiElements";
import { sprite } from "@js/core/sprite";
import { apple } from "@js/objects/apple";
import { collison } from "@js/events/events";

import testchar from '@assets/testchar.json';
import heartSpriteSheet from '@assets/heartSpriteSheet.json';
import catCrouchSpriteSheet from '@assets/catCrouchSpriteSheet.json';
import appleFile from '@assets/apple.json';
import { cursorTo } from "readline";
import { EngineError } from "@js/errors/engineError";

export class engine {

    flags: { [name: string]: Array<string> } = {};
    sprites: { [guid: string]: sprite } = {};

    tams: Array<tam> = [];
    animHandle: number = 0;
    frameCount: number = 0;
    checkinTime: number = 5;

    private intervals: Array<NodeJS.Timeout> = [];

    public RENDERER: renderer;
    public DEBUG: debug;
    public UI: ui;

    constructor() {

        this.RENDERER = new renderer();
        this.DEBUG = new debug();
        this.UI = new ui();
    }

    runGame(): void {

        let t1 = new tam('tam', heartSpriteSheet, ['checker', 'collider', 'clickable']);
        this.tams.push(t1);

        let t2 = new tam('tam', catCrouchSpriteSheet, ['checker', 'collider', 'clickable']);
        this.tams.push(t2);

        this.UI.addElement(new UITextElement("happiness", [300, 50], `Happiness: ${this.tams[0].happiness}`));
        this.UI.addElement(new UITextElement("health", [300, 75], `Health: ${this.tams[0].health}`));
        this.UI.addElement(new UITextElement("poop", [300, 100], `Waste: ${this.tams[0].poop}`));

        new apple('apple1', appleFile, ['collider', 'draggable', 'food'], [250,250]);

        this.intervals.push(setInterval(this.simulate, 1000 / 120));
        this.intervals.push(setInterval(this.checkin, 1000 * this.checkinTime));
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
        RENDERER.context.rect(this.RENDERER.canvas.width - 5, this.RENDERER.canvas.height - 5, this.RENDERER.canvas.width, this.RENDERER.canvas.height);
        this.RENDERER.context.stroke();

        this.frameCount < 30 ? this.frameCount++ : this.frameCount = 0;
    }

    private simulate = (): void => {
        try {
            if (Math.random() * 1000 > 800) {

                if (Object.keys(this.flags).includes("checker")) {
                    this.flags["checker"].forEach(GUID => {

                        let curSprite = this.sprites[GUID];

                        if (curSprite === undefined) {
                            throw new EngineError("curSprite was set to undefined");
                        }

                        Object.entries(this.sprites).filter(tuple => tuple[1].hitbox).forEach((KeyValuePair) => {
                            if (GUID != KeyValuePair[0]) {
                                if (KeyValuePair[1].hitbox != null) {
                                    if (curSprite.isCollision(KeyValuePair[1])) {
                                        if (typeof (curSprite as unknown as collison)['onCollison'] === 'function') {
                                            (curSprite as unknown as collison).onCollison(KeyValuePair[1]);
                                        }
                                    }
                                }
                            }
                        });
                    });
                    cancelAnimationFrame(this.animHandle);
                    this.animHandle = requestAnimationFrame(this.draw);
                }
            }
        }

        catch (error) {
            if (error instanceof EngineError) {

                console.error(error.message);
                console.log(ENGINE);

                this.intervals.forEach(loop => {
                    clearInterval(loop);
                });
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

    public registerDraggable(GUID: string, funcUp: Function, funcMove: Function, funcDown: Function) {

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

    public toCanvasPos(x: number, y: number) {

        return [x - this.RENDERER.canvas.offsetLeft, y - this.RENDERER.canvas.offsetTop]
    }

    public destory(guid: string): void {

        delete this.sprites[guid];
    }

    addTam(tam: tam): void {
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