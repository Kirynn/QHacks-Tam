import {gameController} from "./gameController";

export class tamController {

   
    /**
     * Happiness & Health start at 100 and go down
     */
    happiness: number = 100;
    health: number = 100;
    poop: number = 0;
    name: string;
    animcntrl: gameController;
    

    constructor() {

    }
    updateName(name: string){
        this.name = name;
        /**
         * happy animation
         */
    }
    updateHealth(i:number) {
        var heal:number = i + this.health;
        if (heal <= 100){
            this.health = heal;
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

    updatePoop(i:number){
        this.poop += i;
        /**
         * poo animation
         */
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

    happyState(time:number){
        /**
         * Start happy animation?
         */
        if(time%10==0){
            this.updateHealth(2);
        }
        if(time%5==0){
            this.updateHappiness(5);
        }
    }

    sadState(time:number){
        /**
         * Start sad/sick animation?
         */
        if(time%10==0){
            this.updateHealth(-5);
        }
        if(time%5==0){
            this.updateHappiness(-8);
        }
    }

    poop(time:number){
        if(time%20==0){
            this.poop++;
        }
        if(this.poop > 5){
            this.updateHealth(-4);
            this.updateHappiness(-2);
        }
    }


}