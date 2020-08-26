import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonShuJuFenXiKeChengComponent } from './python-shu-ju-fen-xi-ke-cheng.component';

describe('PythonShuJuFenXiKeChengComponent', () => {
  let component: PythonShuJuFenXiKeChengComponent;
  let fixture: ComponentFixture<PythonShuJuFenXiKeChengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonShuJuFenXiKeChengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonShuJuFenXiKeChengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
