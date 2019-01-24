import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OURPROJECTSComponent } from './ourprojects.component';

describe('OURPROJECTSComponent', () => {
  let component: OURPROJECTSComponent;
  let fixture: ComponentFixture<OURPROJECTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OURPROJECTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OURPROJECTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
