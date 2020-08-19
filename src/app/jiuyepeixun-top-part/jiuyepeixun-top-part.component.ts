import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-jiuyepeixun-top-part',
  templateUrl: './jiuyepeixun-top-part.component.html',
  styleUrls: ['./jiuyepeixun-top-part.component.css']
})
export class JiuyepeixunTopPartComponent implements OnInit {

  chooseIT_flag = true;
  chooseAccount_flag = false;
  showmore_UI = true;
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    console.log(this.document.location.href);
    const url_str = this.document.location.href;
    const is_include = url_str.includes('kechengjiaoyu-accountant');
    if(is_include){
      this.chooseAccount_flag = true;
      this.chooseIT_flag = false;
      document.getElementById('Account_choose_btn').style.background = '#ffd800';
      document.getElementById('IT_choose_btn').style.background = 'transparent';
    }else{
      this.chooseAccount_flag = false;
      this.chooseIT_flag = true;
      document.getElementById('IT_choose_btn').style.background = '#ffd800';
      document.getElementById('Account_choose_btn').style.background = 'transparent';
    }
    window.scrollTo(0, 0);
  }

  chooseITCourse(){
    this.chooseAccount_flag = false;
    this.chooseIT_flag = true;
    document.getElementById('IT_choose_btn').style.background = '#ffd800';
    document.getElementById('Account_choose_btn').style.background = 'transparent';
    this.router.navigateByUrl('/kechengjiaoyu-IT');
  }

  chooseAccountCourse(){
    this.chooseAccount_flag = true;
    this.chooseIT_flag = false;
    document.getElementById('Account_choose_btn').style.background = '#ffd800';
    document.getElementById('IT_choose_btn').style.background = 'transparent';
    this.router.navigateByUrl('/kechengjiaoyu-accountant');
  }
  showHideUI(){
    this.showmore_UI = ! this.showmore_UI;
  }
}

