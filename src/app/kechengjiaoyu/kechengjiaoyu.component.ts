import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kechengjiaoyu',
  templateUrl: './kechengjiaoyu.component.html',
  styleUrls: ['./kechengjiaoyu.component.css']
})
export class KechengjiaoyuComponent implements OnInit {

  busn_section_show = false;
  stat_section_show = false;
  finm_section_show = false;
  comp_section_show = false;
  constructor() { }

  ngOnInit() {
  }

  showHideBUSN(){
    this.busn_section_show = !this.busn_section_show;
  }
  showHideSTAT(){
    this.stat_section_show = !this.stat_section_show;
  }
  showHideFINM(){
    this.finm_section_show = !this.finm_section_show;
  }
  showHideCOMP(){
    this.comp_section_show = !this.comp_section_show;
  }
}
