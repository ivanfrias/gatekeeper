import { v4 as uuidv4 } from 'uuid';

export enum HttpMethod {
    POST,
    PUT,
    DELETE,
    GET, 
    PATCH
}

export interface IComparable<T> {
    equals(target: T): boolean
}

export interface IRequest extends IComparable<IRequest> {
    id: string
    url: string
    method: HttpMethod
    body: string
    bearerToken: string
}

export class Request implements IRequest{
    readonly id: string
    readonly url: string;
    readonly method: HttpMethod;
    readonly body: string;
    readonly bearerToken: string;

    constructor(url: string, method: HttpMethod, body: string, bearerToken: string) {
        this.id = uuidv4()
        this.url = url
        this.method = method
        this.body = body
        this.bearerToken = bearerToken
    }

    equals(target: IRequest): boolean {
        return this.id === target.id
            && this.url === target.url
            && this.method === target.method
            && this.body === target.body
            && this.bearerToken === target.bearerToken
    }
}