export class renderer {

    context: any;
    canvas: any;

    constructor() {
        this.context = this.init();
    }

    init(): HTMLCanvasElement {
        this.canvas = document.querySelector('canvas');

        //load image
        //let el = document.createElement('img');
        //el.src = animCtrl.sheet.src;

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        var c = this.canvas.getContext('2d');

        c.fillText("My Tamagachi", 540, 280);

        //draw image on canvas
        //el.onload = function () {
            //c.drawImage(el, 0, 0, 70, 100, 500, 20, 150, 250); //cutting the image into different pieces
            //open image in paint and figure out actual dimensions
        //}

        return c;
    }

    public drawImage(sheet : any, X1 : any, Y1 : any, X2 : any, Y2 : any, posX : any, posY : any) {

        this.context.drawImage(sheet, X1, Y1, X2, Y2, posX, posY, 150, 250);
    }
}