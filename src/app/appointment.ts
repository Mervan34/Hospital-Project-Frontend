import { newInstanceOrganizationDTO, OrganizationDTO } from "./models/organization-dto.model";
import { newInstancePatientDTO, PatientDTO } from "./models/patient-dto.model";
import { newInstancePatient, Patient } from "./patient";
import { Patientorganization } from "./patientorganization";

export interface Appointment {

    appointmentId:number;
    starttime:String;
    endtime:String;
    organizationId?:Patientorganization;
    patient?:PatientDTO;
}

export function newInstanceAppointment():Appointment{

    const data : Appointment={
        appointmentId:0,
        starttime:'',
        endtime:'',
        organizationId:newInstanceOrganizationDTO(),
        patient:newInstancePatientDTO(),
    };
    return data;

}
