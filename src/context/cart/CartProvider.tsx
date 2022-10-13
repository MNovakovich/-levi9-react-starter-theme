import { useReducer } from 'react';

import { CartContext } from './CartContext';

import { cartReducer } from './CartReducer';
import fakedata from './fakedata';
import { IProduct } from 'interfaces';

export type CartContextProps = {
    items: IProduct[];
    loading:boolean,
    addToCart: ( item:IProduct ) => void;
} 

export interface CartState {
    items: IProduct[],
    loading: boolean;
}

const INITIAL_STATE: CartState = {
    items: fakedata,
    loading: false
}
interface props {
    children: JSX.Element
}

export const TodoProvider = ({ children }: props ) => {

    const [ state, dispatch] = useReducer( cartReducer, INITIAL_STATE );

    const addToCart = ( item: IProduct ) => {
        dispatch({ type: 'addToCart', payload: item })
    }


    return (
        <CartContext.Provider value={{
            items:state.items,
            loading: state.loading,
            addToCart
        }}>
            { children }
        </CartContext.Provider>
    )
}