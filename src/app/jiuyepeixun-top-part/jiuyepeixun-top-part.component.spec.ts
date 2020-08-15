import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiuyepeixunTopPartComponent } from './jiuyepeixun-top-part.component';

describe('JiuyepeixunTopPartComponent', () => {
  let component: JiuyepeixunTopPartComponent;
  let fixture: ComponentFixture<JiuyepeixunTopPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiuyepeixunTopPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiuyepeixunTopPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
