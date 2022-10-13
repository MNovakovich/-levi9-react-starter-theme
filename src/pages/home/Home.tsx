import React, { useState, useEffect, useContext } from 'react'
import { AppLayout } from 'components/Layouts'
import Button from 'components/Button'
import { CartContext } from 'context/cart/CartContext';

const Home = () => {
    const [ item, setItem] = useState(false)
    const { items, addToCart } = useContext( CartContext );

    console.log(items, 'todo')
  useEffect(() => {
    getAllProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
   
  const getAllProducts = async () => {
    try {
        //const res = await productsService.fetchAllProducts();
        //const res = await  authService.signin('mor_2314', '83r5^_');
        // const data = jwtDecoder(res.data.token);
   
    } catch (error) {
      
    }
  }
  return (
    <AppLayout>
        Home
        <Button onClick={() =>{
          addToCart({
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
              "rate": 3.9,
              "count": 120
            }
          },)
            setItem(!item);
        }}> Click</Button><br />
    </AppLayout>
  )
}

export default Home