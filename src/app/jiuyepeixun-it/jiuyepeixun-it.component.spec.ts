import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiuyepeixunITComponent } from './jiuyepeixun-it.component';

describe('JiuyepeixunITComponent', () => {
  let component: JiuyepeixunITComponent;
  let fixture: ComponentFixture<JiuyepeixunITComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiuyepeixunITComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiuyepeixunITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
