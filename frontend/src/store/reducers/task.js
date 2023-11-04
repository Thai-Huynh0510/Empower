import { FETCH_TASK } from "../actions/actionTypes"

const initialState = {
  employee: {},
  order: {},
}

// REDUCER
const task = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASK:
      return{
      ...state,
      ...action.payload, 
      orders: action.payload.orders}
    default:
      return state
  }
}

export default task