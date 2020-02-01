export interface clickable {
    
    onClick(event : MouseEvent) : void;
}

export interface draggable {

    dragging : boolean;

    onMouseDown(event : MouseEvent) : void;
    onMouseMove(event : MouseEvent) : void;
    onMouseUp(event : MouseEvent) : void;
}