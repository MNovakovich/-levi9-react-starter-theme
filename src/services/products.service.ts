import BaseHttpService from './base-http.service';

const ProductsService = () => {
    const baseHttp = BaseHttpService();

    const getAll = async () => {
        return await baseHttp.get(`products`);
    }

    const getById = async (id:number) => {
        return await baseHttp.get(`products/${id}`);
    }

    return {
        getAll,
        getById,
    };
}

export default ProductsService;