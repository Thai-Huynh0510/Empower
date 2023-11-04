import * as at from "../actions/actionTypes"

// REDUCER
const allEvents = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_EVENTS:
      return action.payload
    case at.EDIT_EVENT:
      return state.map(event => {
        return (
          event.id === action.payload.id ? action.payload : event
        )
      })
    case at.DELETE_EVENT:
      return state.filter(event => event.id !== action.payload)
    case at.ADD_EVENT:
      return [...state, action.payload]
    default:
      return state
  }
}

export default allEvents