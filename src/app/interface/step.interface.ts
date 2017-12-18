import { Observable } from 'rxjs/Observable';
import { IUser, IUserAuth, IUserStep } from './user.interface';

export interface IStepProvider {
    /** get user info */
    getUserInfo(userAuth: IUserAuth): Observable<IUser>;
    /** gets the users steps for the current day */
    getTodaySteps(userAuth: IUserAuth): Observable<IUserStep>;
}