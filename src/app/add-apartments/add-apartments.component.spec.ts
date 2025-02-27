import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApartmentsComponent } from './add-apartments.component';

describe('AddApartmentsComponent', () => {
  let component: AddApartmentsComponent;
  let fixture: ComponentFixture<AddApartmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddApartmentsComponent]
    });
    fixture = TestBed.createComponent(AddApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
