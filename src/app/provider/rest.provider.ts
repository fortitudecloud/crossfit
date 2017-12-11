import { Observable } from 'rxjs';
import { IProvider, IData, IQuery } from 'grapple';

export class RestProvider<D extends IData> implements IProvider<D> {

    constructor() { }

    add(data: D): Observable<D> {
        throw new Error("Method not implemented.");
    }

    get(id: string): Observable<D> {
        throw new Error("Method not implemented.");
    }

    getQuery(query: IQuery): Observable<D[]> {
        throw new Error("Method not implemented.");
    }
    
    update(data: D): Observable<boolean> {
        throw new Error("Method not implemented.");
    }
    
    delete(data: D): Observable<boolean> {
        throw new Error("Method not implemented.");
    }

}