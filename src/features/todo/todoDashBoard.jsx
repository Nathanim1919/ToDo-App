import React,{useEffect} from 'react'
import styled from 'styled-components'
import TodoCatagorise from '../../components/todoCatagorise'
import TodaysTask from '../../components/todaysTask';
import Aos from 'aos';
import 'aos/dist/aos.css'

function TodoDashBoard() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])

  return (
    <DashBoard>
      <div className='header' data-aos="fade-up">
        <h1>Welcome Back!</h1>
        <p>The only way to do great work is to love what you do.</p>
      </div>
      <TodoCatagorise/>
      <TodaysTask/>
    </DashBoard>
  )
}

export default TodoDashBoard;



const DashBoard = styled.div`
  .header{
    display: flex;
    flex-direction: column;
    padding: 1rem;

    >h1{
      font-size: 1.5rem;
    }

    >p{
      font-size: .9rem;
    }

    >*{
      margin: 0;
    }

  }
  @media screen and (min-width: 700px) {
      width:60%;
      margin:auto;
  }
`