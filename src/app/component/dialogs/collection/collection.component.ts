import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { IPokerCard } from '../../../interface/poker.interface';

@Component({
    selector: 'collection-dialog',
    styleUrls: ['./collection.component.scss'],
    templateUrl: './collection.component.html'
})
export class CollectionComponent {
    show: boolean = false;

    constructor(@Inject(MAT_DIALOG_DATA) public data: IPokerCard) {        
        window.setTimeout(() => {
            this.show = true;
        }, 1000);
    }
}