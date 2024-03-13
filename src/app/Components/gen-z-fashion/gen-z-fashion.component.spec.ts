import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenZFashionComponent } from './gen-z-fashion.component';

describe('GenZFashionComponent', () => {
  let component: GenZFashionComponent;
  let fixture: ComponentFixture<GenZFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenZFashionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenZFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
