import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jiuyepeixun-accountant',
  templateUrl: './jiuyepeixun-accountant.component.html',
  styleUrls: ['./jiuyepeixun-accountant.component.css']
})
export class JiuyepeixunAccountantComponent implements OnInit {

  chooseIT_flag = true;
  chooseAccount_flag = false;
  showmore_UI = true;
  constructor(private router: Router) { }

  ngOnInit() {
    this.chooseAccount_flag = true;
    this.chooseIT_flag = false;
    document.getElementById('Account_choose_btn').style.background = '#ffd800';
    document.getElementById('IT_choose_btn').style.background = 'transparent';
    window.scrollTo(0, 0);
  }

}
