import { newInstancePatient, Patient } from "./patient";
import { newInstancePatientOrganization, Patientorganization } from "./patientorganization";

export interface Patientstaff {

    staffId:number;
    name:String;
    surname:String;
    organizationId?:Patientorganization;
}

export function newInsatencePatientStaff(): Patientstaff{
    const data : Patientstaff = {
        staffId:0,
        name:'',
        surname:'',
        organizationId:newInstancePatientOrganization(),

    }
    return data;
}
