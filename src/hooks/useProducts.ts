import { useQuery } from "@tanstack/react-query"
import productService from "services/products.service"


export const useProductsQuery = () => {
    return useQuery(['products'], productService.getAll, {
        // refetchOnMount: false,
        // refetchOnWindowFocus: false,
      })
}