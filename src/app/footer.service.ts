import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class FooterService {

 private isFooterVisible = new BehaviorSubject<boolean>(false);
 isFooterVisible$ = this.isFooterVisible.asObservable();

 constructor() { }

 setFooterVisible(visible: boolean) {
    this.isFooterVisible.next(visible);
 }
}