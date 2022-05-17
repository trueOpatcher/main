import { AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {

  get panel() { return document.getElementById('panel')!};

  @ViewChild('skills') skills!: ElementRef;


  constructor() { }

  wheelDeg = 0;
  isMouseOver = false;

  ngOnInit(): void {

    this.rotate();
  }

  ngAfterViewInit(): void {
    
    
    const skills = this.skills.nativeElement.children;
    const step = -20;
    for(let i = 0; i < skills.length; i++) {
      

      skills[i].style.transform = 'rotate(' + i * step +'deg)';

    }

    this.startAnimation();
    


  }

  
  startAnimation() {
    setTimeout(() => {
      this.panel.style.transform = 'translateX(0px)';

    }, 300);
  }


  rotate() {
    document.getElementById('wheel')?.addEventListener('wheel', e => {

        if(e.deltaY > 0) {
          this.wheelDeg += 20;
        }

        if(e.deltaY < 0) {
          this.wheelDeg -= 20; 
        }

        document.getElementById('wheel')!.style.transform = 'rotate(' + this.wheelDeg + 'deg)';
        document.getElementById('panel-gear-1')!.style.transform = 'rotate(' + -this.wheelDeg * 1.5 + 'deg)';
        document.getElementById('panel-gear-2')!.style.transform = 'rotate(' + this.wheelDeg * 2.5 + 'deg)';


      })
  }


  endAnimation() {
    return new Promise((resolve, reject) => {
      document.getElementById('panel')!.style.transform = 'translateX(-400px)';
      setTimeout(() => {
        resolve('ok');
      }, 2000);
    })
  }
  
  ngOnDestroy() {
    
  }

}
