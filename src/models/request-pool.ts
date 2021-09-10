import { IConfiguration } from "./configuration"
import { IRequestCounter, RequestCounter } from "./request-counter"

export class RequestStatusPool {
    protected readonly requests: Map<string, IRequestCounter>
    
    protected readonly configuration: IConfiguration

    constructor(configuration: IConfiguration) {
        this.requests = new Map<string, IRequestCounter>()
        this.configuration = configuration
    }

    add(requestId: string) {
        if (!this.requests.get(requestId)) {
            this.requests.set(requestId, new RequestCounter())
        } else {
            this.requests.get(requestId)?.increment()
        }
    }
}