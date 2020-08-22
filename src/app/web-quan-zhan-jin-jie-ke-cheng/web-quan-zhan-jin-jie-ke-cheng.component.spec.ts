import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebQuanZhanJinJieKeChengComponent } from './web-quan-zhan-jin-jie-ke-cheng.component';

describe('WebQuanZhanJinJieKeChengComponent', () => {
  let component: WebQuanZhanJinJieKeChengComponent;
  let fixture: ComponentFixture<WebQuanZhanJinJieKeChengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebQuanZhanJinJieKeChengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebQuanZhanJinJieKeChengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
