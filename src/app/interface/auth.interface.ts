import { Observable } from 'rxjs/Observable';
import { IUserAuth } from './user.interface';

export interface IAuthProvider {
    /** starts authentication and returns a redirect URL  */
    auth(): string;
    /** get existing or fresh access tokens from the auth provider */
    getTokens(): Observable<IUserAuth>;
}