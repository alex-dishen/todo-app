import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todoSlice';
import styled from 'styled-components';

function Form() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onAddClick = (e) => {
    e.preventDefault();
    dispatch(addTask({
      title: value
    }));
    setValue('');
  };

  return (
    <FormWrapper>
      <Input
          type="text"
          value={value}
          placeholder='Any plans for today?'
          onChange={ e => setValue(e.target.value) }
          onKeyPress={(e) => {if(e.which === 13) onAddClick(e)}}
          />
      <AddButton 
        onClick={ (e) => {onAddClick(e)} }>
          Add Task
      </AddButton>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  height: 35px;
  padding: 10px;
  background-color: #3c3f45;
  color: white;
  outline: none;
  border: none;
  border-radius: 8px;
  transition: 0.4s;

  &:hover, 
  &:focus {
    background-color: #42464f;
  }
`;

const AddButton = styled.button`
  padding: 7px 15px 7px 15px;
  background-color: #ffb859;
  color: black;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export default Form;