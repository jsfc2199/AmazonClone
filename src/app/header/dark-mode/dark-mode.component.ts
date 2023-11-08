import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css'],
})
export class DarkModeComponent implements OnInit, OnDestroy {
  darkModeObserver!: Observable<boolean>;
  darkModeSubscription: Subscription = new Subscription();
  darkMode: boolean = false;

  constructor(public darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkModeObserver = this.darkModeService.getDarkMode();

    this.darkModeSubscription = this.darkModeObserver.subscribe(
      (darkModeValue) => {
        this.darkMode = darkModeValue;
      }
    );
  }

  toggleDarkMode() {
    this.darkModeService.setDarkMode(!this.darkMode);
    window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
  }

  ngOnDestroy(): void {
    this.darkModeSubscription.unsubscribe();
  }
}
