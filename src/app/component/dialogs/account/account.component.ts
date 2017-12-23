import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'user-account',
    styleUrls: ['./account.component.scss'],
    templateUrl: './account.component.html'
})
export class AccountComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}