import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OURTEAMComponent } from './ourteam.component';

describe('OURTEAMComponent', () => {
  let component: OURTEAMComponent;
  let fixture: ComponentFixture<OURTEAMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OURTEAMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OURTEAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
