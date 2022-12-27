import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { addTask } from '../../redux/todoSlice';

function Form({ color }) {
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
      <AddButton onClick={onAddClick} color={color}>
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

Form.propTypes = {
  color: PropTypes.string,
};

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  height: 35px;
  width: 100%;
  gap: 10px;
  padding: 20px 8px;
  margin-top: 20px;
  border: 3px solid rgb(43, 43, 43);
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
  background-color: ${(props) => props.color};
  color: black;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export default Form;
