import { apple } from "@js/objects/apple";
import appleFile from '@assets/apple.json';

export class controls{
    constructor(){
        let button = document.getElementById("feedButton");
        button?.addEventListener("click", (e:Event) => this.addMoreFood());
    }

    addMoreFood(){
        new apple('apple1', appleFile, ['collider', 'draggable', 'food'], [500, 500]);
    }
}