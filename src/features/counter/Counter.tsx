import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { increment, decrement, incrementByAmount, reset } from './counterSlice'
import './Counter.css'

export function Counter() {
  // Read the counter value from Redux store
  const count = useAppSelector((state) => state.counter.value)
  
  // Get the dispatch function to send actions to the store
  const dispatch = useAppDispatch()
  
  // Local state for the "increment by amount" input
  const [incrementAmount, setIncrementAmount] = useState('2')
  const incrementValue = Number(incrementAmount) || 0

  return (
    <div className="counter">
      <h2 className="counter-title">Redux Counter</h2>
      
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>

      <div className="counter-buttons">
        <button
          className="counter-btn decrement"
          onClick={() => dispatch(decrement())}
          aria-label="Decrement value"
        >
          −
        </button>
        
        <button
          className="counter-btn increment"
          onClick={() => dispatch(increment())}
          aria-label="Increment value"
        >
          +
        </button>
      </div>

      <div className="counter-custom">
        <input
          className="counter-input"
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          aria-label="Set increment amount"
        />
        <button
          className="counter-btn add"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
      </div>

      <button
        className="counter-btn reset"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>

      <div className="counter-info">
        <p>👆 This state is managed by <strong>Redux</strong></p>
        <p>Open Redux DevTools in your browser to inspect state changes!</p>
      </div>
    </div>
  )
}

