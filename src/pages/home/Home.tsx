import React , { useContext } from 'react'
import { useQuery} from '@tanstack/react-query'
import { AppLayout } from 'components/Layouts'
import Headline from 'components/Headline';
import {ProductList} from 'components/ProductList';
import {Grid} from '@mui/material';
import ProductsService from 'services/products.service';
import { ProducdtContext } from 'context/product/ProductContext';
import ProductFilters from 'components/ProductFilters';
const Home = () => {
   const productsService = ProductsService();
   const query = useQuery(['categories'], productsService.getAllCategories, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
   const { data } =  query;
   const productContext = useContext(ProducdtContext)

   const filterByCategory = (cat:string) => {
    console.log(cat, 'filter')
    productContext.filterByCat(cat);
   }
  return (
    <AppLayout>
      <Headline title='Home' />
      <Grid container>
        <Grid item xs={12} sm={2}>
        <div className="categories">
            <h3>Categories:</h3>
            <ul>
              <li onClick={() => filterByCategory('all')}>All</li>
               {data?.map((cat:any) => {
                return (<li key={cat} onClick={() => filterByCategory(cat)}>{cat}</li>)
               })}
            </ul>
        </div>
        </Grid>
        <Grid item xs={12} sm={10}>
        <div className={"products-wrapper"}>
          <div><ProductFilters /></div>
            <ProductList />
        </div>
        </Grid>
      </Grid>
    
    </AppLayout>
  )
}

export default Home