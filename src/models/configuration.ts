export interface IConfiguration {
    requestCount: number
    gateTimeout: number
}

export class Configuration implements IConfiguration {
    readonly requestCount: number;
    readonly gateTimeout: number;

    constructor(requestCount: number, gateTimeout: number) {
        this.requestCount = requestCount
        this.gateTimeout = gateTimeout
    }
}