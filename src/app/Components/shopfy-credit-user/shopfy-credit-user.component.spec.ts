import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopfyCreditUserComponent } from './shopfy-credit-user.component';

describe('ShopfyCreditUserComponent', () => {
  let component: ShopfyCreditUserComponent;
  let fixture: ComponentFixture<ShopfyCreditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopfyCreditUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopfyCreditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
