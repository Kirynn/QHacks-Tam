import * as path from 'path';
import * as fs from 'fs';
import { animData } from '@js/animData';

export class animController {

    sheet: HTMLImageElement;
    animData: animData;

    constructor(data: animData) {

        this.animData = data;
        this.sheet = new Image()
        this.sheet.src = path.resolve('src/assets/', this.animData.filepath);
    }
}