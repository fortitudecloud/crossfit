import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../../interface/user.interface';
import { IPokerCard } from '../../../interface/poker.interface';
import { Defaults } from '../../../provider/defaults.provider';
// import { PokerStorage } from '../../../provider/stub/storage/poker.stub.storage';
import { PokerStorage } from '../../../provider/storage/poker.storage';

@Component({
    selector: 'poker-cards',
    styleUrls: ['./cards.component.scss'],
    templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {
    @Input() user: IUser;

    show: boolean = false;
    cards: IPokerCard[];

    constructor(
        private defaults: Defaults,
        private pokerStorage: PokerStorage) {

    }

    ngOnInit(): void {
        this.sync();
    }

    sync() {
        this.show = false;

        // update the cards the user has
        this.pokerStorage.getUsers(this.user, new Date()).subscribe(pc => {
            this.cards = pc;

            window.setTimeout(() => {
                this.show = true;
            }, 500);
        });
    }

}