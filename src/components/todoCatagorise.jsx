import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {FaPlus} from "react-icons/fa";
import CategoryForm from '../features/todo/catagorieForm';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'


function TodoCatagorise() {
 const [createCatagorie, setCreateCatagorie] = useState(false);
  const categories = useSelector((state) => state.todos.categories);

  categories.forEach(element => {
    console.log("cataogries todo", element.todos)
  });

useEffect(() => {
    // This block will run whenever categories are updated
    console.log('Updated categories:', categories);
}, [categories]); // Run the effect whenever categories changes

  useEffect(() => {
      Aos.init({
          duration: 2000
      })
  }, [])


  return (
    <CatagoriesSection>
        <h1>Catagories</h1>
        {createCatagorie && <CategoryForm setCreateCatagorie={setCreateCatagorie}/>}


        <div className='catagories'>
        {
            categories && categories.map(cat => (
          <Link to = {
              `catagorie/${cat.id}`
          } data-aos="zoom-in">
              <div>
                <span>{cat.todos.length} todos</span>
                <h2>{(cat.title).slice(0, 10)}..</h2>
            </div>
          </Link> 
         
        ))}
            <div data-aos="zoom-out" className='create-catagorie' onClick={()=>setCreateCatagorie(true)}>
                <FaPlus/>
            </div>
        </div>
    </CatagoriesSection>
  )
}

export default TodoCatagorise;


const CatagoriesSection = styled.div`
    display: grid;
    padding: 1rem;

    >h1{
        font-size: 1.2rem;
    }

    .catagories{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
        gap: 1rem;
        align-items: center;



        .create-catagorie{
            font-size: 2rem;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background-color: #33D4D7;
            color: #fff;
            padding:0;
            display: grid;
            place-items: center;
            cursor: pointer;
            box-shadow: 0 7px 19px rgba(0,0,0,.1);

            &:hover{
                opacity: .7;
            }
        }

        >a{
            background-color: #fff;
            display: grid;
            flex-direction: column;
            padding:1rem 0.5rem;
            border-radius: 10px;
            box-shadow: 0 9px 25px rgba(0,0,0,.1);
            transition: all .3s ease-in-out;
            cursor: pointer;
            text-decoration: none;
            color: #333;

            h2{
                font-size: 1.2rem;
            }

            &:hover{
                transform: scale(.9);
            }

            >*{
                margin: 0;
            }

            span{
                font-size: .8rem;
                font-weight: 800;
                padding:.2rem .5rem;
                border-radius: 20px;
                color:#333;
                background-color: rgba(0,255,200,.9);
            }

            .progresss{
                width: 100%;
                height: 5px;
                background-color: #eee;
                margin-top: .5rem;

                >*{
                    height: 100%;
                    background-color: blue;
                }
            }
        }
    }
`