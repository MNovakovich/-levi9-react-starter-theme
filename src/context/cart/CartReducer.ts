import { CartState } from './interfaces';
import { IProduct } from 'interfaces'
type CartAction = 
    | { type: 'getAll' }
    | { type: 'addToCart', payload: IProduct };


export const cartReducer = ( state: CartState, action: CartAction ): CartState => {

    switch ( action.type ) {
        case 'getAll':
            return {
                ...state,
                items: [ ...state.items ]
            }

        case 'addToCart': 
            return {
                ...state,
                items: [ ...state.items, action.payload ]
            }

            
        default:
            return state;
    }

}
