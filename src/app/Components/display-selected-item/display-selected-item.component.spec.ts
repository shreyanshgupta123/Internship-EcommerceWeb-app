import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySelectedItemComponent } from './display-selected-item.component';

describe('DisplaySelectedItemComponent', () => {
  let component: DisplaySelectedItemComponent;
  let fixture: ComponentFixture<DisplaySelectedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplaySelectedItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplaySelectedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
