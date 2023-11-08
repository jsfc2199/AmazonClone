import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const drawerBackdropsElements = document.querySelectorAll('div[drawer-backdrop]');
    const isSideBarElement = this.elementRef.nativeElement.contains(event.target)

    if (!isSideBarElement && drawerBackdropsElements.length > 0) {
      drawerBackdropsElements.forEach(backdrop => {
        if (document.body.contains(backdrop)) {
          this.renderer.removeChild(document.body, backdrop);
        }
      });
    }
  }
}
