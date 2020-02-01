interface animationList {
    [key: number] : animation;
    [key: string] : animation;
}

export type animData = {

    filepath: string;
    size: Array<number>;
    spacing: number;
    frames: number;
    animations : animationList
}

export interface animation {
    name: string;
    start: Array<number>
    frames: number;
    forceOut : boolean;
}