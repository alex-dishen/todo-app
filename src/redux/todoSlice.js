import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const todoSlice = createSlice({
    name: "tasks",
    initialState: [
        { id: uniqid(), title: 'Go to the store', completed: false },
        { id: uniqid(), title: 'Meet with friend', completed: true },
        { id: uniqid(), title: 'Finish coding task', completed: true },
        { id: uniqid(), title: 'Cook', completed: false },
    ],
    reducers: {
        addTask: (state, action) => {
            const task = {
                id: uniqid(),
                title: action.payload.title,
                completed: false
            };
            state.push(task);
        },

        toggleComplete: (state, action) => {
            const index = state.findIndex(
                task => task.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },

        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload.id)
        },

        changeTitle: (state, action) => {
            const index = state.findIndex(
                task => task.id === action.payload.id
            );
            state[index].title = action.payload.title;
        }
    }
});

export const { 
    addTask,
    toggleComplete,
    deleteTask,
    toggleChange,
    changeTitle
} = todoSlice.actions;

export default todoSlice.reducer;