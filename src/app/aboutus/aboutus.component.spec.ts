import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABOUTUSComponent } from './aboutus.component';

describe('ABOUTUSComponent', () => {
  let component: ABOUTUSComponent;
  let fixture: ComponentFixture<ABOUTUSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABOUTUSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABOUTUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
