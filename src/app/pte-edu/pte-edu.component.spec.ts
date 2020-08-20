import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PteEduComponent } from './pte-edu.component';

describe('PteEduComponent', () => {
  let component: PteEduComponent;
  let fixture: ComponentFixture<PteEduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PteEduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PteEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
