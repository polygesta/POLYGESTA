import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuValue: boolean = false;
  menu_icon: string = 'bi bi-list';

  constructor(private router: Router) {}

  navigate(path: string): void {
    this.router.navigate([path]);
    this.closeMenu();
  }

  openMenu() {
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }

  closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
