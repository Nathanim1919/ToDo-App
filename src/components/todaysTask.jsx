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
import { markAsCompleted } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';

function TodaysTask() {

    const todos = useSelector(state=>state.todos.todos);
    const dispatch = useDispatch();

   return (
    <TaskList >
        <h1>All ToDos</h1>
        <div className='todaysTask'>
            {
             todos && todos.map(todo=>(
                        <div className='task'>
                            <div>
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
                                <div>
                                    <MdDelete/>
                                </div>
                                <div>
                                    <FiEdit/>
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

    >h1{
        font-size:1.2rem;
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