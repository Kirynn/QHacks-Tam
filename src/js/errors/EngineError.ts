export class EngineError extends Error {
    
    constructor(msg : string) {
        super(msg);
        this.name = "EngineError";
    }
}