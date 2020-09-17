import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KechengjiaoyuComponent } from './kechengjiaoyu.component';

describe('KechengjiaoyuComponent', () => {
  let component: KechengjiaoyuComponent;
  let fixture: ComponentFixture<KechengjiaoyuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KechengjiaoyuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KechengjiaoyuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
