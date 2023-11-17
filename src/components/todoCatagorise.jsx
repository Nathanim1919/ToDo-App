import React from 'react'
import styled from 'styled-components';

function TodoCatagorise() {
  return (
    <CatagoriesSection >
        <h1>Catagories</h1>
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