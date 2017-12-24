import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Defaults } from './defaults.provider';
import { IPokerCard } from '../interface/poker.interface';
import { IUser } from '../interface/user.interface';
import { IMapEvent } from '../interface/map.interface';

@Injectable()
export class PokerCardProvider {

    constructor(private defaults: Defaults) {        
    }

    getNewCard(taken: IPokerCard[], user: IUser, e: IMapEvent): IPokerCard {
        let remaining = this.defaults.POKERCARDS.filter(pc => !taken.find(t => t.number == pc.number && t.suit == pc.suit));

        let idx = Math.floor(Math.random() * (remaining.length));

        return <IPokerCard>{
            id: user.username + new Date().toISOString(),
            number: remaining[idx].number,
            suit: remaining[idx].suit,
            rank: remaining[idx].rank,
            date: new Date(),
            user: user,
            event: e
        };
    }

}