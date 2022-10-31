import { useQuery } from "@tanstack/react-query"
import ProductsService from "services/products.service"


export const useProductsQuery = () => {
    return useQuery(['products'], ProductsService().getAll, {
        // refetchOnMount: false,
        // refetchOnWindowFocus: false,
      })
}