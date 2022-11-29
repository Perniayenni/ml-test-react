import { createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../../api/items'

const NAMESPACE = 'ITEMS'

export const fetchItems = createAsyncThunk(
  `${NAMESPACE}/fetchItems`,
  async (params, { rejectWithValue }) => {
    try {
      const response = await api.fetchItems(params)
      const { data } = response
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const getItem = createAsyncThunk(
  `${NAMESPACE}/getItem`,
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getItem(id)
      const { data } = response
      console.log(data)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
