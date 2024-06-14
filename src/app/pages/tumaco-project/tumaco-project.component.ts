import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarouselComponent, CarouselControlComponent, CarouselInnerComponent, CarouselItemComponent, CarouselModule, ContainerComponent } from '@coreui/angular';

@Component({
  selector: 'app-tumaco-project',
  standalone: true,
  imports: [
    ContainerComponent,
    CommonModule,
    CarouselModule,
    CarouselComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselControlComponent,
    RouterLink],
  templateUrl: './tumaco-project.component.html',
  styleUrl: './tumaco-project.component.css'
})
export class TumacoProjectComponent implements OnInit{
  
  constructor(private router: Router) {}

  slides_left: any[] = new Array(8).fill({ id: -1, src: '', title: '', subtitle: '' });
  slides_rigth: any[] = new Array(11).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides_left[0] = {
      src: "../../../assets/image/tumaco/carousel/1/1.jpg"
    };
    this.slides_left[1] = {
      src: "../../../assets/image/tumaco/carousel/1/2.jpg"
    };
    this.slides_left[2] = {
      src: "../../../assets/image/tumaco/carousel/1/3.jpg"
    };
    this.slides_left[3] = {
      src: "../../../assets/image/tumaco/carousel/1/4.jpg"
    };
    this.slides_left[4] = {
      src: "../../../assets/image/tumaco/carousel/1/5.jpg"
    };
    this.slides_left[5] = {
      src: "../../../assets/image/tumaco/carousel/1/6.jpg"
    };
    this.slides_left[6] = {
      src: "../../../assets/image/tumaco/carousel/1/7.jpg"
    };
    this.slides_left[7] = {
      src: "../../../assets/image/tumaco/carousel/1/8.jpg"
    };
   

    this.slides_rigth[0] = {
      src: "../../../assets/image/tumaco/carousel/2/1.jpg"
    };
    this.slides_rigth[1] = {
      src: "../../../assets/image/tumaco/carousel/2/2.jpg"
    };
    this.slides_rigth[2] = {
      src: "../../../assets/image/tumaco/carousel/2/3.jpg"
    };
    this.slides_rigth[3] = {
      src: "../../../assets/image/tumaco/carousel/2/4.jpg"
    };
    this.slides_rigth[4] = {
      src: "../../../assets/image/tumaco/carousel/2/5.jpg"
    };
    this.slides_rigth[5] = {
      src: "../../../assets/image/tumaco/carousel/2/6.jpg"
    };
    this.slides_rigth[6] = {
      src: "../../../assets/image/tumaco/carousel/2/7.jpg"
    };
    this.slides_rigth[7] = {
      src: "../../../assets/image/tumaco/carousel/2/8.jpg"
    };
    this.slides_rigth[8] = {
      src: "../../../assets/image/tumaco/carousel/2/9.jpg"
    };
    this.slides_rigth[9] = {
      src: "../../../assets/image/tumaco/carousel/2/10.jpg"
    };
    this.slides_rigth[10] = {
      src: "../../../assets/image/tumaco/carousel/2/11.jpg"
    };
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }

}


