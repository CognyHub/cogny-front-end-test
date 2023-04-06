import { create } from 'zustand'

const initialShoppingCart = {
    products: [],
}

export const useShoppingCartStore = create((set) => ({
    ...initialShoppingCart, 
    increaseProduct: (product) => set((state) => {
        const p = state.products.find((p) => p.id == product.id)

        if (p) {
            return ({ products: state.products.map(item => {
                if (item.id === product.id) {
                    item.quantity++
                }
                return item
            })})
        } else {
            return ({ products: [...state.products, {...product, quantity: 1}]})
        }
    }),
    removeAllProducts: () => set(initialShoppingCart),
    decreaseProduct: (productId) => set((state) => ({ products: state.products.filter((product) => product.id !== productId)})),
    alterQuantity: (productId, quantity) => set((state) => ({ products: state.products.map(item => {
        if (item.id === productId) {
            item.quantity = quantity
        }
        return item
    })}))
}))