import { createContext } from "react";
import { ProductContextProps } from './ProductProvider'

export const ProducdtContext = createContext<ProductContextProps>({} as ProductContextProps );