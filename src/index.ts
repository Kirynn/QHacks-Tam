import {animController} from './js/controllers/animController';
import testchar from '@assets/testchar.json';

let animCtrl : animController = new animController(testchar);

console.log("trying to add image");

let el = document.createElement('img');
el.src = animCtrl.sheet.src;

document.getElementById("app")?.appendChild(el);

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


}

canvas();

console.log("hi");
