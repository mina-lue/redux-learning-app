import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

// Create the Redux store
export const store = configureStore({
  reducer: {
    // Add the counter reducer under "counter" key
    counter: counterReducer,
  },
})

// Infer types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

