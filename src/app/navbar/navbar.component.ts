import { Component, OnInit } from '@angular/core';
import {HostListener, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  Scroll_To_Height: any;
  // private router: any;
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {
  }


  ngOnInit() {
    // document.getElementById('purplelogo').style.display = 'none';
    // document.getElementById('whitelogo').style.display = 'block';
    // document.getElementById('purplelogo').style.display = 'none';
    // document.getElementById('whitelogo_mobile').style.display = 'block';
    // document.getElementById('purple_phone_logo').style.display = 'none';
    // document.getElementById('purplelogo_mobile').style.display = 'none';
    // document.getElementById('white_phone_logo').style.display = 'block';
    document.getElementById('navbar_outer').style.background = 'transparent';
    document.getElementById('humburger_line_1').style.background = 'white';
    document.getElementById('humburger_line_2').style.background = 'white';
    document.getElementById('humburger_line_3').style.background = 'white';
    document.getElementById('humburger_line_4').style.background = 'white';
  }

  @HostListener('window:scroll', [])onWindowScroll() {
    // .scrollTop
    // console.log(this.document.documentElement.scrollTop);
    this.Scroll_To_Height = this.document.documentElement.scrollTop;
    if (this.Scroll_To_Height > 0){
      document.getElementById('navbar_outer').style.background = 'rgba(0,0,0,0.6)';
      document.getElementById('navbar_real_mobile').style.background = 'rgba(0,0,0,0.6)';

      // document.getElementById('whitelogo').style.display = 'none';
      // document.getElementById('purplelogo').style.display = 'block';
      // document.getElementById('whitelogo_mobile').style.display = 'none';
      // document.getElementById('purplelogo_mobile').style.display = 'block';
      // document.getElementById('white_phone_logo').style.display = 'none';
      // document.getElementById('purple_phone_logo').style.display = 'block';

      // document.getElementById('service_wording').style.color = '#ffd800';
      // document.getElementById('team_wording').style.color = '#ffd800';
      // document.getElementById('home_wording').style.color = '#ffd800';
      // document.getElementById('service_wording').style.color = '#ffd800';
      // document.getElementById('contact_wording').style.color = '#ffd800';
      // document.getElementById('humburger_line_1').style.background = '#ffd800';
      // document.getElementById('humburger_line_2').style.background = '#ffd800';
      // document.getElementById('humburger_line_3').style.background = '#ffd800';
      // document.getElementById('humburger_line_4').style.background = '#ffd800';
    } else {
      document.getElementById('navbar_outer').style.background = 'transparent';
      document.getElementById('navbar_real_mobile').style.background = 'transparent';
      // document.getElementById('purplelogo').style.display = 'none';
      document.getElementById('whitelogo').style.display = 'block';
      document.getElementById('whitelogo_mobile').style.display = 'block';
      // document.getElementById('purplelogo_mobile').style.display = 'none';
      // document.getElementById('purple_phone_logo').style.display = 'none';
      // document.getElementById('white_phone_logo').style.display = 'block';

      document.getElementById('service_wording').style.color = 'white';
      document.getElementById('team_wording').style.color = 'white';
      document.getElementById('home_wording').style.color = 'white';
      document.getElementById('service_wording').style.color = 'white';
      document.getElementById('contact_wording').style.color = 'white';
      document.getElementById('humburger_line_1').style.background = 'white';
      document.getElementById('humburger_line_2').style.background = 'white';
      document.getElementById('humburger_line_3').style.background = 'white';
      document.getElementById('humburger_line_4').style.background = 'white';



    }
  }
  goToHomePage(){
    this.router.navigateByUrl('/');
  }
}
