import { newInstancePatient, Patient } from "./patient";

export interface PatientPhone {
    id: number;
    mobilephone?: String;
    homephone?: String;
    patientid?: Patient;
}
export function newInstancePatientPhone(): PatientPhone {
    const data: PatientPhone = {
        id: 0,
        mobilephone: '',
        homephone: '',
        patientid: newInstancePatient(),
    };
    return data;
}