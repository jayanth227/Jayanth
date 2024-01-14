import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eb1Component } from './eb1.component';

describe('Eb1Component', () => {
  let component: Eb1Component;
  let fixture: ComponentFixture<Eb1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eb1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
