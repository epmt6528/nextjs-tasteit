import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type User = {
  restaurantName: string | null
  email: string | null
  phone: string | null
  province: string | null
  city: string | null
  address: string | null
  postalCode: string | null
  description: string | null
}

export type UserState = {
  user: User
}

export type UpdateUserPayload = User
export type AddHistoryPayload = string

const initialState: UserState = {
  user: {
    restaurantName: null,
    email: null,
    phone: null,
    province: null,
    city: null,
    address: null,
    postalCode: null,
    description: null,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<UpdateUserPayload>) {
      state.user = action.payload
    },
    reset(): UserState {
      return initialState
    },
  },
})
