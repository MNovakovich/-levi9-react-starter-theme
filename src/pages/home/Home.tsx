import { useContext } from 'react'
import { AppLayout } from 'components/Layouts'
import Headline from 'components/Headline';
import {ProductList} from 'components/ProductList';
import {Grid, TextField } from '@mui/material';
import { ProducdtContext } from 'context/product/ProductContext';
import ProductFilters from 'components/ProductFilters';
import styles from './styles.module.css';
import CategoryList from 'components/CategoryList/CategoryList';

const Home = () => {
   
  const productContext = useContext(ProducdtContext)

  const filterByCategory = (cat:string) => {
    productContext.filterByCat(cat);
  }

  return (
    <AppLayout>
      <Headline title='Home' />
      <Grid container>
        <Grid item xs={12} sm={2}>
          <CategoryList filterByCategory={filterByCategory} />
        </Grid>
        <Grid item xs={12} sm={10}>
        <div className={styles.product_wrapper}>
          <div className={styles.filters}>
             <ProductFilters />
             <TextField placeholder='Search product' />
          </div>
          <ProductList />
        </div>
        </Grid>
      </Grid>
    
    </AppLayout>
  )
}

export default Home