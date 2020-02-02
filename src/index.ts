import {gameController} from '@js/core/engine'

var ENGINE : gameController = new gameController();

window.ENGINE = ENGINE;

window.RENDERER = ENGINE.RENDERER;
window.DEBUG = ENGINE.DEBUG;

ENGINE.runGame();