import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NgbCarouselModule,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  images: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.images[0] = {
      src: "../../../assets/image/tumaco/slide1.jpg"
    };
    this.images[1] = {
      src: "../../../assets/image/tumaco/slide2.jpg"
    };
    this.images[2] = {
      src: "../../../assets/image/tumaco/slide3.jpg"
    };
  }

  navigate(route: string) {
    window.open(route, "_blank");
  }

}
