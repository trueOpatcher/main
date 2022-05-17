import { Component, HostListener, OnInit } from '@angular/core';
import { delay, skipUntil, timer } from 'rxjs';
import { ScrollService } from '../shared/services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  deg = 0;

  time: any;
  get firstGear() { return document.getElementById('first-gear')!.style };
  get secondGear() { return document.getElementById('second-gear')!.style };
  get thirdGear() { return document.getElementById('third-gear')!.style };


  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {

    this.scrollService.isTopScrolling.pipe().subscribe(isTop => {

      if (isTop === true) {
        this.deg += 5;
        this.rotate(this.deg);
      }

      if (isTop === false) {
        this.deg -= 5;
        this.rotate(this.deg);
      }

    })

    setInterval(() => {
      this.clock();
    }, 1000);

  }


  clock() {
    let date = new Date();
    

    let hours = date.getHours();
    if (hours > 12) {
      hours = hours - 12;
    }
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    var hoursD = 360 * (hours / 12);
    var minutesD = 360 * (minutes / 60);
    var secondsD = 360 * (seconds / 60);

    document.getElementById('big-arrow')!.style.transform = 'rotate(' + hoursD + 'deg)';
    document.getElementById('long-arrow')!.style.transform = 'rotate(' + minutesD + 'deg)';
    document.getElementById('sec-arrow')!.style.transform = 'rotate(' + secondsD + 'deg)';

    
  }

  rotate(deg: number) {
    this.firstGear.transform ='rotate(' + -deg / 5 + 'deg)';
    this.secondGear.transform ='rotate(' + deg / 2.5 + 'deg)';
    this.thirdGear.transform ='rotate(' + -deg + 'deg)';
  }


}
