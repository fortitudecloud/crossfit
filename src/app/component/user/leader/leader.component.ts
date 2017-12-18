import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../interface/user.interface';
import { Defaults } from '../../../provider/defaults.provider';

@Component({
    selector: 'leader-list',
    styleUrls: ['./leader.component.scss'],
    templateUrl: './leader.component.html'
})
export class LeaderComponent implements OnInit {
    
    leaders: IUser[];

    constructor(private defaults: Defaults) {
        this.leaders = defaults.TESTUSERS;
    }
    
    ngOnInit(): void {
        
    }  
    
    getStepsToday(user: IUser): number {
        let todaySteps = user.steps.find(s => this.isToday(s.date));
        return (todaySteps) ? todaySteps.steps : 0;
    }   

    getStepPercent(user: IUser): number {
        let leader = this.leaders[0].steps.find(s => this.isToday(s.date));
        let todaySteps = user.steps.find(s => this.isToday(s.date));
        
        if(todaySteps) {
            return (todaySteps.steps / leader.steps) * 100;
        }

        return 0;
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