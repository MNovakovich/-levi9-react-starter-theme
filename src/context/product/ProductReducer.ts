import { ProductState } from "./ProductProvider";
import { IProduct } from "interfaces";

type ProductAction =
  | { type: "getAll"; payload: IProduct[] }
  | { type: "filterByCat"; payload: string}
  | { type: "sortBy", payload:any }

export const productReducer = (
  state: ProductState,
  action: ProductAction
): ProductState => {
    
  switch (action.type) {
    case "getAll":
      return {
        ...state,
        items: action.payload,
        filtered:action.payload
      };
      case "filterByCat":
        const filtered = state.items.filter((item:IProduct) => (item.category === action.payload))
        return {
          ...state,
          filtered: action.payload === 'all' ? state.items : filtered
        };

      case "sortBy":
        const sort = state.filtered.sort((itemA:any, itemB:any) =>{
             const key:any = action.payload.by;
             if(action.payload.direction === 'desc') {
              if(itemA[key] < itemB[key]) return 1
             } else {
              if(itemA[key] > itemB[key]) return 1
             }
             
             return -1;
        })
        return {
          ...state,
          filtered: sort
        };
    default:
      return state;
  }
};
