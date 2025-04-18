import { newInstancePatient, Patient } from "./patient";
import { newInsatencePatientStaff, Patientstaff } from "./patientstaff";

export interface Patientorganization {

    organizationId:number;
    name:string;
}

export function newInstancePatientOrganization():Patientorganization{
    const data : Patientorganization ={
        organizationId:0,
        name:'',
        
    }
    return data ;
}
