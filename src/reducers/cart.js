export const ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
}

export const initialCartState =
  JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = (state) => {
  const newValue = JSON.stringify(state)
  window.localStorage.setItem('cart', newValue)
}

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case ACTION_TYPES.ADD_TO_CART:
      const index = state.findIndex((item) => item.id === actionPayload.id)

      if (index >= 0) {
        // const newState = structuredClone(state)
        // newState[index].quantity += 1
        // updateLocalStorage(newState)
        // return newState

        const newState = state.map((item) => {
          if (item.id === actionPayload.id)
            return { ...item, quantity: item.quantity + 1 }
          return item
        })
        updateLocalStorage(newState)
        return newState
      }

      const newState2 = [...state, { ...actionPayload, quantity: 1 }]

      updateLocalStorage(newState2)
      return newState2

    case ACTION_TYPES.REMOVE_FROM_CART:
      const newState3 = state.filter((item) => item.id !== actionPayload.id)
      updateLocalStorage(newState3)
      return newState3
    case ACTION_TYPES.CLEAR_CART:
      updateLocalStorage([])
      return []
  }

  return state
}
