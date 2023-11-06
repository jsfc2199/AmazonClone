import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }

  @Output() mainHeaderDarkMode = new EventEmitter<boolean>()

  darkMode: boolean = JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')

  toggleMainHeaderDarkMode(){
    this.darkMode = !this.darkMode;
    this.mainHeaderDarkMode.emit(this.darkMode);
    window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode))
  }

}
