export class debug {

    constructor() {

    }

    public log (msg: any) {
        if (ENGINE.frameCount % 30 == 0)
            console.log(`(LOG) [${new Date().toLocaleTimeString()}: ${msg}]`);
    }
}