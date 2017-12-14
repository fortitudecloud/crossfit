import { Injectable } from '@angular/core';
import { IUserAuthProvider } from '../interface/user.interface';

@Injectable()
export class Defaults {
    MAP_ZOOM = 12;
    MAP_STYLES = [
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
    TESTUSERS = [{
        username: 'Lionel',
        firstname: 'Lionel',
        lastname: 'Hickey',
        displayname: 'Lionel',
        avatar: '',
        auth: {
            provider: IUserAuthProvider.Fitbit,
            accessToken: 'token',
            refreshToken: 'refresh',
            expires: new Date()
        },
        steps: [{
            date: new Date(),
            day: +(new Date().getDate()),
            month: +(new Date().getMonth()),
            year: +(new Date().getFullYear()),            
            steps: 2211
        }]
    }];
    TESTMAPS = [{
        id: 'aa121',
        name: 'Bright Step Challenge',
        description: 'New years 2017 step challenge. Allows Apple Watch and Fitbit contestants',
        origin: {
            lat: -36.730199,
            lng: 146.960896,
            alias: 'base'
        },
        event: []
    }];
}