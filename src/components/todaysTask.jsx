import React from 'react'
import styled from 'styled-components'

function TodaysTask() {
  return (
    <TaskList >
        <h1>Todays Task</h1>
        <div className='todaysTask'>
            <div>
                <div className='icon'>com</div>
                <div>
                    <p>Task Title</p>
                    <span>Personal</span>
                </div>

                <div className='manipulationIcons'>
                    <div>del</div>
                    <div>edit</div>
                </div>
            </div>
            <div>
                <div className='icon'>com</div>
                <div>
                    <p>Task Title</p>
                    <span>Personal</span>
                </div>

                <div className='manipulationIcons'>
                    <div>del</div>
                    <div>edit</div>
                </div>
            </div>
            <div>
                <div className='icon'>com</div>
                <div>
                    <p>Task Title</p>
                    <span>Personal</span>
                </div>

                <div className='manipulationIcons'>
                    <div>del</div>
                    <div>edit</div>
                </div>
            </div>
            <div>
                <div className='icon'>com</div>
                <div>
                    <p>Task Title</p>
                    <span>Personal</span>
                </div>

                <div className='manipulationIcons'>
                    <div>del</div>
                    <div>edit</div>
                </div>
            </div>
            <div>
                <div className='icon'>com</div>
                <div>
                    <p>Task Title</p>
                    <span>Personal</span>
                </div>

                <div className='manipulationIcons'>
                    <div>del</div>
                    <div>edit</div>
                </div>
            </div>
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
        display: flex;
        flex-direction: column;
        gap: .5rem;

        >*{
            margin: 0;
            background-color: #fff;
            display: grid;
            grid-template-columns: 10% 80% 10%;
            padding: 0.6rem;
            place-items: center;
            box-shadow:0 8px 23px rgba(0,0,0,.1);
            border-radius:7px;
            border:1px solid transparent;
            transition:all .3s ease-in-out;
            cursor:pointer;

            >div:nth-child(2){
                display:flex;
                flex-direction:column;

                span{
                    opacity:.7;
                }
                >*{
                    margin:0;
                }
            }
            >div:nth-child(3){
                display:flex;
                align-items:center;
                gap:1rem;
            }

            &:hover{
                border:1px solid blue;
                transform:scale(.95)
            }
        }


    }
`