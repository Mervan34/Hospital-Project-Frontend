import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateadmissionComponent } from './updateadmission.component';

describe('UpdateadmissionComponent', () => {
  let component: UpdateadmissionComponent;
  let fixture: ComponentFixture<UpdateadmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateadmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
