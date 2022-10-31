import { useReducer } from "react";
import { ProducdtContext } from "./ProductContext";
import { productReducer } from "./ProductReducer";
import {  IProduct } from "interfaces";
import ProductsService from "services/products.service";


export interface ProductState {
  items: IProduct[];
  filtered:  IProduct[];
 
}

export type ProductContextProps = {
  productState: ProductState;
  getAll: () => void,
  filterByCat: (cat:string) => void
  sortBy: (cat:any) => void

};

const INITIAL_STATE: ProductState = {
  items: [],
  filtered:[]
};
interface props {
  children: JSX.Element;
}

export const ProductProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(productReducer, INITIAL_STATE);


  const getAll = async () => {
    
    try {
      const data = await ProductsService().getAll();
      dispatch({
        type:'getAll',
        payload: data
      })
    } catch (error) {
      
    }
  }

  const filterByCat = (cat:string) => {
    dispatch({
      type:'filterByCat',
      payload:cat
    })
  }

  const sortBy = (sorter:any) => {
    dispatch({
      type:'sortBy',
      payload:sorter
    })
  }

  return (
    <ProducdtContext.Provider
      value={{
        productState: state,
        getAll,
        filterByCat,
        sortBy
      }}
    >
      {children}
    </ProducdtContext.Provider>
  );
};
