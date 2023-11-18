import {
    createSlice
} from "@reduxjs/toolkit";
import {
    v4 as uuidv4
} from 'uuid';

const todoSlice = createSlice({
    name: "todos",
    initialState: {
       categories: [{
               id: '34682684628364287',
               title: "Personal",
               todos: [],
           },
           {
               id: '837647863486262',
               title: "Work",
               todos: [],
           },
       ],

        todos: [
            // {
            //     id: uuidv4(),
            //     title: "Complete Project Proposal",
            //     description: "Research and compile information for the project proposal.",
            //     dueDate: "2023-12-01",
            //     priority: "High",
            //     catagorieId: "34682684628364287"
            // }, {
            //     id: uuidv4(),
            //     title: "Review Code Changes",
            //     description: "Go through the recent code changes and provide feedback.",
            //     dueDate: "2023-12-01",
            //     priority: "High",
            //     catagorieId: "34682684628364287"
            // },
            //  {
            //      id: uuidv4(),
            //      title: "Prepare for Meeting",
            //      description: "Gather necessary documents and agenda items for the upcoming meeting.",
            //      dueDate: "2023-12-02",
            //      priority: "Medium",
            //      catagorieId: "837647863486262"
            //  }, {
            //      id: uuidv4(),
            //      title: "Submit Project Report",
            //      description: "Finalize and submit the monthly project report.",
            //      dueDate: "2023-12-03",
            //      priority: "Medium",
            //      catagorieId: "837647863486262"
            //  },
        ],
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
            state.history = [...state.history.slice(0, state.historyIndex + 1), state.todos];
            state.historyIndex += 1;
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

           state.history = [...state.history.slice(0, state.historyIndex + 1), state.todos];
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
            else{
                 todoToComplete.status = 'Inprogress';
                 state.completedCount -= 1;
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
    clearCompletedTodo,
    markAsCompleted
} = todoSlice.actions;
export default todoSlice.reducer;