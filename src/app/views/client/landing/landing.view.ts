import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { FitbitProvider } from '../../../provider/stub/fitbit.stub.provider'; // ! stub
import { FitbitProvider } from '../../../provider/fitbit.provider'; // ! stub

@Component({
    styleUrls: ['./landing.view.scss'],
    templateUrl: './landing.view.html'
})
export class LandingViewComponent implements OnInit {
    
    constructor(
        private fitbitProvider: FitbitProvider,        
        private router: Router) {}

    ngOnInit(): void {
        
    }

    fitbit() {
        this.fitbitProvider.auth().subscribe(url => {
            window.location.href = url;
        });
    }

    apple() {

    }

}