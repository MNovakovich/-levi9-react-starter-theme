import { useState } from 'react'
import { useQuery} from '@tanstack/react-query'
import productsService from 'services/products.service';

interface IProps {
    filterByCategory: (cat:string) => void
}
const CategoryList = ({filterByCategory}:IProps) => {

    const [selectedCat, setSelectedCat ] = useState<string>('All');

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
      <li style={{color:selectedCat === 'All' ? 'blue': 'black'}} onClick={() => onClickHandler('all')}>All</li>
       {data?.map((cat:string) => {
        return (<li style={{ color: cat === selectedCat ? 'blue': 'black'}} key={cat} onClick={() => onClickHandler(cat)}>{cat}</li>)
       })}
    </ul>
   </div>
  )
}

export default CategoryList