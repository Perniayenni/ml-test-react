import { combineReducers, configureStore } from "@reduxjs/toolkit"
import itemsReducer from './items'

export const rootReducer = combineReducers({
  items: itemsReducer
})

export const store = configureStore({
  reducer: rootReducer
})
