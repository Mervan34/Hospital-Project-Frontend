import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { FormsModule } from '@angular/forms';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { PatientFormComponent } from './patientform/patientform.component';
import { CityService } from './city.service';
import { DistrictService } from './district.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientService } from './patient.service';
import { primeNgModules } from './primeng.modules';
import { DropdownModule } from 'primeng/dropdown';
import { PatientphoneService } from './patientphone.service';
import { PatientadmissionComponent } from './patientadmission/patientadmission.component';
import { PatientcheckComponent } from './patientcheck/patientcheck.component';
import { AppointmentpatientComponent } from './appointmentpatient/appointmentpatient.component';
import { UpdateadmissionComponent } from './updateadmission/updateadmission.component';
import { AppointmenttimeComponent } from './appointmenttime/appointmenttime.component';
import { AppointmentService } from './appointment.service';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientFormComponent,
    CreatePatientComponent,
    UpdatePatientComponent,
    PatientadmissionComponent,
    AppointmentpatientComponent,
    UpdateadmissionComponent,
    AppointmenttimeComponent,
    AppointmentlistComponent,
    //PatientcheckComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // DropdownModule,
    //...primeNgModules,
    
  ],
  exports: [
    //...primeNgModules,
  ],
  providers: [
    CityService,
    DistrictService,
    PatientService,
    PatientphoneService,
    AppointmentService,
    provideHttpClient(withFetch()),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
