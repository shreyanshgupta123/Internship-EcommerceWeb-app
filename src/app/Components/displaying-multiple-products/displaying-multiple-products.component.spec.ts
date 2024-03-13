import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayingMultipleProductsComponent } from './displaying-multiple-products.component';

describe('DisplayingMultipleProductsComponent', () => {
  let component: DisplayingMultipleProductsComponent;
  let fixture: ComponentFixture<DisplayingMultipleProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayingMultipleProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayingMultipleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
