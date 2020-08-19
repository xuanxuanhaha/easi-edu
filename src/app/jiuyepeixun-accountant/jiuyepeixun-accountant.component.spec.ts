import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiuyepeixunAccountantComponent } from './jiuyepeixun-accountant.component';

describe('JiuyepeixunAccountantComponent', () => {
  let component: JiuyepeixunAccountantComponent;
  let fixture: ComponentFixture<JiuyepeixunAccountantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiuyepeixunAccountantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiuyepeixunAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
