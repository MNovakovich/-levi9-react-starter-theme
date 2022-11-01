import apiClient from './api-client'

const getAll = async () => {
    return await apiClient.get(`products`);
}

const getById = async (id:number) => {
    return await apiClient.get(`products/${id}`);
}

const pruductsServices = {
    getAll,
    getById,
}
export default pruductsServices;