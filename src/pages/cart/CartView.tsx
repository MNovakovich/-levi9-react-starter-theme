import  { useContext } from "react";
import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import styles from "./styles.module.css";
import fakedata from 'context/cart/fakedata';
import { CartContext } from "context/cart/CartContext";
import CartItem from './components/CartItem';
import CartTotals from "./components/CartTotals";

const CartView = () => {
  const { cartState, removeCartItem, updateQuantity } = useContext(CartContext);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { items } = cartState;
  return (
    <AppLayout>
      <Headline title="Cart" />
      <div className={styles.cartPage}>
      <div className={styles.cartItems}>
      {fakedata.map(item=> ({...item, quantity:0})).map((item) => {
          return (
            <CartItem
              key={item.id}
              {...item}
              onClickHandler={(operation) => {
                updateQuantity(item.id, operation);
              }}
              removeHandler={(id) => removeCartItem(id)}
            />
          );
        })}
      </div>
      <CartTotals />
    
      </div>
    </AppLayout>
  );
};


export default CartView;
