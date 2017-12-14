import { IUser } from './user.interface';
import { IMap } from './map.interface';

export interface IChallenge {
    id: string;
    name: string;
    description: string;
    map: IMap;
    users: IUser[];
    chats: IChallengeChat[];
}

export interface IChallengeChat {
    user: IUser;
    date: Date;
    message: string;
}