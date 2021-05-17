import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type User = {
  restaurantName: string | null
  email: string | null
  token: string | null
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
    token: null,
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
