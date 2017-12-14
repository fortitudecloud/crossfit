import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FitbitProvider } from '../../../provider/stub/fitbit.stub.provider'; // ! stub

@Component({
    styleUrls: ['./home.view.scss'],
    templateUrl: './home.view.html'
})
export class HomeViewComponent implements OnInit {

    access_token: string;

    constructor(
        private fitbitProvider: FitbitProvider,        
        private router: Router,
        private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        // get the access token from the url
        this.activatedRoute.params.subscribe(params => {
            this.access_token = params['access_token'];
        });
    }   

}