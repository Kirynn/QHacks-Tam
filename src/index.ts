import {animController} from './js/controllers/animController';
import testchar from '@assets/testchar.json';

let animCtrl : animController = new animController(testchar);



function canvas () {
    var canvas: any = document.querySelector('canvas');
    
    //load image
    let el = document.createElement('img');
    el.src = animCtrl.sheet.src;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    var c = canvas.getContext('2d');

    c.fillText("My Tamagachi", 540,280);

    //draw image on canvas
    el.onload = function() {
        c.drawImage(el, 0,0, 70, 100, 500, 20, 150, 250); //cutting the image into different pieces
        //open image in paint and figure out actual dimensions
    }
    
}

canvas();

console.log("hi");
