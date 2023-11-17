import React, { useState } from 'react'
import styled from 'styled-components';
import {FaPlus} from "react-icons/fa";
import CategoryForm from '../features/todo/catagorieForm';

function TodoCatagorise() {
  const [createCatagorie, setCreateCatagorie] = useState(false);

  return (
    <CatagoriesSection >
        <h1>Catagories</h1>
        {createCatagorie && <CategoryForm setCreateCatagorie={setCreateCatagorie}/>}
        <div className='catagories'>
            <div>
                <span>12 Tasks</span>
                <h2>Personal</h2>
                <div className='progresss'>
                    <div className='inner-pro'></div>
                </div>
            </div>
            <div>
                <span>12 Tasks</span>
                <h2>Personal</h2>
                <div className='progresss'>
                    <div className='inner-pro'></div>
                </div>
            </div>
            <div className='create-catagorie' onClick={()=>setCreateCatagorie(true)}>
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

        >*{
            background-color: #fff;
            display: flex;
            flex-direction: column;
            padding:1rem 0.5rem;
            border-radius: 10px;
            box-shadow: 0 9px 25px rgba(0,0,0,.1);

            >*{
                margin: 0;
            }

            span{
                font-size: .9rem;
            }

            .progresss{
                width: 100%;
                height: 5px;
                background-color: #eee;
                margin-top: .5rem;

                >*{
                    width: 70%;
                    height: 100%;
                    background-color: blue;
                }
            }
        }
    }
`