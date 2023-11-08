import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';

import { initFlowbite } from 'flowbite';
import { Observable, Subscription } from 'rxjs';
import { DarkModeService } from './header/dark-mode/services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  @HostBinding('class.dark') darkMode: boolean = false;

  darkModeObserver!: Observable<boolean>;
  darkModeSubscription: Subscription = new Subscription();

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkModeObserver = this.darkModeService.getDarkMode();

    this.darkModeSubscription = this.darkModeObserver.subscribe(
      (darkModeValue) => {
        this.darkMode = darkModeValue;
      }
    );
    initFlowbite();
  }

  ngOnDestroy(): void {
    this.darkModeSubscription.unsubscribe();
  }
}
