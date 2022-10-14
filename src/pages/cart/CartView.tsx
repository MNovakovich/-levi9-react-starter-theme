import React, { useContext } from "react";
import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import styles from "./styles.module.css";
// import fakedata from 'context/cart/fakedata';
import { ICartItem } from "interfaces";
import QuantityButton from "components/QuantityButton/QuantityButton";
import { CartContext } from "context/cart/CartContext";
const CartView = () => {
  const { cartState, removeCartItem, updateQuantity } = useContext(CartContext);

  const { items } = cartState;
  return (
    <AppLayout>
      <Headline title="Cart" />
      <div className={styles.cartPage}>
      <div className={styles.cartItems}>
        {items.map((item) => {
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
      <div className={styles.cartTotal}>
        <h4>Cart totals</h4>
        <table>
          <tr>
            <th>SUBTOTAL</th>
            <th>$4444</th>
          </tr>
          <tbody>
            <tr>
              <td>Shipping</td>
              <td></td>
            </tr>
            <tr>
              <td>Flat rate:</td>
              <td>$2.50</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tr>
            <th>TOTAL</th>
            <th>$1.4444</th>
          </tr>
        </table>
      </div>
      </div>
    </AppLayout>
  );
};

interface ICartProps extends ICartItem {
  onClickHandler: (operation: "plus" | "minus") => void;
  removeHandler: (id: number) => void;
}

const CartItem = ({
  id,
  title,
  price,
  quantity,
  image,
  onClickHandler,
  removeHandler,
}: ICartProps) => {
  return (
    <div className={styles.cartItem}>
      <img className={styles.cartItem_image} src={image} alt={title} />
      <div>
        <p className={styles.cartItem_title}>{title}</p>
        <span className={styles.cartItem_priceInfo}>
          ${price} x {quantity}
        </span>
      </div>
      <QuantityButton quantity={quantity} onClickHandler={onClickHandler} />
      <div>sum: ${(price * quantity).toFixed(2)}</div>
      <button onClick={() => removeHandler(id)}>Remove</button>
    </div>
  );
};

export default CartView;
