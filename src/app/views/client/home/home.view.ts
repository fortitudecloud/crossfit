import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IMap } from '../../../interface/map.interface';
import { FitbitProvider } from '../../../provider/stub/fitbit.stub.provider'; // ! stub
import { Defaults } from '../../../provider/defaults.provider';

@Component({
    styleUrls: ['./home.view.scss'],
    templateUrl: './home.view.html'
})
export class HomeViewComponent implements OnInit {

    access_token: string;

    map: IMap;

    constructor(
        private fitbitProvider: FitbitProvider,        
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private defaults: Defaults) {
            this.map = this.defaults.TESTMAPS[0];
        }

    ngOnInit(): void {
        // get the access token from the url
        this.activatedRoute.params.subscribe(params => {
            this.access_token = params['access_token'];
        });
    }   

}