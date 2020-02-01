export class debug {

    constructor() {

    }

    public log (msg: string) {
        if (ENGINE.drawCount % 30 == 0)
            console.log(`(LOG) [${new Date().toLocaleTimeString()}: ${msg}]`);
    }
}