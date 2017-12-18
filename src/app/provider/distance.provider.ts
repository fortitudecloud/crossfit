import { Injectable } from '@angular/core';

@Injectable()
export class DistanceProvider {

    constructor() {}

    getMeters(pos1: IPosition, pos2: IPosition): number {
        return (this.getDistanceFromLatLonInKm(pos1.lat, pos1.lng, pos2.lat, pos2.lng) * 1000);
    }

    getKilometers(pos1: IPosition, pos2: IPosition): number {
        return this.getDistanceFromLatLonInKm(pos1.lat, pos1.lng, pos2.lat, pos2.lng);
    }

    private getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2-lon1); 
        var a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2)
            ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
    }

    private deg2rad(deg) {
        return deg * (Math.PI/180)
    }

}

interface IPosition {
    lat: number,
    lng: number
}