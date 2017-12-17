import { Component, OnInit, Input, Output, ElementRef } from '@angular/core';
import { IMap, IMapEvent, IMapEventType } from '../../../interface/map.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { FitbitProvider } from '../../../provider/stub/fitbit.stub.provider'; // ! stub
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

    icons: { [key: number]: string} = {
        1: './assets/mushroom48.png',
        2: './assets/poker48.png',
        3: './assets/hogs48.png'
    };

    @Input() map: IMap;

    constructor(
        private elementRef:ElementRef,
        private defaults: Defaults
    ) {        
        this.styles = defaults.MAP_STYLES;
        this.zoom = defaults.MAP_ZOOM;
    }

    ngOnInit() {
        this.fullHeight = this.elementRef.nativeElement.offsetHeight + 'px';

        if(this.map) window.setTimeout(() => {
            this.ready = true;
        });
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
