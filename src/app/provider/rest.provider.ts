import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs';
import { IProvider, IData, IQuery } from 'grapple';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class RestService {

    constructor (private http: Http) { }
    
    get<D extends IData>(resource: string): IProvider<D> {
        return new RestProvider<D>(this.http, resource);
    }
}

export class RestProvider<D extends IData> implements IProvider<D> {

    constructor(private http: Http, private resource: string) { }

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