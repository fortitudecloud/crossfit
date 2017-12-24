import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IUser, IUserAuth } from '../../interface/user.interface';
import { IAchievements } from '../../interface/achievements.interface';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AchievementStorage {

    constructor(private http: Http) {}

    add(achievement: IAchievements): Observable<boolean> {
        return new Observable(ob => {
            let url = environment.apiURL + '/rest/api/achievement'; 

            this.http.post(url, achievement)                
                .catch((err) => Observable.throw(err.json().err) || 'add error')
                .subscribe(resp => {
                    // return IUserStep
                    ob.next(true);
                }, (err) => {
                    ob.error(err);
                }, () => {
                    ob.complete();
                });            
        });      
    }   

    get(user: IUser): Observable<IAchievements[]> {
        return new Observable(ob => {
            let url = environment.apiURL + '/rest/api/achievement'; 

            this.http.get(url)
                .map(res => res.json())
                .catch((err) => Observable.throw(err.json().err) || 'get error')
                .subscribe((resp: IAchievements[]) => {
                    // return IUserStep
                    ob.next(resp.filter(a => a.user.id = user.id));
                }, (err) => {
                    ob.error(err);
                }, () => {
                    ob.complete();
                });                        
        });        
    }  
    
    getAll(): Observable<IAchievements[]> {
        return new Observable(ob => {
            let url = environment.apiURL + '/rest/api/achievement'; 

            this.http.get(url)
                .map(res => res.json())
                .catch((err) => Observable.throw(err.json().err) || 'get error')
                .subscribe((resp: IAchievements[]) => {
                    // return IUserStep
                    ob.next(resp);
                }, (err) => {
                    ob.error(err);
                }, () => {
                    ob.complete();
                });                        
        });        
    }  

}