import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-quan-zhan-jin-jie-ke-cheng',
  templateUrl: './web-quan-zhan-jin-jie-ke-cheng.component.html',
  styleUrls: ['./web-quan-zhan-jin-jie-ke-cheng.component.css']
})
export class WebQuanZhanJinJieKeChengComponent implements OnInit {

  chooseIT_flag = true;
  chooseAccount_flag = false;
  showmore_UI = true;
  constructor() { }

  ngOnInit() {
    this.chooseITCourse();
    window.scrollTo(0, 0);
  }

  chooseITCourse(){
    this.chooseAccount_flag = false;
    this.chooseIT_flag = true;
    document.getElementById('IT_choose_btn').style.background = '#ffd800';
    document.getElementById('Account_choose_btn').style.background = 'transparent';
  }

  chooseAccountCourse(){
    this.chooseAccount_flag = true;
    this.chooseIT_flag = false;
    document.getElementById('Account_choose_btn').style.background = '#ffd800';
    document.getElementById('IT_choose_btn').style.background = 'transparent';
  }
  showHideUI(){
    this.showmore_UI = ! this.showmore_UI;
  }
}
