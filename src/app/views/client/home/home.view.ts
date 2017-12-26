import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTabGroup } from '@angular/material/tabs';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { CardsComponent } from '../../../component/user/cards/cards.component';
import { AccountComponent } from '../../../component/dialogs/account/account.component';
import { MapViewerComponent } from '../../../component/map/mapviewer/mapviewer.component';

import { IMap } from '../../../interface/map.interface';
import { IAuthProvider } from '../../../interface/auth.interface';
import { IUserAuthProvider, IUser, IUserStep } from '../../../interface/user.interface';
import { HealthFactory, IHealthProvider } from '../../../provider/health.factory';
// import { UserStorage } from '../../../provider/stub/storage/user.stub.storage'; // ! stub
import { UserStorage } from '../../../provider/storage/user.storage'; 
// import { AchievementsProvider } from '../../../provider/stub/achievements.stub.provider'; // ! stub
import { AchievementsProvider } from '../../../provider/achievement.provider';
import { Defaults } from '../../../provider/defaults.provider';
import { environment } from '../../../../environments/environment';
import { Geolocation } from '../../../provider/geolocation.provider';

@Component({
    styleUrls: ['./home.view.scss'],
    templateUrl: './home.view.html'
})
export class HomeViewComponent implements OnInit {
    @ViewChild(MatTabGroup) viewGroup: MatTabGroup;
    @ViewChild(CardsComponent) pokerCards: CardsComponent;
    // @ViewChild(MapViewerComponent) mapView: MapViewerComponent;

    ready: boolean = false;
    // access_token: string;
    healthProvider: IHealthProvider;    

    map: IMap;
    position: { lat: number, lng: number };
    user: IUser;
    steps = 0;
    bonus = 0;
    watchLoc: any;

    testUser = {lat: -36.73018081106022, lng: 146.96111261844635}; // TODO: remove

    constructor(        
        private healthFactory: HealthFactory,       
        private userStorage: UserStorage,
        private achievements: AchievementsProvider,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private defaults: Defaults,
        public dialog: MatDialog,
        private geolocation: Geolocation) {  
            this.position = this.testUser;            
            
            // navigator.geolocation.getCurrentPosition((pos) => {                
            //     this.position = {
            //         lat: pos.coords.latitude,
            //         lng: pos.coords.longitude
            //     };                
            // }, (err) => {
            //     console.error(err)
            // }, {
            //     timeout: 10000
            // });               
            
            // this.watchLoc = navigator.geolocation.watchPosition((pos) => {
            //     this.position = {
            //         lat: pos.coords.latitude,
            //         lng: pos.coords.longitude
            //     };                
            // });

            this.geoLocate();

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
    
    geoLocate() {
        let loop = () => {
            window.setTimeout(() => {
                this.geolocation.getPosition().subscribe(pos => this.position = pos);
                loop();                            
            }, 5000);
        };

        loop();
    }

    gotoCards() {
        this.viewGroup.selectedIndex = 3;
        this.pokerCards.sync();
    }

    account() {
        this.dialog.open(AccountComponent, {
            data: {
                logout: () => {
                    localStorage.clear();
                    this.router.navigateByUrl('/');
                    this.dialog.closeAll();
                }
            }
        });
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

            window.setTimeout(() => {
                // let mapClient = document.querySelector('[tab-body]');
                // let mapView = document.querySelector('map-viewer');

                // (<any>mapView).style.height = mapClient.clientHeight + 'px';

                this.ready = true;
            });            
            
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
            this.achievements.get(this.user, new Date()).subscribe(ach => {
                this.steps = steps.steps;
                this.bonus = this.achievements.calculateBonus(this.steps, ach);
            });            
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