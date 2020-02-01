import * as path from 'path';
import { animData, animation } from '@js/animData';

export class animController {

    sheet: HTMLImageElement;
    animData: animData;
    curFrame: number = 0;
    curAnim: animation;
    nextAnim: string;

    constructor(data: animData) {

        this.animData = data;
        this.sheet = new Image();
        this.sheet.src = path.resolve('src/assets/', this.animData.filepath);

        this.curAnim = Object.values(this.animData.animations)[0];
        this.nextAnim = this.curAnim.name;
    }

    private getAnimByIndex(i : number) : animation {

        return Object.values(this.animData.animations)[i];
        }

    update(): void {

        console.log(window.RENDERER)
       this.curFrame++;

        if (this.curFrame >= this.curAnim.frames) {

            this.curAnim = this.animData.animations[this.nextAnim];
            this.nextAnim = this.getAnimByIndex(0).name;
            this.curFrame = 0;
        }

    }
}