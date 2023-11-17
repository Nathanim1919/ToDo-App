import React from 'react'
import styled from 'styled-components';

function TodoDetail() {
  return (
    <Detail>
        <div className='header'>
            <div>
                back
            </div>
            <div>
                <h2>Personal Task</h2>
            </div>
        </div>
        <div className='taskDetails'>
                <div>
                    com
                </div>
                <div>
                    <p>Task title</p>
                </div>
                <div>
                    <div>del</div>
                    <div>edit</div>
                </div>
        </div>

        <div className='taskDescription'>
            <div>
                <p>task description is here based on the user inputs while he/she create the task at the first place</p>
            </div>

            <div className='taskStatus'>
                <div className='status'>
                    <span>Completed</span>
                </div>
                <div className='priority'>
                    <span>High</span>
                </div>
                <div>
                    <span>12 Aug, 2023</span>
                </div>
            </div>
        </div>
    </Detail>
  )
}

export default TodoDetail;




const Detail = styled.div`
    display: grid;
    padding: 1rem;

    .header{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .taskDetails{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding:.4rem 1rem;
        border-radius: 6px;

        >div:nth-child(3){
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
        }
    }

    .taskDescription{
        display: grid;


        .taskStatus{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 1rem;
        }
    }
`