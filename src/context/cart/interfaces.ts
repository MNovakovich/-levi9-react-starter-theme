import { IProduct } from './../../interfaces/index';
export interface Todo {
    id: string;
    desc: string;
    completed: boolean;
}

export interface CartState {
    todoCount: number;
    items: IProduct[],
    completed: number;
    pending: number;
}