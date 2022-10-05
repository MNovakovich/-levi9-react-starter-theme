import React, { ReactNode } from 'react'
import Header from 'components/Header';
import Footer from 'components/Footer';
import styles from './styles.module.css';

interface IProps  {
    children?: ReactNode
}

const AppLayout:React.FC<IProps> = ({children}) => {
  return (
    <>
        <Header />
        <main className={styles.app_layout_main}>
          {children}
        </main>
        <Footer />
    </>
  )
}

export default AppLayout