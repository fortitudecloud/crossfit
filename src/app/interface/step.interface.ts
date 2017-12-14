import { Observable } from 'rxjs/Observable';
import { IUser, IUserAuth, IUserStep } from './user.interface';

export interface IStepProvider {
    /** get user info */
    getUserInfo(user: IUser): Observable<IUser>;
    /** gets the users steps for the current day */
    getTodaySteps(userAuth: IUserAuth): Observable<IUserStep>;
}