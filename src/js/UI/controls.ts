import { apple } from "@js/objects/apple";
import appleFile from '@assets/apple.json';

export class controls{
    constructor(){
        let button = document.getElementById("feedButton");
        button?.addEventListener("click", (e:Event) => this.addMoreFood());
    }

    addMoreFood(){
        new apple('apple2', appleFile, ['collider', 'draggable', 'food'], [600, 300]);
    }
}