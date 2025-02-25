import { Bases, Equipments, Services, SpecialProjects } from "../data/SharedInfo"

export const GetServicesById = (id) => {
    return Services.find(service => service.id === Number(id));
}

export const GetEquipmentById = (id) => {
    return Equipments.find(equipment => equipment.id === Number(id));
}

export const GetSpecialProjectsById = (id) => {
    return SpecialProjects.find(project => project.id === Number(id));
}

export const GetBaseById = (id) => {
    return Bases.find(base => base.id === Number(id));
}