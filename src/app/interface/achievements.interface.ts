import { IUser } from './user.interface';
import { IMapEvent } from './map.interface';

export interface IAchievements {
    user: IUser;
    event: IMapEvent;
    date: Date
}