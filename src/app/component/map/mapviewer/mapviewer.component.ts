import { Component, OnInit, Input, Output, ElementRef } from '@angular/core';
import { IMap, IMapEvent, IMapEventType } from '../../../interface/map.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { FitbitProvider } from '../../../provider/stub/fitbit.stub.provider'; // ! stub
import { DistanceProvider } from '../../../provider/distance.provider';
import { Defaults } from '../../../provider/defaults.provider';

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

    @Input() user: { lat: number, lng: number };

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
        private distance: DistanceProvider
    ) {        
        this.styles = defaults.MAP_STYLES;
        this.zoom = defaults.MAP_ZOOM;
    }

    ngOnInit() {
        if(this.map) window.setTimeout(() => {
            this.fullHeight = this.elementRef.nativeElement.offsetHeight + 'px';
            this.ready = true;
        });
    } 
    
    canClaim(e: IMapEvent): boolean {
        if(this.user) {
            let range = this.distance.getMeters(e.location, this.user);
            if(range <= this.defaults.CLAIMRANGE) return true;
        } 

        return false;
    }

    claimEvent(e: IMapEvent) {

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

}
