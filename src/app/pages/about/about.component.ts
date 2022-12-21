import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [NgbCarouselModule, NgIf],
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{



  ngOnInit(): void {
    
  }

  // images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
   images = ['assets/images/images3.jfif', 'assets/images/images9.jfif', ]


	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 1000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
	}
}

