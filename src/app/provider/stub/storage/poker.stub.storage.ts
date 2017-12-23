import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Defaults } from '../../defaults.provider';
import { IUser, IUserAuth } from '../../../interface/user.interface';
import { IPokerCard } from '../../../interface/poker.interface'; 

@Injectable()
export class PokerStorage {

    constructor(private defaults: Defaults) {

    }

    add(card: IPokerCard): Observable<boolean> {
        return new Observable(ob => {
            this.defaults.TESTPOKERCARDS.push(card);
            ob.next(true);
            ob.complete();
        });        
    }

    getAll(): Observable<IPokerCard[]> {
        return new Observable(ob => {            
            ob.next(this.defaults.TESTPOKERCARDS);
            ob.complete();
        });        
    }

    getUsers(user: IUser, date: Date): Observable<IPokerCard[]> {
        return new Observable(ob => {            
            ob.next(this.defaults.TESTPOKERCARDS.filter(p => this.isSameDate(p.date, new Date()) && p.user.username === user.username));
            ob.complete();
        });        
    }

    private isSameDate(date: Date, compare: Date) {        
        if(date.getDate() === compare.getDate() &&
            date.getMonth() === compare.getMonth() &&
            date.getFullYear() === compare.getFullYear()) {
                return true;
            }

        return false;
    } 

}