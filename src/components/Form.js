import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTask } from '../redux/todoSlice';

function Form() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onAddClick = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        title: value,
      })
    );
    setValue('');
  };

  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <FormWrapper>
      <AddButton
        onClick={(e) => {
          onAddClick(e);
        }}
      >
        +
      </AddButton>
      <Input
        type="text"
        value={capitalizeFirstLetter(value)}
        placeholder="Any plans for today?"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.which === 13) onAddClick(e);
        }}
      />
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  height: 35px;
  width: 100%;
  gap: 10px;
  padding: 20px 8px;
  border: 3px solid rgb(29, 29, 38);
  border-radius: 13px;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  color: white;
  outline: none;
  border: none;
  border-radius: 8px;
`;

const AddButton = styled.button`
  padding: 3px 10px;
  background-color: #099d32;
  color: black;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export default Form;
