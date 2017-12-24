import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../interface/user.interface';
import { Defaults } from '../../../provider/defaults.provider';
// import { AchievementsProvider } from '../../../provider/stub/achievements.stub.provider'; // ! stub
import { AchievementsProvider } from '../../../provider/achievement.provider';
import { AchievementStorage } from '../../../provider/storage/achievement.storage';
import { IAchievements } from '../../../interface/achievements.interface';

@Component({
    selector: 'leader-list',
    styleUrls: ['./leader.component.scss'],
    templateUrl: './leader.component.html'
})
export class LeaderComponent implements OnInit {
    
    leaders: IUser[];
    updating: boolean = true;

    achievementsAll: IAchievements[];

    constructor(
        private defaults: Defaults,
        private achievements: AchievementsProvider,
        private achievementStorage: AchievementStorage
        ) {
        this.leaders = defaults.TESTUSERS;
    }
    
    ngOnInit(): void {
        // get users and order by total steps
        this.sync();
    }  

    sync() {
        this.updating = true;
        this.achievementStorage.getAll().subscribe(ach => {
            this.achievementsAll = ach;
            this.updating = false;
        });
    }
    
    getStepsToday(user: IUser): { steps: number, bonus: number } {
        return this.getSteps(user);
    }   

    getStepPercent(user: IUser): { steps: number, bonus: number } {
        //let leader = this.leaders[0].steps.find(s => this.isToday(s.date));

        var leader = this.getSteps(this.leaders[0]);
        
        //let todaySteps = user.steps.find(s => this.isToday(s.date));

        var userSteps = this.getSteps(user);
        
        // if(todaySteps) {
        //     return (todaySteps.steps / leader.steps) * 100;
        // }

        return { steps: ((userSteps.steps / leader.steps) * 100), bonus: ((userSteps.bonus / leader.bonus) * 100)};        
    }

    private getSteps(user: IUser): { steps: number, bonus: number } {
        let steps = user.steps.find(s => this.isToday(s.date));
        if(steps) {
            let ach = this.achievementsAll.filter(a => a.user.id === user.id && this.isToday(a.date));

            return { steps: steps.steps, bonus: this.achievements.calculateBonus(steps.steps, ach) };            
        }

        return { steps: 0, bonus: 0 };
    }
    
    private isToday(date: Date) {
        let today = new Date();
        if(date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()) {
                return true;
            }

        return false;
    }

}