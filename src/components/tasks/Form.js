import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { addTask } from '../../redux/todoSlice';

function Form({ color }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [textColor, setTextColor] = useState('white');

  const onAddClick = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        title: value,
      })
    );
    setValue('');
  };

  const getTextColor = (bgColor) => {
    const colour =
      bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
    const r = parseInt(colour.substring(0, 2), 16); // hexToR
    const g = parseInt(colour.substring(2, 4), 16); // hexToG
    const b = parseInt(colour.substring(4, 6), 16); // hexToB

    return r * 0.299 + g * 0.587 + b * 0.114 > 186
      ? 'rgb(0, 0, 0)'
      : 'rgb(255, 255, 255)';
  };

  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  useEffect(() => {
    setTextColor(getTextColor(color));
  }, [color]);

  return (
    <FormWrapper>
      <AddButton onClick={onAddClick} backgroundColor={color} color={textColor}>
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

const AddButton = styled.button.attrs((props) => ({
  style: { background: props.backgroundColor, color: props.color },
}))`
  padding: 3px 10px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export default Form;
