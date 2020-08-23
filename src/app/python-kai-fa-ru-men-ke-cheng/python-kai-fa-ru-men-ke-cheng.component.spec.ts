import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonKaiFaRuMenKeChengComponent } from './python-kai-fa-ru-men-ke-cheng.component';

describe('PythonKaiFaRuMenKeChengComponent', () => {
  let component: PythonKaiFaRuMenKeChengComponent;
  let fixture: ComponentFixture<PythonKaiFaRuMenKeChengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonKaiFaRuMenKeChengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonKaiFaRuMenKeChengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
