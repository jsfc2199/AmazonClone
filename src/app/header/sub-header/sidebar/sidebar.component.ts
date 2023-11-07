import { AfterViewInit, Component, ElementRef, HostListener, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const drawerBackdrops = document.querySelectorAll('div[drawer-backdrop]');

    if (!this.elementRef.nativeElement.contains(event.target) && drawerBackdrops.length > 0) {

      drawerBackdrops.forEach(backdrop => {
        if (document.body.contains(backdrop)) {
          this.renderer.removeChild(document.body, backdrop);
        }
      });
    }
  }
}
