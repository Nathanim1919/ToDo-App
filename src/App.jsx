import { useState } from 'react'
import './App.css'
import Header from './App/header.jsx'
import TodoDashBoard from './features/todo/todoDashBoard.jsx';
import TodoDetail from './features/todo/todoDetail.jsx';
import TaskList from './features/todo/taskList.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
    const [isNightMode, setNightMode] = useState(false);

  return (
    <div div className = {
      isNightMode?"nightMode":""
    } >
      <Header isNightMode={isNightMode} setNightMode={setNightMode}/>
      <Routes>
        <Route path='/' element={<TodoDashBoard/>}/>
        <Route path='catagorie/catagoriId' element={<TaskList/>}/>
        <Route path='catagorie/:catagoriId/task/:taskId' element={<TodoDetail/>}/>
      </Routes>
    </div>
  )
}

export default App;