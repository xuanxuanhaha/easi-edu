import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JinqihuodongAdvertisementComponent } from './jinqihuodong-advertisement.component';

describe('JinqihuodongAdvertisementComponent', () => {
  let component: JinqihuodongAdvertisementComponent;
  let fixture: ComponentFixture<JinqihuodongAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JinqihuodongAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JinqihuodongAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
