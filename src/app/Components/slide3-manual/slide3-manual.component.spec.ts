import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide3ManualComponent } from './slide3-manual.component';

describe('Slide3ManualComponent', () => {
  let component: Slide3ManualComponent;
  let fixture: ComponentFixture<Slide3ManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Slide3ManualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Slide3ManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
