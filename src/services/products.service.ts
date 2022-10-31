import BaseHttpService from './base-http.service';

const ProductsService = () => {
    const baseHttp = BaseHttpService();

    const getAll = async () => {
        const res =  await baseHttp.get(`products`);
        return res.data
    }

    const getById = async (id:number) => {
        return await baseHttp.get(`products/${id}`);
    }

    const getAllCategories = async () => {
        const res =  await baseHttp.get(`products/categories`);
        return res.data;
    }

    return {
        getAll,
        getById,
        getAllCategories
    };
}

export default ProductsService;