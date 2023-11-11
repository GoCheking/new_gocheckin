

import { Component, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent

{
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

  toggleSubMenudeslizante(event: Event) {
    const sidebar = this.el.nativeElement.querySelector('.sidebar');
    const sidebarLinks = this.el.nativeElement.querySelectorAll('.sidebar .nav-links li');
    const clickedElement = <HTMLElement>event.target;
    
    if (!this.isMenuOpen) {
      // Verifica si el menú está cerrado
      const dashboardIcon = this.el.nativeElement.querySelector('.sidebar .nav-links .dashboard-link .arrow'); // Ubica el ícono del Dashboard
  
      if (dashboardIcon && clickedElement === dashboardIcon) {
        // Verifica si el ícono clickeado es el ícono del Dashboard y aplica la clase
        dashboardIcon.parentElement.classList.add('sub-menu-deslizante');
      } else {
        // Si se hace clic en otro lugar, cierra todos los submenús deslizantes
        sidebarLinks.forEach((link: HTMLElement) => {
          link.classList.remove('sub-menu-deslizante');
        });
      }
    }
  }  }

  