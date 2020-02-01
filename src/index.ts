import {gameController} from '@js/controllers/gameController'

var ENGINE : gameController = new gameController();

window.ENGINE = ENGINE;

window.RENDERER = ENGINE.RENDERER;
window.DEBUG = ENGINE.DEBUG;

ENGINE.runGame();