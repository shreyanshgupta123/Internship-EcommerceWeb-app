import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide2ManualComponent } from './slide2-manual.component';

describe('Slide2ManualComponent', () => {
  let component: Slide2ManualComponent;
  let fixture: ComponentFixture<Slide2ManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Slide2ManualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Slide2ManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
