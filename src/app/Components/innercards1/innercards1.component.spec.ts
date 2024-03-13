import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Innercards1Component } from './innercards1.component';

describe('Innercards1Component', () => {
  let component: Innercards1Component;
  let fixture: ComponentFixture<Innercards1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Innercards1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Innercards1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
