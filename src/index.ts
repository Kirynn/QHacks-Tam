import {gameController} from '@js/controllers/gameController'
import {renderer} from '@js/renderer';
import { debug } from '@js/debug';

var RENDERER = new renderer();
var GAME : gameController = new gameController(RENDERER);
var DEBUG : debug = new debug();

window.RENDERER = RENDERER;
window.ENGINE = GAME;
window.DEBUG = DEBUG;