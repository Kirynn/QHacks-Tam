import * as path from 'path';
import { animData, animation } from '@js/animData';

export class animController {

    sheet: HTMLImageElement;
    animData: animData;
    slicePos: Array<number> = [0, 0];
    curFrame: number = 0;
    curAnim: animation;
    nextAnim: string;

    constructor(data: animData) {

        this.animData = data;
        this.sheet = new Image();
        this.sheet.src = path.resolve('src/assets/', this.animData.filepath);

        this.curAnim = Object.values(this.animData.animations)[0];
        this.slicePos = this.curAnim.start;
        this.nextAnim = this.curAnim.name;
    }

    private getAnimByIndex(i: number): animation {

        return Object.values(this.animData.animations)[i];
    }

    update(): void {

        if (ENGINE.frameCount % 4 == 0) {
            this.curFrame++;
            this.slicePos[0] = this.curFrame * this.animData.spacing;

            if (this.curFrame >= this.curAnim.frames) {

                this.curAnim = this.animData.animations[this.nextAnim];
                this.slicePos = this.curAnim.start;
                this.nextAnim = this.getAnimByIndex(0).name;
                this.curFrame = 0;
            }
        }
    }
}