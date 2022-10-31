import React, { useContext, useEffect } from 'react';
import { Grid } from '@mui/material';
import {
    useQuery,
    // useMutation,
    // useQueryClient,
    // QueryClient,
    // QueryClientProvider,
  } from '@tanstack/react-query'
import ProductCard from 'components/ProductCard'
import ProductsService from 'services/products.service';
import { useProductsQuery } from 'hooks/useProducts';
import { ProducdtContext } from 'context/product/ProductContext';

interface IProps  {
   cardTemplate?:any;
}
const ProductList = ({cardTemplate}: IProps) => {

   // const queryClient = useQueryClient();
   const { productState, getAll } = useContext(ProducdtContext);
   const { filtered } = productState;
   console.log(filtered)
   useEffect(() => {
    getAll();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

    // Queries
    const queryProduct = useProductsQuery()
  
    const { data } = queryProduct;

    // Mutations
    // const mutation = useMutation(postTodo, {
    //   onSuccess: () => {
    //     // Invalidate and refetch
    //     queryClient.invalidateQueries(['todos'])
    //   },
    // })
  return (
    <section>
        <Grid container spacing={3}>
        { filtered?.map((product:any) => {
           return (
            <Grid key={product.id} item xs={6} sm={4}>
                <ProductCard {...product} />
           </Grid>)
        })}
        </Grid>
    </section>
  )
}
// ProductList.defaultProps = {
//   cartTemplate:
// }
export default ProductList