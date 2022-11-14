import React, { useContext, useEffect } from 'react';
import { Grid } from '@mui/material';
import ProductCard from 'components/ProductCard'
import { useProductsQuery } from 'hooks/useProducts';
import { ProducdtContext } from 'context/product/ProductContext';

interface IProps  {
   cardTemplate?:any;
}
const ProductList = ({cardTemplate}: IProps) => {

   const { productState, getAll } = useContext(ProducdtContext);
   const { filtered } = productState;
   
   useEffect(() => {
    getAll();

   },[getAll])

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