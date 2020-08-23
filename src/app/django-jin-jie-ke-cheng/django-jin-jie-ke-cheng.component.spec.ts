import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjangoJinJieKeChengComponent } from './django-jin-jie-ke-cheng.component';

describe('DjangoJinJieKeChengComponent', () => {
  let component: DjangoJinJieKeChengComponent;
  let fixture: ComponentFixture<DjangoJinJieKeChengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjangoJinJieKeChengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjangoJinJieKeChengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
