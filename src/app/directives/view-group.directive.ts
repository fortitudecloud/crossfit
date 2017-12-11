import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[viewGroup]'
})
export class ViewGroupDirective {
    constructor(private el: ElementRef) {       
    }

    ngOnInit() {
        let header = this.el.nativeElement.querySelector('mat-tab-header');
        
        header.classList.add('none');        
    }
}