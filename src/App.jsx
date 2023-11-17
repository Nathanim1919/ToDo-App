import { useState } from 'react'
import './App.css'
import Header from './App/header.jsx'
import TodoDashBoard from './features/todo/todoDashBoard.jsx';
import TodoDetail from './features/todo/todoDetail.jsx';
import TaskList from './features/todo/taskList.jsx';
import TodoForm from './features/todo/todoForm.jsx';

function App() {
    const [isNightMode, setNightMode] = useState(false);

  return (
    <div div className = {
      isNightMode?"nightMode":""
    } >
      <Header isNightMode={isNightMode} setNightMode={setNightMode}/>
     {/* <TodoDashBoard/> */}
     {/* <TodoDetail/> */}
     {/* <TaskList/> */}
     <TodoForm/>
    </div>
  )
}

export default App;