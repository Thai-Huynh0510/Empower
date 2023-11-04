import * as at from "../actions/actionTypes"

// REDUCER
const allOrders = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_ORDERS:
      return action.payload
    case at.EDIT_ORDER:
      return state.map(order => {
        return (
          order.id === action.payload.id ? action.payload : order
        )
      })
    case at.DELETE_ORDER:
      return state.filter(order => order.id !== action.payload)
    case at.ADD_ORDER:
      return [...state, action.payload]
    default:
      return state
  }
}

export default allOrders