import { Services } from "../data/SharedInfo"

export const GetServicesById = (id) => {
    return Services.find(service => service.id === Number(id));
}