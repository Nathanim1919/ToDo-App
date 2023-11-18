import React, { useState } from 'react';
import styled from 'styled-components';
import {
    MdClose
} from "react-icons/md";
import { addTodo } from './todoSlice';
import {useSelector, useDispatch} from 'react-redux';
import{ useParams} from 'react-router-dom'


const TodoForm = ({setOpenForm }) => {
  
  const [title, setTitle] = useState('');


  const dispatch = useDispatch();
  const todos = useSelector(state=> state.todos);
  const {
    catagoriId
  } = useParams()


  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      title,
      catagoriId
    }));
    setOpenForm(false);
  };

  return (
    <OverLay>
        <Form onSubmit={handleSubmit}>
            <div className = 'close'
            onClick = {
                () => setOpenForm(false)
            } >
                <MdClose/>
            </div>
            <Label>
                Title:
                <Input type="text" name="title" value={title} onChange={handleChange} />
            </Label>
            <Button type="submit">Add Todo</Button>
        </Form>
    </OverLay>
  );
};

export default TodoForm;

    
    
    const OverLay = styled.div`
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
        display: grid;
        place-items: center;
    `
    const Form = styled.form`
      max-width: 400px;
      margin: 0 auto;
      padding: 2rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      position: relative;

      .close{
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 1.2rem;
        cursor: pointer;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #ddd;
        display: grid;
        place-items: center;
      }
    `;
    
    const Label = styled.label`
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
    
    const Select = styled.select`
      width: 100%;
      padding: 8px;
      margin-bottom: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
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