import { Injectable } from '@angular/core';
import { IUserAuthProvider } from '../interface/user.interface';

@Injectable()
export class Defaults {
    MAP_ZOOM = 14;
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
        event: [{"id":"event736","name":"Watering Hole","description":"Hoggies favorite splash zone. Give him a dip if you like","location":{"lat":-36.72782660096826,"lng":146.99951648712158},"type":3},{"id":"event873","name":"Top of the town","description":"Power up!","location":{"lat":-36.73018269203475,"lng":146.96123600006104},"type":1},{"id":"event359","name":"Poker Challenge","description":"Collect here","location":{"lat":-36.73723333556389,"lng":146.97067737579346},"type":2}]
    }];
    CLAIMRANGE = 15;
    BONUSMULTIPLIER = 2;
    BONUSSTEPINCREMENT = 2000;
    TESTACHIEVEMENTS = [{
        user: {
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
                steps: 11
            }]
        },
        event: {"id":"event853","name":"Top of the town","description":"Power up!","location":{"lat":-36.73018269203475,"lng":146.96123600006104},"type":1},
        date: new Date()
    }, {
        user: {
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
                steps: 2099
            }]
        },
        event: {"id":"event874","name":"Mistery","description":"Power up!","location":{"lat":-36.73018269203475,"lng":146.96123600006104},"type":1},
        date: new Date()
    }];
}