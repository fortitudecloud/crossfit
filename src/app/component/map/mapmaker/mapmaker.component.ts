import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { IMap, IMapEvent, IMapEventType } from '../../../interface/map.interface';
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
    
    eventTypes: { key: number, name: string }[] = [{
        key: 1, 
        name: 'Check in'
    }, {
        key: 2,
        name: 'Collectable'
    }, {
        key: 3,
        name: 'Special'
    }];

    eventForm: FormArray;

    @Input() map: IMap;

    constructor(
        private defaults: Defaults,
        private _fb: FormBuilder
    ) {
        this.styles = defaults.MAP_STYLES;
        this.zoom = defaults.MAP_ZOOM;
    }

    ngOnInit(): void {
        if(this.map) window.setTimeout(() => {
            this.ready = true;
        });

        this.eventForm = new FormArray([]);        
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }
    
    mapClicked($event: MouseEvent) {        
        this.map.event.push({
            id: 'event' + Math.floor(Math.random() * 1000),
            name: 'New Event',
            description: 'Some event on the map',
            location: {
                lat: (<any>$event).coords.lat,
                lng: (<any>$event).coords.lng,
            },
            type: IMapEventType.CHECKIN
        });

        this.updateEventForm();
    }
    
    markerDragEnd(m: IMapEvent, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }

    updateEventForm() {
        if(this.eventForm.length < this.map.event.length) {
            // add formGroup
            this.eventForm.push(this._fb.group({
                id: '',
                name: '',
                description: '',
                type: ''
            }))
        }

        //patch
        this.eventForm.patchValue(this.map.event);
    }

    removeEvent(index: number) {
        this.map.event.splice(index, 1);
        this.eventForm.removeAt(index);
    }

}