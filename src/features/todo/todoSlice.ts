import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoState {
    items: Todo[];
}

const initialState: TodoState = {
    items: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.items.push({
                id: state.items.length + 1,
                text: action.payload,
                completed: false,
            })
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.items.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(todo => todo.id !== action.payload);
        },
        clearAllTodos: (state) => {
            state.items = [];
        },
    }
})

export const { addTodo, toggleTodo, deleteTodo, clearAllTodos } = todoSlice.actions;
export default todoSlice.reducer;