import { useState } from 'react'
import './App.css'
import Header from './App/header.jsx'
import TodoDashBoard from './features/todo/todoDashBoard.jsx';
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
        <Route path='catagorie/:catagoriId' element={<TaskList/>}/>
      </Routes>
    </div>
  )
}

export default App;