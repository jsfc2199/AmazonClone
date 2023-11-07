import { AfterViewInit, Component, ElementRef, HostListener, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  /*
  Inside the constructor we use ElementRef to have direct access to the DOM elements. Additionally Renderer2 is used to interact safely
  with the DOM which is used to perform operations to add, remove or manipulate elements within it.

  The click listener is used at document level to activate the clickOutside method when clicking on the document as such and not on the sidebar.

  Inside the clickOutside method all the div[drawer-backdrop] elements created automatically by the sidebar are selected. Then we check if the click
  event does not occur inside the referenced element and also if there are drawer elements in the DOM. It iterates over each element checking if the
  element is in the DOM, and if it finds it, it removes it using Renderer2.
  */
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const drawerBackdrops = document.querySelectorAll('div[drawer-backdrop]');

    /*
    event target is the element created automatically by the sidebar which is
    <div drawer-backdrop="" class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"></div>
    This elements are created in order to give some opacity to the DOM

    Because they are elements created as a consequence of the sidebar, they can be considered external components to the sidebar.
    So by checking !this.elementRef.nativeElement.contains(event.target) we are asking "Is the clicked element different from the sidebar?"

    With this approach we can remove this elements after clicking outside the sidebar itself
    */
    if (!this.elementRef.nativeElement.contains(event.target) && drawerBackdrops.length > 0) {

      drawerBackdrops.forEach(backdrop => {
        if (document.body.contains(backdrop)) {
          this.renderer.removeChild(document.body, backdrop);
        }
      });
    }
  }
}
