import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('asTitle') asTitle!: ElementRef;
  social:Array<LinkModel> = [
    {
      ico:'<i class="fa-brands fa-github"></i>',
      url:'https://github.com'
    },
    {
      ico:'<i class="fa-brands fa-facebook"></i>',
      url:'https://facebook.com'
    },
    {
      ico:'<i class="fa-brands fa-twitter"></i>',
      url:'https://twitter.com'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.initEffect();
  }
  initEffect(): void {
    const target = this.asTitle.nativeElement;

    const options = {
      loop: true
    }
    
    const writer = new Typewriter(target, options);
    writer.changeTypeColor('#000').changeCursorColor('#000').type('Jorge Bobadilla').rest(50000).start();
  }
}
interface LinkModel {
  ico:string;
  url:string;
}
