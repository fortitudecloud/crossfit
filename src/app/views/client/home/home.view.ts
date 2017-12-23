import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTabGroup } from '@angular/material/tabs';

import { IMap } from '../../../interface/map.interface';
import { IAuthProvider } from '../../../interface/auth.interface';
import { IUserAuthProvider, IUser, IUserStep } from '../../../interface/user.interface';
import { HealthFactory, IHealthProvider } from '../../../provider/health.factory';
import { UserStorage } from '../../../provider/stub/storage/user.stub.storage'; // ! stub
import { AchievementsProvider } from '../../../provider/stub/achievements.stub.provider'; // ! stub
import { Defaults } from '../../../provider/defaults.provider';

@Component({
    styleUrls: ['./home.view.scss'],
    templateUrl: './home.view.html'
})
export class HomeViewComponent implements OnInit {
    @ViewChild(MatTabGroup) viewGroup: MatTabGroup

    ready: boolean = false;
    // access_token: string;
    healthProvider: IHealthProvider;    

    map: IMap;
    position: { lat: number, lng: number };
    user: IUser;
    steps = 0;
    bonus = 0;

    testUser = {lat: -36.73018081106022, lng: 146.96111261844635}; // TODO: remove

    constructor(        
        private healthFactory: HealthFactory,       
        private userStorage: UserStorage,
        private achievements: AchievementsProvider,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private defaults: Defaults) {            
            navigator.geolocation.getCurrentPosition((pos) => {
                this.position = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                };                
            });            

            this.map = this.defaults.TESTMAPS[0]; // replace with actual map
            this.map.origin = this.testUser; // replace          
        }

    ngOnInit(): void {
        // get the user
        this.activatedRoute.params.subscribe(params => {
            // this.access_token = params['access_token'];
            // var provider = params['provider'];            
            this.loadUser();
        });

        // this.viewGroup.selectChange.subscribe(index => {
        //     if(index = 0) {
        //         this.sync();
        //     }
        // });
    }       
    
    loadUser() {
        let user = localStorage.getItem('user');
        if(!user) {
            this.router.navigateByUrl('/');
            return;
        }
        
        this.user = <IUser>JSON.parse(user);

        this.healthProvider = this.healthFactory.getAuth(this.user.auth.provider);

        this.sync().subscribe(u => {
            this.user = u;
            this.ready = true;
            
            this.getSteps();

            this.userStorage.update(u).subscribe(result => {
                if(!result) {
                    // error
                }
            });
        });
    }    

    sync(): Observable<IUser> {
        return new Observable(ob => {            
            Observable.forkJoin([this.healthProvider.getUserInfo(this.user.auth), this.healthProvider.getTodaySteps(this.user.auth)])
            .subscribe(u => {
                var user = <IUser>u[0];
                
                // update todays steps
                var found = false;
                user.steps.forEach(s => {
                    if(this.isSameDate(s.date, new Date())) {
                        s = u[1];
                        found = true;
                    }
                });

                if(!found) user.steps.push(u[1]);

                ob.next(user);                
            }, (err) => {
                ob.error(err);
            }, () => {
                ob.complete();
            });
        });        
    }

    private getSteps() {
        let steps = this.user.steps.find(s => this.isSameDate(s.date, new Date()));
        if(steps) {
            let ach = this.achievements.get(this.user, new Date());

            this.steps = steps.steps;
            this.bonus = this.achievements.calculateBonus(this.steps, ach);
        }
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