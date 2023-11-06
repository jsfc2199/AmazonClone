import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() mainHeaderDarkMode = new EventEmitter<boolean>()

  sendDarkModoToApp(event: boolean){
    this.mainHeaderDarkMode.emit(event);
  }
}
