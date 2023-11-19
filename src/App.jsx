import { useState } from 'react'
import './App.css'
import Header from './App/header.jsx'
import TodoDashBoard from './features/todo/todoDashBoard.jsx';
import TaskList from './features/todo/taskList.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
   
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/ToDo-App' element={<TodoDashBoard/>}/>
        <Route path='ToDo-App/catagorie/:catagoriId' element={<TaskList/>}/>
      </Routes>
    </div>
  )
}

export default App;