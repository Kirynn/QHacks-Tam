import { debug } from "./debug";

export class renderer {

    context: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;

    constructor() {
        
        let canvas = document.querySelector('canvas');

        if (canvas != null) {
            this.canvas = canvas;
        }
        
        else {
            
            throw Error("No canvas found");
        }

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        let context : CanvasRenderingContext2D | null = this.canvas.getContext('2d');

        if (context != null) {

            context.fillText("My Tamagachi", 540, 280);
            this.context = context;
        }

        else {
            
            throw Error("No canvas context could be found");
        }
    }

    public drawText(position : Array<number>, text : string, font : string) {
        
        this.context.font = font;
        this.context.fillText(text, position[0], position[1]);
    }

    public drawImage(sheet : any, X1 : any, Y1 : any, X2 : any, Y2 : any, posX : any, posY : any) {

        this.context.drawImage(sheet, X1, Y1, X2, Y2, posX, posY, 150, 250);
    }

    public clear() {

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}