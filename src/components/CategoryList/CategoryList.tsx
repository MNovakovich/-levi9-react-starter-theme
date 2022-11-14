import { useState } from 'react'
import { useQuery} from '@tanstack/react-query'
import ProductsService from 'services/products.service';

interface IProps {
    filterByCategory: (cat:string) => void
}
const CategoryList = ({filterByCategory}:IProps) => {

    const productsService = ProductsService();
    const [selectedCat, setSelectedCat ] = useState<string>('');

    const query = useQuery(['categories'], productsService.getAllCategories, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    })
    const { data } =  query;

    const onClickHandler = (cat:string) => {
        filterByCategory(cat);
        setSelectedCat(cat)
       }
  return (
    <div className="categories">
    <h3>Categories:</h3>
    <ul>
      <li onClick={() => onClickHandler('all')}>All</li>
       {data?.map((cat:string, index:number) => {
        return (<li style={{ color: cat === selectedCat ? 'blue': 'black'}} key={cat} onClick={() => onClickHandler(cat)}>{cat}</li>)
       })}
    </ul>
   </div>
  )
}

export default CategoryList