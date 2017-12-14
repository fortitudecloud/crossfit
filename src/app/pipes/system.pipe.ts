import { IPipe } from 'grapple';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Pipe, IPipeMessage } from '../interface/pipe.interface';


@Injectable()
export class SystemPipe {      

    private subjects: { [key: number]: Subject<any> } = {
        1: new Subject<any>()
    };    

    private pipes: { [key: number]: Observable<any> } = {
        1: this.subjects[1].asObservable()
    };    

    pipe(input: IPipeMessage): void {        
        try {
            if(!this.subjects[input.pipe]) {
                this.subjects[input.pipe] = new Subject<any>();
            }

            this.subjects[input.pipe].next(input.payload);            
        } catch (e) {
            console.error(e);
        }        
    }        

    get(pipe: Pipe, handle: (payload: any) => void) {
        try {
            if (!this.subjects[pipe]) {
                this.subjects[pipe] = new Subject<any>();
            }

            if(!this.pipes[pipe]) {
                this.pipes[pipe] = this.subjects[pipe].asObservable();
            }

            this.pipes[pipe].subscribe(handle);
        } catch (e) {
            console.error(e);
        }
    }    

}