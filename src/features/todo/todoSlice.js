import {
    createSlice
} from "@reduxjs/toolkit";
import {
    v4 as uuidv4
} from 'uuid';

const todoSlice = createSlice({
    name: "todos",
    initialState: {
       categories: [
       ],

        todos: [
        ],
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
            console.log(state.categories)
        },
    

        addTodo: (state, action) => {
            const {
                title,
                catagoriId
            } = action.payload;

            const newTodo = {
                id: uuidv4(),
                title,
                status: 'Inprogress',
                catagoriId // Corrected typo here
            };

            // Find the category and add the todo to its todos array
            const category = state.categories.find(cat => cat.id === catagoriId);
            category.todos.push(newTodo);
            console.log(category.todos)

            state.todos.push(newTodo);
        },


       deleteTodo: (state, action) => {
           const {
               todoId
           } = action.payload;

           // Remove the todo from the todos array
           state.todos = state.todos.filter(todo => todo.id !== todoId);

           // Remove the todo from the corresponding category's todos array
           state.categories.forEach(category => {
               category.todos = category.todos.filter(todo => todo.id !== todoId);
           });
       },


       markAsCompleted: (state, action) => {
           const {
               todoId
           } = action.payload;

           // Find the todo in the state.todos array
           const todoToComplete = state.todos.find((todo) => todo.id === todoId);

               if (todoToComplete.status !== 'Completed') {
                   todoToComplete.status = 'Completed';
               } else {
                   todoToComplete.status = 'Inprogress';
               }
           }
    },
});

export const {
    addTodo,
    deleteTodo,
    addCategory,
    markAsCompleted,
} = todoSlice.actions;
export default todoSlice.reducer;