import {gameController} from '@js/controllers/gameController'

function canvas () {
    var canvas: any = document.querySelector('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    var c = canvas.getContext('2d');

    //test
    c.beginPath(); //start line
    c.moveTo(50, 300); 
    c.lineTo(300, 100);
    c.strokeStyle = "rgba(255, 0, 0, 0.5)";
    c.stroke();   //actually get line

    return canvas;
}

let can : HTMLCanvasElement = canvas();
const GAME : gameController = new gameController(can);
var RENDERER = can;