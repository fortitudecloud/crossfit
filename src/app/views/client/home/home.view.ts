import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTabGroup } from '@angular/material/tabs';

import { IMap } from '../../../interface/map.interface';
import { FitbitProvider } from '../../../provider/stub/fitbit.stub.provider'; // ! stub
import { Defaults } from '../../../provider/defaults.provider';

@Component({
    styleUrls: ['./home.view.scss'],
    templateUrl: './home.view.html'
})
export class HomeViewComponent implements OnInit {
    @ViewChild(MatTabGroup) viewGroup: MatTabGroup

    access_token: string;

    map: IMap;
    position: { lat: number, lng: number };

    testUser = {lat: -36.73018081106022, lng: 146.96111261844635}; // TODO: remove

    constructor(
        private fitbitProvider: FitbitProvider,        
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private defaults: Defaults) {            
            navigator.geolocation.getCurrentPosition((pos) => {
                this.position = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                };
                //this.map = this.defaults.TESTMAPS[0]; // replace with actual map
                //this.map.origin = this.testUser; // replace          
            });            

            this.map = this.defaults.TESTMAPS[0]; // replace with actual map
            this.map.origin = this.testUser; // replace          
        }

    ngOnInit(): void {
        // get the access token from the url
        this.activatedRoute.params.subscribe(params => {
            this.access_token = params['access_token'];
        });
    }       

}