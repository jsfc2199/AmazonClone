
import { Component, HostBinding, OnInit } from '@angular/core';

import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    initFlowbite();
  }

  @HostBinding('class.dark') darkMode: boolean = JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')

  getMainHeaderDarkMode(event: boolean){
      return this.darkMode = event

    }

}
