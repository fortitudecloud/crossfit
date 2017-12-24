import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Defaults } from './defaults.provider';
import { IAchievements } from '../interface/achievements.interface';
import { IUser } from '../interface/user.interface';
import { AchievementStorage } from './storage/achievement.storage';

@Injectable()
export class AchievementsProvider {

    constructor(
        private achievements: AchievementStorage,
        private defaults: Defaults) {
    }

    get(user: IUser, date: Date): Observable<IAchievements[]> {
        return new Observable(ob => {
            this.achievements.get(user).subscribe(achs => {
                console.log('hit');
                ob.next(achs.filter(a => this.isSameDate(date, new Date(a.date))));                
            }, (err) => {
                ob.error(err);
            }, () => {
                ob.complete();
            });
        });        
    }

    calculateBonus(currentSteps: number, achievements: IAchievements[]): number {
        let sorted = achievements.sort((a, b): number => {
            if(a.date < b.date) return -1;
            else if (a.date > b.date) return 1;
            else return 0;
        });

        if(achievements.length === 0) return currentSteps;

        var bonus;

        sorted.forEach(a => {            
            var last = a.user.steps.length - 1;

            if(!bonus) bonus = a.user.steps[last].steps;

            var counter = (a.user.steps[last].steps + this.defaults.BONUSSTEPINCREMENT);
            if(counter <= currentSteps) {
                bonus = bonus + (this.defaults.BONUSMULTIPLIER * this.defaults.BONUSSTEPINCREMENT);
            } else if (counter > currentSteps) {
                bonus = bonus + (this.defaults.BONUSMULTIPLIER * (currentSteps - a.user.steps[last].steps));
            }
        });

        return bonus;
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