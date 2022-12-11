import { useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { toggleComplete, deleteTask, changeTitle } from '../redux/todoSlice';
import { ReactComponent as Bin } from '../assets/bin.svg';

function Task({ id, title, completed }) {
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    expendTextArea();
  }, []);

  const handleCompletedClick = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTask({ id }));
  };

  const updateTitle = (newTitle) => {
    dispatch(changeTitle({ id, title: newTitle }));
  };

  const expendTextArea = () => {
    inputRef.current.parentNode.dataset.replicatedValue =
      inputRef.current.value;
  };

  return (
    <TaskWrapper>
      <TaskSection>
        <CheckBox
          type="checkbox"
          checked={completed}
          onChange={handleCompletedClick}
        />
        <TextAreaWrapper>
          <TextArea
            rows="1"
            ref={inputRef}
            defaultValue={title}
            onInput={() => {
              expendTextArea();
              updateTitle(inputRef.current.value);
            }}
          />
        </TextAreaWrapper>
      </TaskSection>
      <DeleteButton onClick={handleDeleteClick}>
        <StyledBin />
      </DeleteButton>
    </TaskWrapper>
  );
}

Task.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  completed: PropTypes.bool,
};

const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 55px;
  padding: 10px 15px 10px 15px;
  margin-bottom: 13px;
  background-color: #3c3f45;
  border-radius: 15px;
`;

const TaskSection = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input`
  appearance: none;
  width: 22px;
  height: 22px;
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    background-color: white;
  }
`;

const TextAreaWrapper = styled.div`
  display: grid;

  &::after {
    width: 290px;
    content: attr(data-replicated-value) ' ';
    white-space: pre-wrap;
    visibility: hidden;
    grid-area: 1 / 1 / 2 / 2;
  }
`;

const TextArea = styled.textarea`
  width: 290px;
  margin-left: 10px;

  background-color: inherit;
  color: white;

  resize: none;
  overflow: hidden;
  outline: none;

  border: none;
  border-radius: 8px;
  transition: 0.3s;
  grid-area: 1 / 1 / 2 / 2;
`;

const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background-color: #ff3939;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const StyledBin = styled(Bin)`
  height: 100%;
  width: 100%;
`;

export default Task;
