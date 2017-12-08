import { Component, OnInit } from '@angular/core';

@Component({
    styleUrls: ['./mapbuilder.view.scss'],
    templateUrl: './mapbuilder.view.html'
})
export class MapBuilderViewComponent implements OnInit {

    title: string = 'Bright fitbit apple watch';
    zoom: number = 12;
    lat: number = 51.678418;
    lng: number = 7.809007;
    ready: boolean = false;    

    constructor() {}

    ngOnInit(): void {
        navigator.geolocation.getCurrentPosition((position) => {
            //do_something(position.coords.latitude, position.coords.longitude);
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
        });

        this.ready = true;
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }
    
    mapClicked($event: MouseEvent) {
        this.markers.push({
            lat: (<any>$event).coords.lat,
            lng: (<any>$event).coords.lng,
            draggable: false,
            label: ''
        });
    }
    
    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }
    
    markers: marker[] = [
        // {
        //     lat: 51.673858,
        //     lng: 7.815982,
        //     label: 'A',
        //     draggable: true
        // },
        // {
        //     lat: 51.373858,
        //     lng: 7.215982,
        //     label: 'B',
        //     draggable: false
        // },
        // {
        //     lat: 51.723858,
        //     lng: 7.895982,
        //     label: 'C',
        //     draggable: true
        // }
    ];

    styles = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#46bcec"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];

}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}