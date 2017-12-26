import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
// import { Defaults } from '../../defaults.provider';
import { environment } from '../../../environments/environment';
import { IUser, IUserAuth } from '../../interface/user.interface';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserStorage {

    constructor(private http: Http) {}

    add(user: IUser): Observable<boolean> {
        return new Observable(ob => {
            let url = environment.apiURL + '/rest/api/user'; 

            this.http.post(url, user)                
                .catch((err) => Observable.throw(err.json().err) || 'getUserInfo error')
                .subscribe(resp => {
                    // return IUserStep
                    ob.next(true);
                }, (err) => {
                    ob.error(err);
                }, () => {
                    ob.complete();
                });            
        })
    }

    update(user: IUser): Observable<boolean> {
        return new Observable(ob => {            
            let url = environment.apiURL + '/rest/api/user/' + user.id; 
            
            this.http.put(url, user)                
                .catch((err) => Observable.throw(err.json().err) || 'getUserInfo error')
                .subscribe(resp => {
                    // return IUserStep
                    ob.next(true);
                }, (err) => {
                    ob.error(err);
                }, () => {
                    ob.complete();
                });            
        })
    }

    get(username: string): Observable<IUser> {
        return new Observable(ob => {
            let url = environment.apiURL + '/rest/api/user';

            this.http.get(url) 
                .map(res => res.json())               
                .catch((err) => Observable.throw(err.json().err) || 'get error')
                .subscribe(resp => {
                    // return IUserStep
                    ob.next(resp.find(u => u.username === username));
                }, (err) => {
                    ob.error(err);
                }, () => {
                    ob.complete();
                });            
        });
    }

}