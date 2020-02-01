import {gameController} from "./gameController";

export class tamController {

   
    /**
     * Happiness & Health start at 100 and go down
     */
    happiness: number = 100;
    health: number = 100;
    animcntrl: gameController;
    

    constructor() {

    }

    updateHealth(i:number) {
        var heal:number = i + this.health;
        if (heal <= 100){
            this.health = heal;
        }
    }

    updateHappiness(i: number){
        var happy:number = i + this.happiness;
        if (happy <= 100){
            this.happiness = happy;
        }
        if (Math.sign(i) == 1){
            /**
             * Start happy animation?
             */
        }else{
            /**
             * sad animation?
             */
        }
       
    }

    idleState(time: number){
        /**
         * Start idle animation?
         */
        if(time%10==0){
            this.updateHealth(-3);
        }
        if(time%5==0){
            this.updateHappiness(-5);
        }

        
    }

}