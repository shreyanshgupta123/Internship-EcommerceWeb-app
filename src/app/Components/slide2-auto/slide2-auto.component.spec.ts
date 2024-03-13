import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide2AutoComponent } from './slide2-auto.component';

describe('Slide2AutoComponent', () => {
  let component: Slide2AutoComponent;
  let fixture: ComponentFixture<Slide2AutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Slide2AutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Slide2AutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
