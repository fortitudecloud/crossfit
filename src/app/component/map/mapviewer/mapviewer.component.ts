import { Component, OnInit, Input, Output, ElementRef } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { IMap, IMapEvent, IMapEventType } from '../../../interface/map.interface';
import { IUser } from '../../../interface/user.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { FitbitProvider } from '../../../provider/stub/fitbit.stub.provider'; // ! stub
import { DistanceProvider } from '../../../provider/distance.provider';
import { AchievementsProvider } from '../../../provider/stub/achievements.stub.provider'; // ! stub
import { AchievementStorage } from '../../../provider/stub/storage/achievement.stub.storage';
import { Defaults } from '../../../provider/defaults.provider';

import { CheckinComponent } from '../../dialogs/checkin/checkin.component';

@Component({
    selector: 'map-viewer',
    styleUrls: ['./mapviewer.component.scss'],
    templateUrl: './mapviewer.component.html'
})
export class MapViewerComponent implements OnInit {

    ready: boolean = false; 
    styles: any;
    zoom: number;
    disabledUI: boolean = true;
    fullHeight = '667px'

    @Input() position: { lat: number, lng: number };
    @Input() user: IUser;

    icons: { [key: number]: string} = {
        1: './assets/mushroom48.png',
        2: './assets/poker48.png',
        3: './assets/hogs48.png', 
        100: './assets/circle16.png'
    };

    @Input() map: IMap;

    constructor(
        private elementRef:ElementRef,
        private defaults: Defaults,
        private distance: DistanceProvider,
        private achievements: AchievementsProvider,
        private achievementsStorage: AchievementStorage,
        public dialog: MatDialog
    ) {        
        this.styles = defaults.MAP_STYLES;
        this.zoom = defaults.MAP_ZOOM;
    }

    ngOnInit() {    
        if(this.map) {
            this.checkClaims();

            window.setTimeout(() => {
                this.fullHeight = this.elementRef.nativeElement.offsetHeight + 'px';
                this.ready = true;
            });
        }
    } 
    
    canClaim(e: IMapEvent): boolean {
        if(this.position) {
            let range = this.distance.getMeters(e.location, this.position);
            if(range <= this.defaults.CLAIMRANGE) return true;
        } 

        return false;
    }

    claimEvent(e: IMapEvent) {
        this.achievementsStorage.add({
            user: this.user,
            event: e,
            date: new Date()
        }).subscribe(result => {
            if(result) {
                this.checkClaims();
                this.dialog.open(CheckinComponent);
            }
        });
    }    

    clickedMarker(label: string, index: number) {
        // handle type of marker clicked (event, collectable)
    }
    
    mapClicked($event: MouseEvent) {        
        // show we have an action for this event?
    }
    
    markerDragEnd(m: IMapEvent, $event: MouseEvent) {
        // cant be done on the viewer
    }

    private checkClaims() {
        var achieved = this.achievements.get(this.user, new Date());        
        var claimed = [];
        
        this.map.event = this.map.event.filter(e => !achieved.find(a => a.event.id === e.id));
    }

}
