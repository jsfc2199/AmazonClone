import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  private darkModeInit: boolean = JSON.parse(window.localStorage.getItem('darkMode') ?? 'false');
  private darkModeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.darkModeInit);

  getDarkMode(){
    return this.darkModeSubject.asObservable();
  }

  setDarkMode(data: boolean){
    this.darkModeSubject.next(data)
  }
}
