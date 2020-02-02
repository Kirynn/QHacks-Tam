import {engine} from '@js/core/engine'

var ENGINE : engine = new engine();

window.ENGINE = ENGINE;

window.RENDERER = ENGINE.RENDERER;
window.DEBUG = ENGINE.DEBUG;

ENGINE.runGame();