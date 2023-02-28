import { useContext } from 'react'
import { CartContext } from '../context/cart'

export function useCart() {
  const context = useContext(CartContext)
  const { addToCart, cart, removeFromCart, clearCart } = context
  if (context === undefined) throw new Error('El contexto no se puede usar aca')

  const checkCartHasItem = (product) => {
    const { cart } = context
    return cart.findIndex((item) => item.id === product.id) >= 0
  }
  return { addToCart, cart, checkCartHasItem, removeFromCart, clearCart }
}
