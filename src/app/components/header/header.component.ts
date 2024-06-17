import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('content', { static: true }) content: TemplateRef<any> | null = null;
  menuValue: boolean = false;
  menu_icon: string = 'bi bi-list';

  constructor(private router: Router, private offcanvasService: NgbOffcanvas) {}

  navigate(path: string): void {
    this.router.navigate([path]);
    this.closeMenu();
  }

  openMenu() {
    // this.menuValue = !this.menuValue;
    // this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
    if (this.content) {
      this.offcanvasService.open(this.content, { position: 'end', panelClass: 'offcanvas-custom-width' });
    }
  }

  closeMenu() {
    // this.menuValue = false;
    // this.menu_icon = 'bi bi-list';
    this.offcanvasService.dismiss();
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
