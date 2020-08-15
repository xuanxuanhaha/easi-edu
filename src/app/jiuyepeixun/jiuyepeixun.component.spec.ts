import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiuyepeixunComponent } from './jiuyepeixun.component';

describe('JiuyepeixunComponent', () => {
  let component: JiuyepeixunComponent;
  let fixture: ComponentFixture<JiuyepeixunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiuyepeixunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiuyepeixunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
