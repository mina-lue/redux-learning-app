import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define the type for the slice state
interface CounterState {
  value: number
}

// Define the initial state
const initialState: CounterState = {
  value: 0,
}

// Create the slice with reducers
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Increment the counter by 1
    increment: (state) => {
      state.value += 1
    },
    // Decrement the counter by 1
    decrement: (state) => {
      state.value -= 1
    },
    // Increment by a specific amount
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    // Reset counter to 0
    reset: (state) => {
      state.value = 0
    },
  },
})

// Export actions so components can dispatch them
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

// Export the reducer to add to the store
export default counterSlice.reducer

