import { AfterViewInit, Component, ComponentRef, HostListener, OnInit, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { ScrollService } from '../shared/services/scroll.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})




export class MainComponent implements OnInit, AfterViewInit {

  
  lastScroll!: number;
  currentPosition = window.scrollY;

  showAbout = {state: 'off'};
  showSkills = {state: 'off'};
  showProjects = {state: 'off'};
  showEpilog = {state: 'off'};

  @ViewChild('about') about!: any;
  @ViewChild('skills') skills!: any;
  @ViewChild('projects') projects!: any;
  @ViewChild('epilog') epilog!: any;



  constructor(private scrollService: ScrollService,
              private route: ActivatedRoute,
              private router: Router) { }

  

  

  
  ngOnInit(): void {


    this.router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        const url = event.url;

        this.showHandler(url);
        
        
      }
    });
    


  }

  ngAfterViewInit() {
    const url = this.router.url;
    this.showHandler(url);
  }
  

  onScroll(e: any) {
    if(this.lastScroll < e.target.scrollTop) {
      this.scrollService.isTopScrolling.next(true);
    } else {
      this.scrollService.isTopScrolling.next(false);
    }
    this.lastScroll = e.target.scrollTop;
  }



  showHandler(route: string) {



    switch(route) {
      case '/main/about':
        this.showAbout.state = 'on';
        this.updateView('about');
        break;
      
      case '/main/skills':
        this.showSkills.state = 'on';
        this.updateView('skills');
        break;

      case '/main/projects':
        this.showProjects.state = 'on';
        this.updateView('projects');
        break;

      case '/main/epilog':
        this.showEpilog.state = 'on';
        this.updateView('epilog');
        break;
      
    }

  }


  updateView(exeption: string) {

    if(exeption === 'about') {
      setTimeout(() => {
        this.about.startAnimation();
      }, 100);
      
    }

    if(exeption === 'skills') {
      setTimeout(() => {
        this.skills.startAnimation();
      }, 100);
      
    }

    if(exeption === 'projects') {
      setTimeout(() => {
        this.projects.startAnimation();
      }, 100);
      

    }

    if(exeption === 'epilog') {
      setTimeout(() => {
        this.epilog.startAnimation();
      }, 100);
      
    }

    if(exeption != 'about' && this.showAbout.state === 'on') {
      this.showAbout.state = 'ending';
      this.about.endAnimation().then(() => {
        
        if (this.showAbout.state === 'ending') {
          this.showAbout.state = 'off';
        }

      });
    }

    if(exeption != 'skills' && this.showSkills.state === 'on') {

      this.showSkills.state = 'ending';

      this.skills.endAnimation().then(() => {
        console.log('end animation');
        if (this.showSkills.state === 'ending') {
          this.showSkills.state = 'off';
        }

      });
    }

    if(exeption != 'projects' && this.showProjects.state === 'on') {

      this.showProjects.state = 'ending';

      this.projects.endAnimation().then(() => {
        if (this.showProjects.state === 'ending') {
          this.showProjects.state = 'off';
        }

      });
    }

    if(exeption != 'epilog' && this.showEpilog.state === 'on') {

      this.showEpilog.state = 'ending';

      this.epilog.endAnimation().then(() => {

        if (this.showEpilog.state === 'ending') {
          this.showEpilog.state = 'off';
        }
      });
    }



  }


}
