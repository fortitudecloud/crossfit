import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Defaults } from '../../defaults.provider';
import { IUser, IUserAuth } from '../../../interface/user.interface';

@Injectable()
export class UserStorage {

    constructor(private defaults: Defaults) {}

    add(user: IUser): Observable<boolean> {
        return new Observable(ob => {
            // already created. ignore
            ob.next(true);
            ob.complete();
        })
    }

    update(user: IUser): Observable<boolean> {
        return new Observable(ob => {            
            let index = this.defaults.TESTUSERS.findIndex(u => u.username === user.username);
            if(!index) ob.next(false);
            else {
                this.defaults.TESTUSERS[index] = user;
                ob.next(true);
            }
            
            ob.complete();
        })
    }

}