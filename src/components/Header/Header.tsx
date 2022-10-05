import CartBadge from 'components/CartBadge';
import React from 'react'
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/LogoLevi.png';

export const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logo_wrapp}>
            <img src={logo} alt="logo" style={{width:'50px'}} />
        </div>
        <nav>
            <ul className={styles.nav_items}>
                <Link to={'/'}><li className={styles.nav_item}>Home</li></Link>
                <Link to={'/about'}><li className={styles.nav_item}>About</li></Link>
            </ul>
        </nav>
         <CartBadge />
    </header>
  );
}


export default Header;