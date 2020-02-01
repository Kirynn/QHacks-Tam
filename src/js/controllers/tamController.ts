import {gameController} from "./gameController";

export class tamController {

   
    /**
     * Happiness start at 100 and go down
     */
    happiness: number = 100;
    health: number = 0;
    animcntrl: gameController;
    

    constructor() {

    }

    updateHealth(i:number) {
        this.health = i;
    }

    updateHappiness(i: number){
        var happy:number = i + this.happiness;
        if (happy <= 100){
            this.happiness = happy;
        }
       
    }
    
}