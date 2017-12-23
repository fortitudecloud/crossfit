import { IUser } from './user.interface';
import { IMapEvent } from './map.interface';

// https://desandro.github.io/3dtransforms/examples/card-01.html

/** poker cards used in achievements */
export class IPokerCard {
    id: string;
    number: number;
    suit: string;
    rank: string;
    date: Date;
    user: IUser;
    event: IMapEvent;
}