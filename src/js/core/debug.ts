export class debug {

    constructor() {

    }

    public log (msg: any) {
        if (ENGINE.frameCount % 30 == 0)
            if (typeof (msg) !== 'string')
                console.log(msg);
            else
                console.log(`(LOG) [${new Date().toLocaleTimeString()}: ${msg}]`);
    }
}