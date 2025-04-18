import { newInstanceOrganizationDTO, OrganizationDTO } from "./organization-dto.model";
import { newInstancePatientDTO, PatientDTO } from "./patient-dto.model";
import { newInsatenceStaffDTO, StaffDTO } from "./staff-dto.model";

export interface AdmissionDTO {
    admissionId: number;
    admissionDate: Date;
    admissionType: String;
    note: String;
    status: String;
    patientId?: PatientDTO;
    organizationId?: OrganizationDTO;
    staffId?: StaffDTO;
}

export function newInstanceAdmissionDTO(): AdmissionDTO {

    const data: AdmissionDTO = {
        admissionId: 0,
        admissionDate: new Date(),
        admissionType: '',
        note: '',
        status: '',
        patientId: newInstancePatientDTO(),
        organizationId: newInstanceOrganizationDTO(),
        staffId: newInsatenceStaffDTO(),

    };
    return data;
}
