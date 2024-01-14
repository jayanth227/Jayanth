import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pb1Component } from './pb1.component';

describe('Pb1Component', () => {
  let component: Pb1Component;
  let fixture: ComponentFixture<Pb1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pb1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
