import React, { ReactNode } from 'react';
import { classNames } from '../../utils'
 import styles from  './styles.module.css';

interface IProps {
  className?:string;
  children: ReactNode,
  // All other props
  [x:string]: any;
}
const Button:React.FC<IProps> = ({ children, className='', ...props}) => {
  const classes = classNames(styles.btn, className)
  return (
    <button className={classes} {...props}>
       { children }
    </button>
  )
}

export default Button;