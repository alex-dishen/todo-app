import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Textarea({ title, update }) {
  const inputRef = useRef();
  const [isTaskTextArea, setIsTaskTextArea] = useState();

  useEffect(() => {
    if (
      inputRef.current.parentNode.parentNode.nextElementSibling.nodeName ===
      'BUTTON'
    ) {
      setIsTaskTextArea(true);
    } else {
      setIsTaskTextArea(false);
    }

    expendTextArea();
  }, []);

  const expendTextArea = () => {
    inputRef.current.parentNode.dataset.replicatedValue =
      inputRef.current.value;
  };

  const handleInput = (e) => {
    expendTextArea();
    update(e);
  };

  return (
    <TextAreaWrapper isTaskTextArea={isTaskTextArea}>
      <TextArea
        rows="1"
        cols={isTaskTextArea ? '54' : '32'}
        isTaskTextArea={isTaskTextArea}
        ref={inputRef}
        value={title}
        onInput={handleInput}
      />
    </TextAreaWrapper>
  );
}

Textarea.propTypes = {
  title: PropTypes.string,
  update: PropTypes.func,
};

const TextAreaWrapper = styled.div`
  display: grid;

  &::after {
    width: 92%;
    margin-left: 10px;

    font-size: ${(props) => (props.isTaskTextArea ? '16px' : '32px')};
    font-weight: 100;
    content: attr(data-replicated-value) ' ';
    overflow-wrap: anywhere;

    visibility: hidden;
    grid-area: 1 / 1 / 2 / 2;
  }
`;

const TextArea = styled.textarea`
  width: 92%;
  margin-left: 10px;
  padding: 0;

  background-color: inherit;
  color: white;
  font-size: ${(props) => (props.isTaskTextArea ? '16px' : '32px')};
  font-weight: 100;

  resize: none;
  overflow-wrap: anywhere;
  overflow: hidden;
  outline: none;

  border: none;
  border-radius: 8px;
  transition: 0.3s;
  grid-area: 1 / 1 / 2 / 2;
`;

export default Textarea;
