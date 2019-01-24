import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DISCUSSIONPORTALComponent } from './discussionportal.component';

describe('DISCUSSIONPORTALComponent', () => {
  let component: DISCUSSIONPORTALComponent;
  let fixture: ComponentFixture<DISCUSSIONPORTALComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DISCUSSIONPORTALComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DISCUSSIONPORTALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
