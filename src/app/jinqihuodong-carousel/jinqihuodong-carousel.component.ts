import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-jinqihuodong-carousel',
  templateUrl: './jinqihuodong-carousel.component.html',
  styleUrls: ['./jinqihuodong-carousel.component.css']
})
export class JinqihuodongCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    $('.carousel .carousel-item').each(function () {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (var i = 0; i < 3; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
      }
    });
  }

}
