import { IUser } from './user.interface';

/** hold media object relating to something */
export interface IMedia {
    /** owner */
    user: IUser;
    /** raw data content */
    data: any;    
}

/** relates media to a map */
export interface IMapEventMedia {
    mapId: string;
    mapEventId: string;
    media: IMedia[];
}