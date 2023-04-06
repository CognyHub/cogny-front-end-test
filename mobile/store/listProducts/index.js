import { create } from 'zustand';

const initialListProducts = {
    listProducts: [],
};

export const useListProductsStore = create((set) => ({
    ...initialListProducts, 
    increaseList: (products) => set((state) => ({ listProducts: products}))
}))