import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() darkModeToggle = new EventEmitter<boolean>()

  sendDarkModoToApp(event: boolean){
    this.darkModeToggle.emit(event)
  }
}
