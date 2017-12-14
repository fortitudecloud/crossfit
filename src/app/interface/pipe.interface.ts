export enum Pipe {
    ADMINVIEW = 1,    
}

export interface IPipeMessage {
    pipe: Pipe,
    payload: any
}