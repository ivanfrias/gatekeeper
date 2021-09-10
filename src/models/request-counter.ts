export interface IRequestCounter {
    entryDate: number
    count: number

    increment(): void
}

export class RequestCounter implements IRequestCounter {
    readonly entryDate: number;
    count: number;

    constructor() {
        this.entryDate = Date.now()
        this.count = 1
    }

    public increment() {
        this.count+=1
    }
}