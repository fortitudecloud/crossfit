import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Defaults } from '../../defaults.provider';
import { IUser, IUserAuth } from '../../../interface/user.interface';
import { IAchievements } from '../../../interface/achievements.interface';

@Injectable()
export class AchievementStorage {

    constructor(
        private defaults: Defaults
    ) {}

    add(achievement: IAchievements): Observable<boolean> {
        return new Observable(ob => {
            this.defaults.TESTACHIEVEMENTS.push(achievement);
            ob.next(true);
            ob.complete();
        });        
    }   

    get(user: IUser): Observable<IAchievements[]> {
        return new Observable(ob => {
            ob.next(this.defaults.TESTACHIEVEMENTS.filter(a => a.user.username === user.username));
            ob.complete();
        });
        
    }

}