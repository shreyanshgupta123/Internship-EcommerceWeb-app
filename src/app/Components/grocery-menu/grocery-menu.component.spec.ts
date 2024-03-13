import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryMenuComponent } from './grocery-menu.component';

describe('GroceryMenuComponent', () => {
  let component: GroceryMenuComponent;
  let fixture: ComponentFixture<GroceryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroceryMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroceryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
