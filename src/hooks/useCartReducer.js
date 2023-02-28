import { initialCartState, reducer, ACTION_TYPES } from '../reducers/cart'
import { useReducer } from 'react'

export function useCartReducer() {
  const [state, dispatch] = useReducer(reducer, initialCartState)
  const addToCart = (product) =>
    dispatch({ type: ACTION_TYPES.ADD_TO_CART, payload: product })
  const removeFromCart = (product) =>
    dispatch({ type: ACTION_TYPES.REMOVE_FROM_CART, payload: product })
  const clearCart = () => dispatch({ type: ACTION_TYPES.CLEAR_CART })

  return { state, addToCart, removeFromCart, clearCart }
}
