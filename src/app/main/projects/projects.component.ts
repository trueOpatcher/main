import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
    this.startAnimation();

  }

  startAnimation() {
    setTimeout(() => {
      document.getElementById('projects')!.style.transitionDuration = '3s';
      document.getElementById('projects')!.style.transform = 'translateY(0px)';
    }, 100);
  }

  endAnimation() {
    return new Promise((resolve) => {
      document.getElementById('projects')!.style.transitionDuration = '1.5s';
      document.getElementById('projects')!.style.transform = 'translateY(-1350px)';
      setTimeout(() => {
        resolve('ok');
      }, 1500)
    })
  }

  ngOnDestroy(): void {
    // document.getElementById('projects')!.style.transform = 'translateY(0px)';
    
  }

}
