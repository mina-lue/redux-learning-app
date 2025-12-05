import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { addTodo, deleteTodo, clearAllTodos, toggleTodo } from "./todoSlice";
import { useState } from "react";

export function Todo() {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <h2>Todo List</h2>
            <input type="text" placeholder="Add a new todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => dispatch(addTodo(inputValue))}>Add Todo</button>
            <button onClick={() => dispatch(clearAllTodos())}>Clear All</button>
            <TodoList />
        </div>
    );
}

export function TodoList() {
    const dispatch = useDispatch();
    const todos = useAppSelector((state) => state.todos.items);
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <button onClick={()=> dispatch(toggleTodo(todo.id))}>{todo.completed ? 'Completed' : 'complete'}</button>
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                    <button onClick={()=> dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>
            ))}
        </ul>
    );
}