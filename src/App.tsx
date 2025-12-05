import { Counter } from './features/counter/Counter'
import './App.css'
import { Todo } from './features/todo/todo'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Redux Learning App</h1>
        <p>Understanding state management with Redux Toolkit</p>
      </header>
      
      <main className="app-main">
        <Counter />
        <Todo />
      </main>

      <footer className="app-footer">
        <div className="redux-flow">
          <span className="flow-step">Component</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step dispatch">dispatch(action)</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step reducer">Reducer</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step store">Store</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">UI Updates</span>
        </div>
      </footer>
    </div>
  )
}

export default App
