import { City, newInstanceCity } from "../city";
import { District, newInstanceDistrict } from "../district";
import { newInstancePatientPhone, PatientPhone } from "../patientphone";

export interface PatientDTO {
    patientId: number;
    tcNo: string,
    firstName: string;
    lastName: string;
    birthDate: Date;
    birthPlace: string;
    age: number;
    gender:string;
    address: string;
    city?: City;
    district?: District;
    entityPatientPhone: PatientPhone;
    // listPhone?: PatientPhone[];
}

export function newInstancePatientDTO(): PatientDTO {
    const data: PatientDTO = {
        patientId: 0,
        tcNo:'',
        firstName: '',
        lastName: '',
        birthDate:new Date(),
        birthPlace:'',
        age: 0,
        gender:'',
        address: '',
        city: newInstanceCity(),
        district: newInstanceDistrict(),
        entityPatientPhone: newInstancePatientPhone(),
        // listPhone: [],
    };
    return data;
}
