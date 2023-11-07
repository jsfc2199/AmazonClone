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

  @Output() darkModeToggle = new EventEmitter<boolean>()

  sendDarkModoToHeader(event: boolean){
    this.darkModeToggle.emit(event);
  }

}
