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
        id: 'wersdf234',
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
            id: 'wersdf234',
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
            id: 'wersdf234',
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
    TESTPOKERCARDS = [{
        id: '1',
        number: 6,
        suit: 'hearts',
        rank: '6',
        date: new Date(),
        user: {
            id: 'wersdf234',
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
        event: {"id":"event259","name":"Poker Challenge","description":"Collect here","location":{"lat":-36.73723333556389,"lng":146.97067737579346},"type":2}
    }]
    // all cards that can be claimed
    POKERCARDS = [
        { number: 1, suit: 'hearts', class: 'rank-a', rank: 'A' },        
        { number: 2, suit: 'hearts', class: 'rank-2', rank: '2' },
        { number: 3, suit: 'hearts', class: 'rank-3', rank: '3' },
        { number: 4, suit: 'hearts', class: 'rank-4', rank: '4' },
        { number: 5, suit: 'hearts', class: 'rank-5', rank: '5' },
        { number: 6, suit: 'hearts', class: 'rank-6', rank: '6' },
        { number: 7, suit: 'hearts', class: 'rank-7', rank: '7' },
        { number: 8, suit: 'hearts', class: 'rank-8', rank: '8' },
        { number: 9, suit: 'hearts', class: 'rank-9', rank: '9' },
        { number: 10, suit: 'hearts', class: 'rank-10', rank: '10' },
        { number: 11, suit: 'hearts', class: 'rank-j', rank: 'J' },
        { number: 12, suit: 'hearts', class: 'rank-q', rank: 'Q' },
        { number: 13, suit: 'hearts', class: 'rank-k', rank: 'K' },
        { number: 1, suit: 'diamonds', class: 'rank-a', rank: 'A' },        
        { number: 2, suit: 'diamonds', class: 'rank-2', rank: '2' },
        { number: 3, suit: 'diamonds', class: 'rank-3', rank: '3' },
        { number: 4, suit: 'diamonds', class: 'rank-4', rank: '4' },
        { number: 5, suit: 'diamonds', class: 'rank-5', rank: '5' },
        { number: 6, suit: 'diamonds', class: 'rank-6', rank: '6' },
        { number: 7, suit: 'diamonds', class: 'rank-7', rank: '7' },
        { number: 8, suit: 'diamonds', class: 'rank-8', rank: '8' },
        { number: 9, suit: 'diamonds', class: 'rank-9', rank: '9' },
        { number: 10, suit: 'diamonds', class: 'rank-10', rank: '10' },
        { number: 11, suit: 'diamonds', class: 'rank-j', rank: 'J' },
        { number: 12, suit: 'diamonds', class: 'rank-q', rank: 'Q' },
        { number: 13, suit: 'diamonds', class: 'rank-k', rank: 'K' },
        { number: 1, suit: 'spades', class: 'rank-a', rank: 'A' },        
        { number: 2, suit: 'spades', class: 'rank-2', rank: '2' },
        { number: 3, suit: 'spades', class: 'rank-3', rank: '3' },
        { number: 4, suit: 'spades', class: 'rank-4', rank: '4' },
        { number: 5, suit: 'spades', class: 'rank-5', rank: '5' },
        { number: 6, suit: 'spades', class: 'rank-6', rank: '6' },
        { number: 7, suit: 'spades', class: 'rank-7', rank: '7' },
        { number: 8, suit: 'spades', class: 'rank-8', rank: '8' },
        { number: 9, suit: 'spades', class: 'rank-9', rank: '9' },
        { number: 10, suit: 'spades', class: 'rank-10', rank: '10' },
        { number: 11, suit: 'spades', class: 'rank-j', rank: 'J' },
        { number: 12, suit: 'spades', class: 'rank-q', rank: 'Q' },
        { number: 13, suit: 'spades', class: 'rank-k', rank: 'K' },
        { number: 1, suit: 'clubs', class: 'rank-a', rank: 'A' },        
        { number: 2, suit: 'clubs', class: 'rank-2', rank: '2' },
        { number: 3, suit: 'clubs', class: 'rank-3', rank: '3' },
        { number: 4, suit: 'clubs', class: 'rank-4', rank: '4' },
        { number: 5, suit: 'clubs', class: 'rank-5', rank: '5' },
        { number: 6, suit: 'clubs', class: 'rank-6', rank: '6' },
        { number: 7, suit: 'clubs', class: 'rank-7', rank: '7' },
        { number: 8, suit: 'clubs', class: 'rank-8', rank: '8' },
        { number: 9, suit: 'clubs', class: 'rank-9', rank: '9' },
        { number: 10, suit: 'clubs', class: 'rank-10', rank: '10' },
        { number: 11, suit: 'clubs', class: 'rank-j', rank: 'J' },
        { number: 12, suit: 'clubs', class: 'rank-q', rank: 'Q' },
        { number: 13, suit: 'clubs', class: 'rank-k', rank: 'K' }
    ];
}