import { Appointment } from "../appointment";
import { newInstancePatient, Patient } from "../patient";
import { Patientorganization } from "../patientorganization";
import { newInstanceOrganizationDTO, OrganizationDTO } from "./organization-dto.model";
import { newInstancePatientDTO, PatientDTO } from "./patient-dto.model";


export interface Dtoappointment {
    appointmentId:number;
    starttime:String;
    endtime:String;
    organizationId?:OrganizationDTO;
    patient?:PatientDTO;
}



export function newInstancedtoAppointment():Dtoappointment{

    const data : Dtoappointment={
        appointmentId:0,
        starttime:'',
        endtime:'',
        organizationId:newInstanceOrganizationDTO(),
        patient:newInstancePatientDTO(),
    };
    return data;

}
