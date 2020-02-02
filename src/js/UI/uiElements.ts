export abstract class UIElement {

    public name : string;
    public position : Array<number>; 

    constructor(name : string, position : Array<number>) {

        this.name = name;
        this.position = position;
    }

    abstract draw() : void;
}

export class UITextElement extends UIElement {

    public font : string = '30px Comic Sans';
    public text : string = ''
   
    constructor(name : string, position : Array<number>, text : string, font ?: string) {

        super(name, position);

        if (font) {
            this.font = font;
        }
        this.text = text;
        
    }

    draw() : void {
        
        RENDERER.drawText(this.position, this.text, this.font)
    }
}

export class UIImageElement extends UIElement {

    constructor(name : string, position : Array<number>) {

        super(name, position)
    }

    draw() : void {

    }
}