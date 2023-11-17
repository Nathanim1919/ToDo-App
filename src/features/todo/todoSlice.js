import {
    createSlice
} from "@reduxjs/toolkit";
import {
    v4 as uuidv4
} from 'uuid';

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        categories: [],
        todos: [],
        history: [],
        historyIndex: -1,
        sortPreference: 'dueDate', // Default sort preference
        completedCount: 0,
    },

    reducers: {
        addCategory: (state, action) => {
            const {
                title
            } = action.payload;
            const newCategory = {
                id: uuidv4(),
                title,
                todos: [],
            };
            state.categories.push(newCategory);
        },

        addTodo: (state, action) => {
            const {
                title,
                description,
                dueDate,
                priority,
                catagorie,
                categoryId
            } = action.payload;

            const newTodo = {
                id: uuidv4(),
                title,
                description,
                dueDate,
                priority,
                status: 'Inprogress',
                createdAt: Date.now(),
                catagorie
            };

            // Find the category and add the todo to its todos array
            const category = state.categories.find(cat => cat.id === categoryId);
            if (category) {
                category.todos.push(newTodo);
            }

            state.todos.push(newTodo);
            state.history = [...state.history.slice(0, state.historyIndex + 1), state.todo];
            state.historyIndex += 1;
        },

        deleteTodo: (state, action) => {
            const {
                todoId
            } = action.payload;
            state.todos = state.todo.filter(todo => todo.id !== todoId);
             state.history = [...state.history.slice(0, state.historyIndex + 1), state.todo];
             state.historyIndex += 1;
        },

        clearCompletedTodo: (state) => {
            state.todos = state.todos.filter(todo => todo.status !== 'Completed');
        },


        setSortPreference: (state, action) => {
            state.sortPreference = action.payload;
        },

        sortTodos: (state) => {
            // Sort todos based on the current sort preference
            state.todos.sort((a, b) => {
                if (state.sortPreference === 'dueDate') {
                    return a.dueDate - b.dueDate;
                } else if (state.sortPreference === 'createdAt') {
                    return a.createdAt - b.createdAt;
                } else if (state.sortPreference === 'priority') {
                    return a.priority - b.priority;
                } else {
                    return 0; // Default to no sorting
                }
            });
        },


        markAsCompleted: (state, action) => {
            const {
                todoId
            } = action.payload;
            const todoToComplete = state.todos.find((todo) => todo.id === todoId);
            if (todoToComplete && todoToComplete.status !== 'Completed') {
                todoToComplete.status = 'Completed';
                state.completedCount += 1;
            }
        },


        undo: (state) => {
            if (state.historyIndex > 0) {
                state.historyIndex -= 1;
                state.todos = state.history[state.historyIndex];
            }
        },

         redo: (state) => {
             if (state.historyIndex < state.history.length - 1) {
                 state.historyIndex += 1;
                 state.todos = state.history[state.historyIndex];
             }
         },
    },
});

export const {
    undo,
    redo,
    addTodo,
    deleteTodo,
    addCategory,
    clearCompletedTodo
} = todoSlice.actions;
export default todoSlice.reducer;