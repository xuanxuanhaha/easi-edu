import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PteTopPartComponent } from './pte-top-part.component';

describe('PteTopPartComponent', () => {
  let component: PteTopPartComponent;
  let fixture: ComponentFixture<PteTopPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PteTopPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PteTopPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
