import { Injectable } from '@angular/core';
import { IAuthProvider } from '../interface/auth.interface';
import { IStepProvider } from '../interface/step.interface';
import { IUserAuthProvider } from '../interface/user.interface';

// import { FitbitProvider } from './stub/fitbit.stub.provider'; // ! stub
import { FitbitProvider } from './fitbit.provider';

@Injectable()
export class HealthFactory {

    constructor(private fitbit: FitbitProvider) {}

    getAuth(authProvider: IUserAuthProvider): IHealthProvider {
        switch(authProvider) {
            case IUserAuthProvider.Fitbit:
                return this.fitbit;                
            default:
                //return this.apple;
        }
    }

}

export interface IHealthProvider extends IAuthProvider, IStepProvider { }