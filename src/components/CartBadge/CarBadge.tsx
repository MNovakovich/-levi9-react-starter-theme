import React, { memo } from 'react'
import styles from './styles.module.css';
import SvgIcon from 'components/SvgIcon';
const CarBadge = () => {
  return (
     <span className={styles.cart_badge}>
      <SvgIcon type="cart" className={styles.cart_icon} />
        <svg className={styles.cart_icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
         <span className={styles.cart_items_number}>14</span>
    </span>
  )
}

export default memo(CarBadge)