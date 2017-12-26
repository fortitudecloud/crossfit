import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HealthFactory, IHealthProvider } from '../../../provider/health.factory';
import { IUserAuth } from '../../../interface/user.interface';
import { UserStorage } from '../../../provider/storage/user.storage'; 

@Component({
    styleUrls: ['./setup.view.scss'],
    templateUrl: './setup.view.html'
})
export class SetupViewComponent implements OnInit {
    
    code: string;    
    healthProvider: IHealthProvider;

    constructor(
        private healthFactory: HealthFactory,       
        private userStorage: UserStorage,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.code = this.getParameterByName('code');

        this.activatedRoute.params.subscribe(params => {
            var provider = +params['provider'];

            this.healthProvider = this.healthFactory.getAuth(provider);

            var token = localStorage.getItem('tokens');

            if(token) {
                this.getUserAndForward(JSON.parse(token));
                return;
            }

            this.healthProvider.getTokens(this.code).subscribe(tokens => {
                localStorage.setItem('tokens', JSON.stringify(tokens));
                this.getUserAndForward(tokens);
            });
        });
    }

    getUserAndForward(tokens: IUserAuth) {
        let forward = (user) => {
            // set localstorage and navigate
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigateByUrl('/home');
        };

        this.healthProvider.getUserInfo(tokens).subscribe(user => {
            // existing user?
            this.userStorage.get(user.username).subscribe(resp => {
                if(resp) {
                    this.userStorage.update(user).subscribe(result => {
                        forward(user);
                    }, (err) => {
                        this.router.navigateByUrl('/');
                    });
                } else {
                    this.userStorage.add(user).subscribe(result => {
                        forward(user);
                    }, (err) => {
                        this.router.navigateByUrl('/');
                    });            
                }
            });
        });
    }

    private getParameterByName(name: string, url?: string): string {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

}