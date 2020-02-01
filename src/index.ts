import {gameController} from '@js/controllers/gameController'
import { animController } from "@js/controllers/animController";
import {renderer} from '@js/renderer';
import testchar from '@assets/testchar.json';

let animCtrl : animController = new animController(testchar);

console.log("trying to add image");

let el = document.createElement('img');
el.src = animCtrl.sheet.src;

document.getElementById("app")?.appendChild(el);
// const animCtrl = new animController(testchar);

// function canvas () {
//     var canvas: any = document.querySelector('canvas');
    
//     //load image
//     let el = document.createElement('img');
//     el.src = animCtrl.sheet.src;
    
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
    
//     var c = canvas.getContext('2d');

//     c.fillText("My Tamagachi", 540,280);

//     //draw image on canvas
//     el.onload = function() {
//         c.drawImage(el, 0,0, 70, 100, 500, 20, 150, 250); //cutting the image into different pieces
//         //open image in paint and figure out actual dimensions
//     }
    
//     return canvas;
// }

//let can : HTMLCanvasElement = canvas();
var RENDERER = new renderer();
window.RENDERER = RENDERER;
const GAME : gameController = new gameController(RENDERER);
