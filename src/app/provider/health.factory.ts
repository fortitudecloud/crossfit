import { Injectable } from '@angular/core';
import { IAuthProvider } from '../interface/auth.interface';
import { IUserAuthProvider } from '../interface/user.interface';

import { FitbitProvider } from './stub/fitbit.stub.provider';

@Injectable()
export class HealthFactory {

    constructor(private fitbit: FitbitProvider) {}

    getAuth(authProvider: IUserAuthProvider): IAuthProvider {
        switch(authProvider) {
            case IUserAuthProvider.Fitbit:
                return this.fitbit;                
            default:
                //return this.apple;
        }
    }

}