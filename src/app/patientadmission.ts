import { newInstancePatient, Patient } from "./patient";
import { newInstancePatientOrganization, Patientorganization } from "./patientorganization";
import { newInsatencePatientStaff, Patientstaff } from "./patientstaff";

export interface Patientadmission {

    admissionId:number;
    admissionDate:Date;
    admissionType:String;
    note:String;
    status:String;
    patientId?:Patient;
    organizationId?:Patientorganization;
    staffId?:Patientstaff;
}

export function newInstancePatientAdmission():Patientadmission{
    const data : Patientadmission = {
        admissionId:0,
        admissionDate:new Date(),
        admissionType:'',
        note:'',
        status:'',
        patientId:newInstancePatient(),
        organizationId:newInstancePatientOrganization(),
        staffId:newInsatencePatientStaff(),

    }
    return data;
}
