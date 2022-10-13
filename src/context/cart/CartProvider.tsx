import { useReducer } from 'react';

import { CartContext } from './CartContext';
import { CartState } from './interfaces';
import { cartReducer } from './CartReducer';
import fakedata from './fakedata';
import { IProduct } from 'interfaces';

export type CartContextProps = {
    items: IProduct[];
    addToCart: ( item:IProduct ) => void;
} 

const INITIAL_STATE: CartState = {
    todoCount: 2,
    items: fakedata,
    completed: 0,
    pending: 2
}




interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props ) => {

    const [ state, dispatch] = useReducer( cartReducer, INITIAL_STATE );

    const addToCart = ( item: IProduct ) => {
        dispatch({ type: 'addToCart', payload: item })
    }


    return (
        <CartContext.Provider value={{
            items:state.items,
            addToCart
        }}>
            { children }
        </CartContext.Provider>
    )
}