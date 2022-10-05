import React, { memo} from 'react'
import styles from './styles.module.css';

const Button = () => {

  return (
    <button className={styles.btn}>Button</button>
  )
};

export default memo(Button);