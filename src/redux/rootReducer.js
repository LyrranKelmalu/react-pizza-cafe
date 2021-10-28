import { combineReducers } from "redux"
import { AUTH, REGISTRATION, LOGIN } from "./types"

function authReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1
  } else if (action.type === DECREMENT) {
    return state - 1
  }
  
  return state
}
