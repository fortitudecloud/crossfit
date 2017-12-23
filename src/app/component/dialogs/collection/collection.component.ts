import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'collection-dialog',
    styleUrls: ['./collection.component.scss'],
    templateUrl: './collection.component.html'
})
export class CollectionComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}