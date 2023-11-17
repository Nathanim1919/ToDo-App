import React, { useState } from 'react';
import styled from 'styled-components';
import {
    MdClose
} from "react-icons/md";


const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium', // Set a default priority if needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    // Reset the form
    setNewTodo({
      title: '',
      description: '',
      dueDate: '',
      priority: 'Medium',
    });
  };

  return (
    <OverLay>
        <Form onSubmit={handleSubmit}>
            <div className='close'>
                <MdClose/>
            </div>
            <Label>
                Title:
                <Input type="text" name="title" value={newTodo.title} onChange={handleChange} />
            </Label>
            <Label>
                Description:
                <Input type="text" name="description" value={newTodo.description} onChange={handleChange} />
            </Label>
            <Label>
                Due Date:
                <Input type="text" name="dueDate" value={newTodo.dueDate} onChange={handleChange} />
            </Label>
            <Label>
                Priority:
                <Select name="priority" value={newTodo.priority} onChange={handleChange}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                </Select>
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
        font-size: 1.3rem;
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