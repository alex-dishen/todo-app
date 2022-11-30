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
  background-color: #3c3f45;
  height: 35px;
  padding: 10px;
  outline: none;
  color: white;
  border: none;
  border-radius: 8px;
  transition: 0.3s;
`;

const AddButton = styled.button`
  background-color: #ffb859;
  border: none;
  font-size: 18px;
  padding: 7px 15px 7px 15px;
  border-radius: 10px;
  cursor: pointer;
`;

export default Form;