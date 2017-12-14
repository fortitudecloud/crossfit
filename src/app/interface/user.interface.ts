import { Observable } from 'rxjs';

export interface IUser {
    username: string;
    displayname: string;
    firstname: string;
    lastname: string;
    avatar: string;
    auth: IUserAuth;
    steps: IUserStep[];
}

export interface IUserAuth {
    provider: IUserAuthProvider;
    accessToken: string;
    refreshToken: string;
    expires: Date;
}

export enum IUserAuthProvider {
    Fitbit = 0,
    Apple
}

export interface IUserStep {
    date: Date;
    day: number;
    month: number;
    year: number;
    steps: number;    
}

/** user domain provider */
export interface IUserProvider {
    /** gets all users */
    getUsers(): Observable<IUser[]>;
    /** get a single user */
    get(username: string): Observable<IUser>;
    /** creates/updates the user object */
    set(user: IUser): Observable<IUser>;
}