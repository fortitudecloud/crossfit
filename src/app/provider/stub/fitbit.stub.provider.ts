import { Observable } from 'rxjs';
import { IAuthProvider } from '../../interface/auth.interface';
import { IStepProvider } from '../../interface/step.interface';
import { IUser, IUserAuth, IUserProvider, IUserStep, IUserAuthProvider } from '../../interface/user.interface';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Defaults } from '../defaults.provider';

@Injectable()
export class FitbitProvider implements IAuthProvider, IStepProvider {

    users: IUser[];

    constructor(private defaults: Defaults) {
        this.users = defaults.TESTUSERS;
    }

    getUserInfo(user: IUser): Observable<IUser> {        
        // note: will go to fitbit api
        return new Observable(ob => {
            ob.next(this.users.find(u => u.username === user.username));
            ob.complete();
        });
    }

    getTodaySteps(userAuth: IUserAuth): Observable<IUserStep> {
        return new Observable(ob => {
            // get users steps today
            let u = this.users.find(u => u.auth.accessToken === userAuth.accessToken);
            let step = u.steps.find(s => s.date.toDateString() === new Date().toDateString());
            // add random steps
            step.steps = (step.steps + Math.floor(Math.random() * 1000));
            ob.next(step);
            ob.complete();
        });
    }

    auth(): string {
        // skip fitbit authentication process and pretend its happen
        return environment.homeURL + '?code=098098asdfsafsd098';
    }

    getTokens(): Observable<IUserAuth> {
        // fake token collection        
        return new Observable(ob => {
            ob.next({
                provider: IUserAuthProvider.Fitbit,
                accessToken: 'token',
                refreshToken: 'refresh',
                expires: new Date()
            });
            ob.complete();
        });
    }    
    
}

