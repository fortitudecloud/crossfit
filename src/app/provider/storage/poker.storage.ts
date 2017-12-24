import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IUser, IUserAuth } from '../../interface/user.interface';
import { IPokerCard } from '../../interface/poker.interface'; 
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PokerStorage {

    constructor(private http: Http) {}

    add(card: IPokerCard): Observable<boolean> {
        return new Observable(ob => {
            let url = environment.apiURL + '/rest/api/poker'; 

            this.http.post(url, card)                
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

    getAll(): Observable<IPokerCard[]> {
        return new Observable(ob => {
            let url = environment.apiURL + '/rest/api/poker'; 

            this.http.get(url)
                .map(res => res.json())
                .catch((err) => Observable.throw(err.json().err) || 'get error')
                .subscribe((resp: IPokerCard[]) => {
                    // return IUserStep
                    ob.next(resp);
                }, (err) => {
                    ob.error(err);
                }, () => {
                    ob.complete();
                });                        
        }); 
    }

    getUsers(user: IUser, date: Date): Observable<IPokerCard[]> {
        return new Observable(ob => {
            let url = environment.apiURL + '/rest/api/poker'; 

            this.http.get(url)
                .map(res => res.json())
                .catch((err) => Observable.throw(err.json().err) || 'get error')
                .subscribe((resp: IPokerCard[]) => {
                    // return IUserStep
                    ob.next(resp.filter(p => this.isSameDate(new Date(p.date), new Date()) && p.user.id === user.id));
                }, (err) => {
                    ob.error(err);
                }, () => {
                    ob.complete();
                });                        
        });        
    }

    private isSameDate(date: Date, compare: Date) { 
        console.log('date')       ;

        if(date.getDate() === compare.getDate() &&
            date.getMonth() === compare.getMonth() &&
            date.getFullYear() === compare.getFullYear()) {
                return true;
            }

        return false;
    }      
    
}