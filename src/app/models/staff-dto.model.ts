import { newInstanceOrganizationDTO, OrganizationDTO } from "./organization-dto.model";

export interface StaffDTO {
    staffId: number;
    name: String;
    surname: String;
    organizationId:OrganizationDTO;
}
export function newInsatenceStaffDTO(): StaffDTO {
    const data: StaffDTO = {
        staffId: 0,
        name: '',
        surname: '',
        organizationId:newInstanceOrganizationDTO(),
    }
    return data;
}