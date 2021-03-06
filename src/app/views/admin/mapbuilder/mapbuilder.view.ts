import { Component, OnInit, ViewChild } from '@angular/core';
import { IMap } from '../../../interface/map.interface';
import { Defaults } from '../../../provider/defaults.provider';

import { MatTabGroup } from '@angular/material/tabs';
import { MatTableDataSource } from '@angular/material';

@Component({
    styleUrls: ['./mapbuilder.view.scss'],
    templateUrl: './mapbuilder.view.html'
})
export class MapBuilderViewComponent implements OnInit {
    @ViewChild(MatTabGroup) viewGroup: MatTabGroup

    // title: string = 'Bright fitbit apple watch';
    // zoom: number = 12;
    // lat: number = 51.678418;
    // lng: number = 7.809007;
    ready: boolean = false;     
    
    // map: IMap = {
    //     name: 'Steps Map',
    //     description: 'Basic map for stepping around',
    //     origin: {
    //         lat: 51.678418,
    //         lng: 7.809007,
    //         alias: 'base'
    //     },
    //     event: []
    // };

    maps: IMap[];
    selectedMap: number = 0;
    activeMap: IMap;

    editMode: boolean = false;

    displayedColumns = ['name', 'description'];
    dataSource: MatTableDataSource<IMap>;

    constructor(private defaults: Defaults) {
        this.maps = defaults.TESTMAPS;
        this.dataSource = new MatTableDataSource<IMap>(this.maps);
    }

    ngOnInit(): void {
        // navigator.geolocation.getCurrentPosition((position) => {
        //     //do_something(position.coords.latitude, position.coords.longitude);
        //     this.lat = position.coords.latitude;
        //     this.lng = position.coords.longitude;
        // });

        this.ready = true;
    }

    mapEdit(map: IMap) {        
        let index = this.maps.findIndex(m => m.id === map.id);
        this.selectedMap = index;
        this.viewGroup.selectedIndex = 1;
        this.activeMap = map;
        window.setTimeout(() => {
            this.editMode = true;
        });        
    }

    saveMap() {
        this.defaults.TESTMAPS = <any>this.maps;
        this.viewGroup.selectedIndex = 0;
        this.activeMap = undefined;
        window.setTimeout(() => {
            this.editMode = false;
        });        
    }

    // clickedMarker(label: string, index: number) {
    //     console.log(`clicked the marker: ${label || index}`)
    // }
    
    // mapClicked($event: MouseEvent) {
    //     // this.markers.push({
    //     //     lat: (<any>$event).coords.lat,
    //     //     lng: (<any>$event).coords.lng,
    //     //     draggable: false,
    //     //     label: ''
    //     // });
    //     this.map.event.push({
    //         name: 'New Event',
    //         description: 'Some event on the map',
    //         location: {
    //             lat: (<any>$event).coords.lat,
    //             lng: (<any>$event).coords.lng,
    //         }
    //     });
    // }
    
    // markerDragEnd(m: marker, $event: MouseEvent) {
    //     console.log('dragEnd', m, $event);
    // }
    
    // markers: marker[] = [
    //     // {
    //     //     lat: 51.673858,
    //     //     lng: 7.815982,
    //     //     label: 'A',
    //     //     draggable: true
    //     // },
    //     // {
    //     //     lat: 51.373858,
    //     //     lng: 7.215982,
    //     //     label: 'B',
    //     //     draggable: false
    //     // },
    //     // {
    //     //     lat: 51.723858,
    //     //     lng: 7.895982,
    //     //     label: 'C',
    //     //     draggable: true
    //     // }
    // ];

    // styles = [
    //     {
    //         "featureType": "administrative",
    //         "elementType": "labels.text.fill",
    //         "stylers": [
    //             {
    //                 "color": "#444444"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "landscape",
    //         "elementType": "all",
    //         "stylers": [
    //             {
    //                 "color": "#f2f2f2"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "poi",
    //         "elementType": "all",
    //         "stylers": [
    //             {
    //                 "visibility": "off"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "road",
    //         "elementType": "all",
    //         "stylers": [
    //             {
    //                 "saturation": -100
    //             },
    //             {
    //                 "lightness": 45
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "road.highway",
    //         "elementType": "all",
    //         "stylers": [
    //             {
    //                 "visibility": "simplified"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "road.arterial",
    //         "elementType": "labels.icon",
    //         "stylers": [
    //             {
    //                 "visibility": "off"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "transit",
    //         "elementType": "all",
    //         "stylers": [
    //             {
    //                 "visibility": "off"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "water",
    //         "elementType": "all",
    //         "stylers": [
    //             {
    //                 "color": "#46bcec"
    //             },
    //             {
    //                 "visibility": "on"
    //             }
    //         ]
    //     }
    // ];

}

// just an interface for type safety.
// interface marker {
// 	lat: number;
// 	lng: number;
// 	label?: string;
// 	draggable: boolean;
// }