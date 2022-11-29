import { createReducer } from '@reduxjs/toolkit'
import { fetchItems, getItem } from '../actions/items'

const INITIAL_STATE = {
  categories: [],
  items: [],
  loading: false,
  item: undefined
}

export const itemsReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(fetchItems.pending, (state, {payload}) => {
      state.loading = true
    })
    .addCase(fetchItems.fulfilled, (state, {payload}) => {
      state.items = payload.items
      state.categories = payload.categories
      state.loading = false
    })
    .addCase(getItem.pending, (state, {payload}) => {
      state.loading = true
    })
    .addCase(getItem.fulfilled, (state, {payload}) => {
      state.item = payload.item
      state.categories = payload.item.categories
      state.loading = false
    })
)

export default itemsReducer
