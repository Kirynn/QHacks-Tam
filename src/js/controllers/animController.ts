import * as path from 'path';
import * as fs from 'fs';
import { animData } from '@js/animData';

export class animController {

    sheet: HTMLImageElement;
    animData: animData;

    constructor(data: animData) {

        console.log('__dirname: ' + __dirname);
        console.log(path.resolve(__dirname, 'src/assets/', data.filepath));

        this.animData = data;
        this.sheet = new Image()
        this.sheet.src = path.resolve(__dirname, 'src/assets/', this.animData.filepath);
    }
}