import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmenttimeComponent } from './appointmenttime.component';

describe('AppointmenttimeComponent', () => {
  let component: AppointmenttimeComponent;
  let fixture: ComponentFixture<AppointmenttimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmenttimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmenttimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
