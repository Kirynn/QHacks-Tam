export abstract class UIElement {

    public position : Array<number>; 

    constructor(position : Array<number>) {

        this.position = position;
    }

    abstract draw() : void;
}

export class UITextElement extends UIElement {

    private font : string = '30px Arial';
    private text : string = ''

    constructor(position : Array<number>, text : string, font : string | undefined) {

        super(position);
        if (font) {
            this.font = font;
        }
        this.text = text;
    }

    draw() : void {
        
        RENDERER.drawText(this.position, this.text, this.font)
    }

}