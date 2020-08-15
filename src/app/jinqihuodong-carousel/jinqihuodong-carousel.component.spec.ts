import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JinqihuodongCarouselComponent } from './jinqihuodong-carousel.component';

describe('JinqihuodongCarouselComponent', () => {
  let component: JinqihuodongCarouselComponent;
  let fixture: ComponentFixture<JinqihuodongCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JinqihuodongCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JinqihuodongCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
