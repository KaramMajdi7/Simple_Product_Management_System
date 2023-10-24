import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toggleMobileMenu(): void {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    // @ts-ignore
    hamburger.classList.toggle("active");
    // @ts-ignore
    navMenu.classList.toggle("active");
  }

  closeMobileMenu(): void {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    // @ts-ignore
    hamburger.classList.remove("active");
    // @ts-ignore
    navMenu.classList.remove("active");
  }
}
