import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch , useSelector} from 'react-redux';
import { addCategory } from './todoSlice';
import {
    MdClose
} from "react-icons/md";

const CategoryForm = ({setCreateCatagorie}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const categorie = useSelector(state => state.categories);
 

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      // You might want to handle empty category titles
      return;
    }

    dispatch(addCategory(title));
    setTitle('');
     console.log('Updated state:', categorie);
  };

  return (
    <Overlay>

    <CategoryFormContainer onSubmit={handleSubmit}>
        <div className = 'closeIcon'
        onClick = {
            () => setCreateCatagorie(false)
        } >
            < MdClose/>
        </div> 
        <InputLabel>
            Category Title:
            <Input
            type="text"
            value={title}
            onChange={handleTitleChange}
            />
        </InputLabel>
        <Button type="submit">Create Category</Button>
    </CategoryFormContainer>
    </Overlay>
  );
};


const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: rgba(0,0,0,.3);
    z-index: 10;
    backdrop-filter: blur(4px);
    `

const CategoryFormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: relative;
  
      .closeIcon{
          position: absolute;
          top: 1rem;
          right: 1rem;
          cursor: pointer;
      }
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export default CategoryForm;
