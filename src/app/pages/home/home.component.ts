import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselComponent, CarouselInnerComponent, CarouselItemComponent, CarouselModule } from '@coreui/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    CarouselModule,
    CarouselComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: "https://cemarin.org/wp-content/uploads/2023/10/cabecera-header-01.png"
    };
    this.slides[1] = {
      src: "../../../assets/image/tumaco/slidex2.jpg"
    };
    this.slides[2] = {
      src: "../../../assets/image/tumaco/slidex1.jpg"
    };
  }

  navigate(route: string) {
    window.open(route, "_blank");
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
