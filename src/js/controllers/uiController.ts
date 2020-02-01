import { UIElement } from '@js/UI/uiElements';

export class uiController {

    private uiElements : Array<UIElement> = [];

    constructor() {

    }

    updateUI() : void {

        this.uiElements.forEach(el => {
            el.draw();
        });
    }

    addElement(element : UIElement) : void {

        this.uiElements.push(element);
    }
}