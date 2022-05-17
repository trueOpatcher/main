import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epilog',
  templateUrl: './epilog.component.html',
  styleUrls: ['./epilog.component.scss']
})
export class EpilogComponent implements OnInit, AfterViewInit {

  get backgroundStyle() { return document.getElementById('background')!.style };
  get trainStyle() { return document.getElementById('train')!.style};
  get parachute() { return document.getElementById('parachute')!.style};
  get rails() { return document.getElementById('rails')!.style};
  get baloon() { return document.getElementById('baloon')!.style};
  get contact() { return document.getElementById('contact-me')!.style};
  get links() { return document.getElementById('my-links')!.style};


  constructor() { }

  ngOnInit(): void {
  }


  

  ngAfterViewInit() {
    this.startAnimation();

  }

  startAnimation() {
    setTimeout(() => {
      this.backgroundStyle.opacity = '1';

    
    this.trainStyle.transform ='translateX(0px)';
    this.trainStyle.opacity = '1';

    this.parachute.opacity = '1';
    this.parachute.transform ='translateY(0px)';

    this.baloon.opacity = '1';
    this.baloon.transform = 'translateY(0px)';

    this.rails.opacity = '1';

    this.contact.opacity = '1';
    this.links.opacity = '1';

    let nodes = document.getElementById('my-links')?.querySelectorAll<HTMLElement>('img, div');
    for(let i = 0; i < nodes!.length; i++) {

      nodes![i].style.opacity = '1';

    }

    }, 100);

    

  }


  endAnimation() {
    
    return new Promise((resolve) => {

      this.backgroundStyle.transition = 'opacity 1s';
      this.backgroundStyle.opacity = '0';
  
      this.trainStyle.transition = 'opacity 1s';
      this.trainStyle.opacity = '0';
  
      this.parachute.transition = 'opacity 1s';
      this.parachute.opacity = '0';
  
      this.baloon.transition = 'opacity 1s';
      this.baloon.opacity = '0';
  
      this.rails.transition = 'opacity 1s';
      this.rails.opacity = '0';

      this.contact.transition = 'opacity 1s';
      this.contact.opacity = '0';

      let nodes = document.getElementById('my-links')?.querySelectorAll<HTMLElement>('img, div');

      for(let i = 0; i < nodes!.length; i++) {
      
      nodes![i].style.transition = 'opacity 1s';
      nodes![i].style.opacity = '0';

      }

      
     
  
        setTimeout(() => {
          resolve('ok');
        }, 1000);
      });

  }

}
