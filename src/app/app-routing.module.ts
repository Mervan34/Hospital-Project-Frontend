import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { PatientadmissionComponent } from './patientadmission/patientadmission.component';
import { PatientcheckComponent } from './patientcheck/patientcheck.component';
import { AppointmentpatientComponent } from './appointmentpatient/appointmentpatient.component';
import { UpdateadmissionComponent } from './updateadmission/updateadmission.component';
import { AppointmenttimeComponent } from './appointmenttime/appointmenttime.component';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';

const routes: Routes = [
  {path: 'patients', component:PatientListComponent},
  {path: 'create-patient', component:CreatePatientComponent},
  {path: '',redirectTo:'patients', pathMatch:'full'},
  {path: '',redirectTo:'appointment', pathMatch:'full'},
  {path: 'update-patient/:id', component: UpdatePatientComponent},
  {path: 'admission-patient' ,component:PatientadmissionComponent},
  {path: 'appointment-patient' ,component:AppointmentpatientComponent},
  {path: 'update-admission/:admissionId' ,component:UpdateadmissionComponent},
  {path: 'appointment-time', component:AppointmenttimeComponent},
  {path: 'appointment-list', component:AppointmentlistComponent},
  //{path: 'chech-patient' ,component:PatientcheckComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
