import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebQianDuanKeChengComponent } from './web-qian-duan-ke-cheng.component';

describe('WebQianDuanKeChengComponent', () => {
  let component: WebQianDuanKeChengComponent;
  let fixture: ComponentFixture<WebQianDuanKeChengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebQianDuanKeChengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebQianDuanKeChengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
