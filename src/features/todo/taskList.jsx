import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
    FaCheckCircle,
    FaRegCircle,
    FaPlus
} from "react-icons/fa";

import {
    FiEdit
} from "react-icons/fi";
import {
    MdDelete,
    MdKeyboardBackspace
} from "react-icons/md";
import TodoForm from './todoForm';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css'

function TaskList() {

  const [openForm, setOpenForm] = useState(false);  
  const {
      catagoriId
  } = useParams()

  const cat = useSelector(state => {
      const category = state.todos.categories.find(cat => cat.id === catagoriId);
      console.log(category)
      return category;
  });

useEffect(() => {
    Aos.init({
        duration: 1000
    })
}, [])

  return (
    <TaskLists data-aos="fade-up">
        {openForm && <TodoForm setOpenForm={setOpenForm}/>}
        <div className = 'header' >
            <Link to={'/'} className='backIcon'>
                <MdKeyboardBackspace/>
            </Link>

            <div className='catagorie'>
                <div onClick = {
                    () => setOpenForm(true)
                } >
                    <FaPlus/>
                </div>
                <h3>{cat.title}</h3>
            </div>
          </div>
        <div className='taskList'>
            {
                cat && cat.todos.map(task=>(
                    <div>
                        <div>
                            <div>
                                <FaRegCircle/>
                            </div>
                            <div className='info'>
                                <p>{task.title}</p>
                            </div>

                        </div>
                        <div className="icons">
                            <div><MdDelete/></div>
                            <div>
                                <FiEdit/>
                            </div>
                        </div>
                    </div>
                ))
            }
           </div>
    </TaskLists>
  )
}

export default TaskList;


const TaskLists = styled.div`
    padding:1rem;
    display: grid;


    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .backIcon{
            font-size: 1.5rem;
            width:30px;
            height: 30px;
            border-radius: 50%;
            background-color: #fff;
            display: grid;
            place-items: center;
            cursor: pointer;


            &:hover{
                color:#eee;
            }
        }

        .catagorie{
            display: flex;
            align-items: center;
            gap:1rem;

            >div{
                width:25px;
                height:25px;
                border-radius: 50%;
                display: grid;
                place-items: center;
                background-color: blue;
                color:#fff;
                cursor: pointer;
            }
        }
    }

    .taskList {
        display: flex;
        flex-direction: column;
        padding:1rem;
        gap:.5rem;

        >*{
            margin: 0;
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:.0rem 1rem;
            box-shadow: 0 3px 12px rgba(0,0,0,.1);
            border-radius: 5px;
            cursor: pointer;
            border:1px solid transparent;
            transition: all .3s ease-in-out;


            &:hover{
                 border:1px solid #333;
                 transform: translateX(10px);
            }

            >div:nth-child(1){
                display: flex;
                align-items: center;
                gap: 1rem;
            }
        }

        .icons{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;

            >*{
                width:30px;
                height:30px;
                background-color: #eee;
                border-radius: 50%;
                display: grid;
                place-items: center;
                border: 1px solid transparent;

                &:hover{
                    background-color: transparent;
                    border: 1px solid #333;
                }
            }

        }
    }


    @media screen and (min-width: 768px) {
        width: 80%;
        margin:auto;
    }
`