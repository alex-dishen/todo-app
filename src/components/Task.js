import { ReactComponent as Pen } from '../assets/pen.svg';
import { ReactComponent as Bin } from '../assets/bin.svg';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTask, changeTitle } from '../redux/todoSlice';
import { useRef, useState } from 'react';
import styled from 'styled-components';

function Task({ id, title, completed}) {

    const dispatch = useDispatch();
    const inputRef = useRef(true);
    const [isCompleted, setIsCompleted] = useState(false)

    const handleCompletedClick = () => {
        dispatch(
            toggleComplete({ id: id, completed: !completed })
        );
    };

    const handleDeleteClick = () => {
        dispatch(
            deleteTask({ id: id })
        );
    };

    const updateTitle = (newTitle, e) => {
        if(e.which === 13) {
            dispatch(
                changeTitle({ id: id, title: newTitle})
            )
            inputRef.current.disabled = true;
        }
    };

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    };

    return (
        <TaskWrapper>
            <TaskSection>
                <input
                    type="checkbox"
                    checked={ completed }
                    onChange={ handleCompletedClick }/>
                <TextArea
                    ref={inputRef}
                    disabled={inputRef}
                    defaultValue={title}
                    onKeyPress={(e) => updateTitle(inputRef.current.value, e)} />
            </TaskSection>
            <ButtonSection>
                <button
                    onClick={ changeFocus }>
                        Change
                </button>
                <button
                    onClick={ handleDeleteClick }>
                        Delete
                </button>
            </ButtonSection>
        </TaskWrapper>
    )
}

const TaskWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px 5px 15px;
    margin-bottom: 13px;
    background-color: #3c3f45;
    border-radius: 15px;
`;

const TaskSection = styled.div`
    display: flex;
`;

const TextArea = styled.textarea`
    height: 35px;
    padding: 10px;
    background-color: inherit;
    color: white;
    resize: none;
    outline: none;
    border: none;
    border-radius: 8px;
    transition: 0.3s;
`;

const ButtonSection = styled.div``;

export default Task;