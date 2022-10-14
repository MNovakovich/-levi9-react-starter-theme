import React, { useState, useEffect, useContext } from 'react'
import { AppLayout } from 'components/Layouts'
import Button from 'components/Button'
import { CartContext } from 'context/cart/CartContext';
import fakedata from 'context/cart/fakedata';

const Home = () => {
    const [ item, setItem] = useState(false)
    const { cartState, addToCart, removeCartItem, updateQuantity } = useContext( CartContext );

    console.log(cartState, 'todo')
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
             "quantity":1,
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          
          },)
            setItem(!item);
        }}> Click</Button><br />
       <ul>
          {
            fakedata.map((item) => {
              return(
                <li>
                  {item.title} price: {item.price}{""}
                  <Button onClick={() =>   addToCart({...item, quantity:0})}>Add</Button>{' '}
                </li>
              )
            })
          }
       </ul>
       <hr />
       <ul>
          {
            cartState.items.map((item) => {
              return(
                <li>
                  {item.title} quantity: {item.quantity} {""}
                  <Button onClick={() => updateQuantity(item.id, 'plus')}>Plus</Button>{' '}
                  <Button onClick={() => updateQuantity(item.id, 'minus')}>MInus</Button> {" "}
                  <Button onClick={() => removeCartItem(item.id)}>Remove</Button>
                </li>
              )
            })
          }
       </ul>
       <h2>{cartState.amount}</h2>
    </AppLayout>
  )
}

export default Home