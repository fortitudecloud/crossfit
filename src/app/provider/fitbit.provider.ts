import { Observable } from 'rxjs';
import { IAuthProvider } from '../interface/auth.interface';
import { IStepProvider } from '../interface/step.interface';
import { IUser, IUserAuth, IUserProvider, IUserStep, IUserAuthProvider } from '../interface/user.interface';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FitbitProvider implements IAuthProvider, IStepProvider {    

    //client: any;
    redirect_uri: string;
    scope = [];  

    constructor(private http: Http) {        
        //this.client = new FitbitClient('22CGY6', '3e94747028c020bece22aa395baac816');
        this.redirect_uri = environment.fitbitApiUrl;
        this.scope =  [ 'activity', 'nutrition', 'profile', 'settings', 'sleep', 'social', 'weight' ];
    }

    getUserInfo(userAuth: IUserAuth): Observable<IUser> {        
        return new Observable(ob => {
            let url = environment.fitbitRestApi + '/profile.json'; 

            let headers = new Headers({
                Authorization: 'Bearer ' + userAuth.accessToken
            });
            let options = new RequestOptions({ headers: headers });

            this.http.get(url, options)
                .map(res => res.json())
                .catch((err) => Observable.throw(err.json().err) || 'getUserInfo error')
                .subscribe(resp => {
                    // return IUserStep
                    ob.next(<IUser>{
                        id: resp.user.firstName + resp.user.lastName,
                        username: resp.user.displayName,
                        displayname: resp.user.displayName,
                        firstname: resp.user.firstName,
                        lastname: resp.user.lastName,
                        avatar: resp.user.avatar150,
                        auth: userAuth,
                        steps: []
                    });
                }, (err) => {
                    ob.error(err);
                }, () => {
                    ob.complete();
                });
        });
    }

    getTodaySteps(userAuth: IUserAuth): Observable<IUserStep> {
        return new Observable(ob => {
            let today = new Date();
            let url = environment.fitbitRestApi + '/activities/date/' 
                + today.getFullYear() + '-'
                + (today.getMonth()+1) + '-'
                + today.getDate() + '.json';

            let headers = new Headers({
                Authorization: 'Bearer ' + userAuth.accessToken
            });
            let options = new RequestOptions({ headers: headers });

            this.http.get(url, options)
                .map(res => res.json())
                .catch((err) => Observable.throw(err.json().err) || 'getTodaySteps error')
                .subscribe(resp => {
                    // return IUserStep
                    ob.next(<IUserStep>{
                        date: today,
                        day: today.getDate(),
                        month: today.getMonth(),
                        year: today.getFullYear(),
                        steps: +resp.summary.steps
                    });
                }, (err) => {
                    ob.error(err);
                }, () => {
                    ob.complete();
                });
            
        });
    }

    auth(): Observable<string> {
        // skip fitbit authentication process and pretend its happen
        return new Observable(ob => {
            let url = environment.apiURL + '/fitbit/redirect'; 
            
            this.http.get(url)
                .map(res => res.json())
                .catch((err) => Observable.throw(err.json().err) || 'getRedirect error')
                .subscribe(resp => {
                    // return IUserStep
                    ob.next(<string>resp.url);
                }, (err) => {
                    ob.error(err);
                }, () => {
                    ob.complete();
                });
        });
        // var authorization_uri = this.client.getAuthorizationUrl(this.redirect_uri, this.scope);
        // return authorization_uri;
    }

    getTokens(code: string): Observable<IUserAuth> {
        // fake token collection        
        return new Observable(ob => {
            let url = environment.apiURL + '/fitbit/auth/' + code; 

            this.http.get(url)
                .map(res => res.json())
                .catch((err) => Observable.throw(err.json().err) || 'getTokens error')
                .subscribe(resp => {
                    // return IUserStep
                    ob.next(<IUserAuth>{
                        provider: IUserAuthProvider.Fitbit,
                        accessToken: resp.token.access_token,
                        refreshToken: resp.token.refresh_token,
                        expires: resp.token.expires_in
                    });
                }, (err) => {
                    ob.error(err);
                }, () => {
                    ob.complete();
                });            
        });
    }    
    
}



