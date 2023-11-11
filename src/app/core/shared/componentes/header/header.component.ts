
import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggleSubMenu(event: Event) {
    const sidebarLi = this.findParentLi(<HTMLElement>event.target);
    if (sidebarLi) {
      sidebarLi.classList.toggle('showMenu');
      const icon = sidebarLi.querySelector('.arrow');
      if (icon) {
        icon.classList.toggle('rotate180');
      }
    }
  }

  private findParentLi(element: HTMLElement): HTMLElement | null {
    while (element && !element.classList.contains('nav-links')) {
      if (element.tagName === 'LI') {
        return element;
      }
      element = element.parentElement || <HTMLElement>element.parentNode;
    }
    return null;
  }

  toggleMenu() {
    const sidebar = this.el.nativeElement.querySelector('.sidebar');

    // Alternar la clase 'close' en el contenedor .sidebar
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.removeClass(sidebar, 'close');
    } else {
      this.renderer.addClass(sidebar, 'close');
    }
  }
}


