import { IUser } from './user.interface';

/** hold media object relating to something */
export interface IMedia {
    /** owner */
    user: IUser;
    /** raw data content */
    data: any;
}