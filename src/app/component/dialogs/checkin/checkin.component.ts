import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'checkin-dialog',
    styleUrls: ['./checkin.component.scss'],
    templateUrl: './checkin.component.html'
})
export class CheckinComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}