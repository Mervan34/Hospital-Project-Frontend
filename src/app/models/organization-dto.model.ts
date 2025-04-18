export interface OrganizationDTO {
    organizationId: number;
    name: string;
}
export function newInstanceOrganizationDTO(): OrganizationDTO {
    const data: OrganizationDTO = {
        organizationId: 0,
        name: '',
    }
    return data;
}