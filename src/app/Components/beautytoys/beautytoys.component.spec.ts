import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautytoysComponent } from './beautytoys.component';

describe('BeautytoysComponent', () => {
  let component: BeautytoysComponent;
  let fixture: ComponentFixture<BeautytoysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeautytoysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeautytoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
