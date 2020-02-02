import { UIElement, UITextElement } from '@js/ui/uiElements';

export interface UpdateText {
    name : string;
}

export class ui {

    private uiElements : {[name : string] : UIElement } = {};

    constructor() {

        //let event = new CustomEvent('updateText', {detail: "name"});

        window.addEventListener('updateText', (event : Event) => {
            const {name, value} = (<CustomEvent>event).detail;
            if (this.uiElements[name]) {
                (this.uiElements[name] as UITextElement).text = value;
            }
        });
    }

    updateUI() : void {

        Object.values(this.uiElements).forEach(el => {
            el.draw();
        });
    }

    addElement(element : UIElement) : void {

        this.uiElements[element.name] = (element);
    }
}