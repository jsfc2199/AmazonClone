import { Component, EventEmitter, Output } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent {
  ngOnInit(): void {
    initFlowbite();
  }

  @Output() darkModeToggle = new EventEmitter<boolean>()

  darkMode: boolean = JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')

  toggleMainHeaderDarkMode(){
    this.darkMode = !this.darkMode;
    this.darkModeToggle.emit(this.darkMode);
    window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode))
  }
}
