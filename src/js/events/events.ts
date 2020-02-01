export interface clickable {
    
    onClick(event : Event) : void;
}

export interface draggable {

    onMouseDown(event : Event) : void;
    onMouseUp(event : Event) : void;
}