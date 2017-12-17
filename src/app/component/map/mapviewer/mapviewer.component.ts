import { Component, OnInit, Input, Output } from '@angular/core';
import { IMap, IMapEvent } from '../../../interface/map.interface';
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

    @Input() map: IMap;

    constructor(
        private defaults: Defaults
    ) {
        this.styles = defaults.MAP_STYLES;
        this.zoom = defaults.MAP_ZOOM;
    }

    ngOnInit() {
        if(this.map) window.setTimeout(() => {
            this.ready = true;
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

}
