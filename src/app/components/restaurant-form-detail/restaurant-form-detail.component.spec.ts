import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFormDetailComponent } from './restaurant-form-detail.component';

describe('RestaurantFormDetailComponent', () => {
  let component: RestaurantFormDetailComponent;
  let fixture: ComponentFixture<RestaurantFormDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantFormDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantFormDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
