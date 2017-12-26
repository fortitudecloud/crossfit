import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Geolocation {
    constructor(private http: Http) {}

    getPosition(): Observable<{ lat: number, lng: number }> {
        return new Observable(ob => {        
            let url = environment.geoApi + '?key=' + environment.mapKey; 
            
            this.http.post(url, {}) 
                .map(res => res.json())                              
                .catch((err) => Observable.throw(err.json().err) || 'getPosition error')
                .subscribe(resp => {
                    // return IUserStep
                    ob.next({ lat: resp.location.lat, lng: resp.location.lng });
                }, (err) => {
                    ob.error(err);
                }, () => {
                    ob.complete();
                });
        })
    }
}

// jQuery.post( "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDCa1LUe1vOczX1hO_iGYgyo8p_jYuGOPU", function(success) {
//     apiGeolocationSuccess({coords: {latitude: success.location.lat, longitude: success.location.lng}});
// })
// .fail(function(err) {
// alert("API Geolocation error! \n\n"+err);
// });