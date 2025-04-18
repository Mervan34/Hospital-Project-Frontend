// import { City } from './city';
// import { CityService } from './city.service';
// import { District } from './district';
// import { PatientPhone } from './patientphone';

import { City, newInstanceCity } from "./city";
import { District, newInstanceDistrict } from "./district";
import { newInstancePatientPhone, PatientPhone } from "./patientphone";

// export class Patient {
//     id: number;
//     firstName: string;
//     lastName: string;
//     age: number;
//     address: string;
//     city?: City;
//     district?: District;
//     dtoPhone?: PatientPhone;

//     constructor(id: number = 0,
//         firstName: string = '',
//         lastName: string = '',
//         age: number = 0,
//         address: string = '',
//         city: City = { mervancityid: 0, name: '' },
//         district: District = { mervandistrictid: 0, name: '', cityId: 0 },
//         dtoPhone: PatientPhone = { id: 0, mobilephone: '', homephone: '', patientid:}
//         // listPhone: PatientPhone[] = [],
//     ) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.address = address;
//         this.city = city;
//         this.district = district;
//         this.dtoPhone = dtoPhone;
//     }
// }


export interface Patient {
    id: number;
    tcNo:String;
    firstName: string;
    lastName: string;
    birthDate:Date;
    birthPlace:String;
    age: number;
    gender:String;
    address: string;
    city?: City;
    district?: District;
    listPhone?: PatientPhone[];
}

export function newInstancePatient(): Patient {
    const data: Patient = {
        id: 0,
        tcNo:'',
        firstName:'',
        lastName: '',
        birthDate:new Date(),
        birthPlace:'',
        age: 0,
        gender:'',
        address: '',
        city: newInstanceCity(),
        district: newInstanceDistrict(),
        listPhone: [],
    };
    return data;
}