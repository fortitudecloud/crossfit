import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HealthFactory, IHealthProvider } from '../../../provider/health.factory';
import { IUserAuth } from '../../../interface/user.interface';

@Component({
    styleUrls: ['./setup.view.scss'],
    templateUrl: './setup.view.html'
})
export class SetupViewComponent implements OnInit {
    
    code: string;    
    healthProvider: IHealthProvider;

    constructor(
        private healthFactory: HealthFactory,       
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
            }

            this.healthProvider.getTokens(this.code).subscribe(tokens => {
                localStorage.setItem('tokens', JSON.stringify(tokens));
                this.getUserAndForward(tokens);
            });
        });
    }

    getUserAndForward(tokens: IUserAuth) {
        this.healthProvider.getUserInfo(tokens).subscribe(user => {
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigateByUrl('/home');
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