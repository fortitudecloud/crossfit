import { Observable } from 'rxjs/Observable';
import { IUserAuth, IUser } from './user.interface';

export interface IAuthProvider {
    /** starts authentication and returns a redirect URL  */
    auth(): string;
    /** get existing or fresh access tokens from the auth provider */
    getTokens(code: string): Observable<IUserAuth>;    
}