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

        //this.canvas.width = window.innerWidth;
        //this.canvas.height = window.innerHeight;
        this.canvas.width = 500;
        this.canvas.height = 500;

        let context : CanvasRenderingContext2D | null = this.canvas.getContext('2d');

        if (context != null) {

            context.beginPath();
            context.stroke();

            context.fillText("My Tamagachi", 540, 280);
            this.context = context;
        }

        else {
            
            throw Error("No canvas context could be found");
        }
    }

    public drawText(position : Array<number>, text : string, font : string) : void {
        
        this.context.font = font;
        this.context.fillText(text, position[0], position[1]);
    }

    public drawSprite(sheet : HTMLImageElement,
        X1 : number, Y1 : number,
        X2 : number, Y2 : number,
        posX : number, posY : number,
        sizeX : number, sizeY : number) : void {

        this.context.drawImage(sheet, X1, Y1, X2, Y2, posX, posY, sizeX, sizeY);
    }


    public drawImage() : void {

    }

    public clear() : void{

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}