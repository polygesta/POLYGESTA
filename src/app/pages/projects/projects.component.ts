import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  
  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {
    // this.route.fragment.subscribe(fragment => {
    //   if (fragment) {
    //     const element = document.getElementById(fragment);
    //     if (element) {
    //       element.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   }
    // });
  }

  navigate(route: string) {
    window.open(route, "_blank");
  }
}
