import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelLocationComponent} from './hotel-location.component';

describe('HotelLocationComponentt', () => {
  let component: HotelLocationComponent;
  let fixture: ComponentFixture<HotelLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HotelLocationComponent]
    });
    fixture = TestBed.createComponent(HotelLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
