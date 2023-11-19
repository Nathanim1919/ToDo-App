import React, { useState } from 'react'
import styled from 'styled-components'
import {
    FaCheckCircle,
    FaRegCircle
} from "react-icons/fa";

import {
    FiEdit
} from "react-icons/fi";
import {
    MdDelete,
    MdKeyboardBackspace
} from "react-icons/md";
import {useSelector} from 'react-redux'
import { markAsCompleted, deleteTodo } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';

function TodaysTask() {

const [activeTasks, setActiveTasks] = useState(false);   
const [completedTasks, setCompletedTasks] = useState(false);    
const [allTasks, setAllTasks] = useState(false);    

const todos = useSelector(state => state.todos.todos);
const completedTodos = useSelector(state => state.todos.todos.filter(todo => todo.status === 'Completed'));
const inprogressTodos = useSelector(state => state.todos.todos.filter(todo => todo.status === 'Inprogress'));

    const dispatch = useDispatch();

   return (
    <TaskList >
        <div className='filter'>
        <p>{inprogressTodos.length} items left</p>
        <div>
            <p onClick={
                ()=>{
                    setAllTasks(true);
                    setActiveTasks(false);
                    setCompletedTasks(false);
                }
            }>All({todos.length})</p>
            <p onClick = {
                () => {
                    setActiveTasks(true); 
                    setCompletedTasks(false);
                     setAllTasks(false);
                }
            } > Active({
                inprogressTodos.length
            }) </p>
            <p onClick = {
                () => {
                    setCompletedTasks(true);
                    setActiveTasks(false);
                     setAllTasks(false);
                }
            } > Completed({
                completedTodos.length
            }) </p>
        </div>
        </div>
        <div className='todaysTask'>
            {
             todos && (activeTasks ? inprogressTodos : completedTasks ? completedTodos:todos).map(todo => (
                        <div className='task'>
                            <div className={todo.status === "Completed"?"taskDone":""}>
                                <div onClick = {
                                        () => dispatch(markAsCompleted({
                                            todoId: todo.id
                                        }))
}>
                                    {
                                        todo.status === "Inprogress" ? <FaRegCircle/> : <FaCheckCircle/>
                                    }
                                </div>
                                <div className='title'>
                                    <p>{todo.title}</p>
                                </div>
                            </div>

                            <div className='manipulationIcons'>
                                <div onClick = {
                                    () => dispatch(deleteTodo({
                                        todoId: todo.id,
                                    }))
                                } >
                                    <MdDelete/>
                                </div>
                            </div>
                        </div>
                ))
            }
        </div>
    </TaskList>
  )
}

export default TodaysTask;

const TaskList  = styled.div`
    display: grid;
    padding: 1rem;

    .filter{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        >div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap:1rem;

            >*{
                background-color: blue;
                padding: 0.1rem .5rem;
                border-radius: 20px;
                color:#fff;
                cursor: pointer;
                font-size: .9rem;
                &:hover{
                    opacity: .5;
                }
            }
        }
    }

    .todaysTask{
        display: grid;
        gap: .5rem;
    }

    .task{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding: 0.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 12px rgba(0,0,0,.05);
        cursor: pointer;
        transition: all .2s ease-in-out;
        &:hover{
            transform: scale(.96);
            border-left: 7px solid blue;
        }


        >div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
        }

        > div.taskDone .title{
            text-decoration: line-through;
        }

        >div:nth-child(1) .title{
            display: flex;
            flex-direction: column;

            >*{
                margin:0;
            }

            p{
                font-size: 1rem;
                font-weight: 300;
            }

            span{
                font-size: .9rem;
                font-weight: 800;
            }
        }

        .manipulationIcons{
            >*{
                width:30px;
                height:30px;
                border-radius: 50%;
                display: grid;
                place-items: center;

                &:hover{
                    background-color: #eee;
                }
            }
        }
    }
`