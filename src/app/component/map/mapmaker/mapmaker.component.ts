import { Component, OnInit, Input } from '@angular/core';
import { IMap, IMapEvent } from '../../../interface/map.interface';
import { Defaults } from '../../../provider/defaults.provider';

@Component({
    selector: 'map-maker',
    styleUrls: ['./mapmaker.component.scss'],
    templateUrl: './mapmaker.component.html'
})
export class MapMakerComponent implements OnInit {

    ready: boolean = false; 
    styles: any;
    zoom: number;
    
    @Input() map: IMap;

    constructor(private defaults: Defaults) {
        this.styles = defaults.MAP_STYLES;
        this.zoom = defaults.MAP_ZOOM;
    }

    ngOnInit(): void {
        if(this.map) window.setTimeout(() => {
            this.ready = true;
        });
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }
    
    mapClicked($event: MouseEvent) {        
        this.map.event.push({
            name: 'New Event',
            description: 'Some event on the map',
            location: {
                lat: (<any>$event).coords.lat,
                lng: (<any>$event).coords.lng,
            }
        });
    }
    
    markerDragEnd(m: IMapEvent, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }

}