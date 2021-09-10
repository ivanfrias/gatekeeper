import { Configuration, IConfiguration } from "./models/configuration";
import { IRequest } from "./models/request";

const defaultConfiguration = () => {
    return new Configuration(1000, 60000)
}

export const request = (configuration: IConfiguration = defaultConfiguration(), request: IRequest) => {

}