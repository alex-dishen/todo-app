import { useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import {
  toggleComplete,
  changeTaskTitle,
  deleteTask,
} from '../../redux/todoSlice';
import { ReactComponent as Bin } from '../../assets/bin.svg';

function Task({ id, title, completed, color }) {
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
    dispatch(changeTaskTitle({ id, title: newTitle }));
  };

  const expendTextArea = () => {
    inputRef.current.parentNode.dataset.replicatedValue =
      inputRef.current.value;
  };

  return (
    <TaskWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <TaskSection>
        <CheckBox
          type="checkbox"
          checked={completed}
          onChange={handleCompletedClick}
          color={color}
        />
        <TextAreaWrapper>
          <TextArea
            rows="1"
            cols="54"
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
  color: PropTypes.string,
};

const TaskWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 55px;
  padding: 10px 15px 10px 15px;
  margin-bottom: 13px;
  background-color: rgb(40, 40, 40);
  border-radius: 15px;
`;

const TaskSection = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input`
  appearance: none;
  display: grid;
  min-width: 23px;
  height: 23px;
  place-content: center;
  border: 2px solid ${(props) => props.color};
  border-radius: 7px;
  cursor: pointer;

  &:checked {
    background-color: ${(props) => props.color};
  }

  &::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    box-shadow: inset 1em 1em rgb(40, 40, 40);
  }

  &:checked::before {
    transform: scale(1);
  }
`;

const TextAreaWrapper = styled.div`
  display: grid;

  &::after {
    width: 92%;
    content: attr(data-replicated-value) ' ';
    white-space: pre-wrap;
    visibility: hidden;
    grid-area: 1 / 1 / 2 / 2;
  }
`;

const TextArea = styled.textarea`
  width: 92%;
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
  flex-shrink: 0;
  height: 40px;
  width: 40px;
  background-color: #ba1717;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const StyledBin = styled(Bin)`
  height: 100%;
  width: 100%;
`;

export default Task;
