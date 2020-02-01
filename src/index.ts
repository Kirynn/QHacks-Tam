import {animController} from './js/controllers/animController';
import * as path from 'path';
import testchar from '@assets/testchar.json';

let animCtrl : animController = new animController(testchar);

console.log("trying to add image");

let el = document.createElement('img');
el.src = animCtrl.sheet.src;

document.getElementById("app")?.appendChild(el);
