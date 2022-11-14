import ApiClient from './base-http.service'

const apiClient = ApiClient();
const getAll = async () => {
    const res =  await apiClient.get(`products`);
    return res.data;
}

const getById = async (id:number) => {
    const res =  await apiClient.get(`products/${id}`);
    return res.data;
}

const getAllCategories = async () => {
    const res = await apiClient.get(`products/categories`);
    return res.data;

}

const productServices = {
    getAll,
    getById,
    getAllCategories
}
export default productServices;