import React from 'react'
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

function TaskList() {
  return (
    <TaskLists >
        <div className='header'>
            <div className='backIcon'>
                <MdKeyboardBackspace/>
            </div>

            <div>
                <h2>Personal Tasks</h2>
            </div>
        </div>

        <div className='taskList'>
            <div>
                <div>
                    <div>
                        <FaRegCircle/>
                    </div>
                    <div>Task List</div>
                </div>
                <div className="icons">
                    <div><MdDelete/></div>
                    <div>
                        <FiEdit/>
                    </div>
                </div>
            </div>
             <div>
                <div>
                    <div>
                        <FaRegCircle/>
                    </div>
                    <div>Task List</div>
                </div>
                <div className="icons">
                    <div><MdDelete/></div>
                    <div>
                        <FiEdit/>
                    </div>
                </div>
            </div>

             <div>
                <div>
                    <div>
                        <FaRegCircle/>
                    </div>
                    <div>Task List</div>
                </div>
                <div className="icons">
                    <div><MdDelete/></div>
                    <div>
                        <FiEdit/>
                    </div>
                </div>
            </div>

             <div>
                <div>
                    <div>
                        <FaRegCircle/>
                    </div>
                    <div>Task List</div>
                </div>
                <div className="icons">
                    <div><MdDelete/></div>
                    <div>
                        <FiEdit/>
                    </div>
                </div>
            </div>

             <div>
                <div>
                    <div>
                        <FaRegCircle/>
                    </div>
                    <div>Task List</div>
                </div>
                <div className="icons">
                    <div><MdDelete/></div>
                    <div>
                        <FiEdit/>
                    </div>
                </div>
            </div>
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
            padding:.5rem 1rem;
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