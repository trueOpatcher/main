import { style } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.startAnimation();
  }

  startAnimation() {
    setTimeout(() => {
      document.getElementById('about')!.style.opacity = '1';
      document.getElementById('about')!.style.left = '300px';
      document.getElementById('about')!.style.bottom = '200px';

    }, 100);
    this.flyingAnimation();
  }

  endAnimation() {
    return new Promise((resolve) => {
      document.getElementById('about')!.style.bottom = '300px';
      document.getElementById('about')!.style.left = 'calc(100% + 300px)';

      setTimeout(() => {
          resolve('ok');
        }, 2000);
    })
  }


  flyingAnimation() {
    let horizontal = 0;
    let vertical = 0;
    setInterval(() => {
      document.getElementById('about')!.style.animation = 'horizontal 10s infinite';
      document.getElementById('baloon-about')!.style.animation = 'vertical 8s infinite';


    })
  }
}
