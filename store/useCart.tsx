import { create } from 'zustand'
import { CartProduct } from '@/types'
type CartState = {
    items: CartProduct[]
}

type CartActions = {
    addItem: (item: CartProduct) => void
    removeItem: (id: string) => void
    updateItem: (id: string, quantity: number) => void
    clearCart: () => void
}

export const useCart = create<CartState & CartActions>()((set) => ({
    items: [],
    addItem: (item: CartProduct) => set((state) => ({ items: [...state.items, item] })),
    removeItem: (id: string) => set((state) => ({ items: state.items.filter((item) => item.id != id) })),
    updateItem: (id: string, quantity: number) => set((state) => ({ items: state.items.map((item) => item.id === id ? { ...item, quantity } : item) })),
    clearCart: () => set({ items: [] })
}))
