import { ReactComponent as Pen } from '../assets/pen.svg';
import { ReactComponent as Bin } from '../assets/bin.svg';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTask, changeTitle } from '../redux/todoSlice';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';

function Task({ id, title, completed}) {

    const dispatch = useDispatch();
    const inputRef = useRef();

    useEffect(() => {
        expendTextArea();
    }, [])

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

    const expendTextArea = () => {
        inputRef.current.parentNode.dataset.replicatedValue = inputRef.current.value;
    }

    return (
        <TaskWrapper>
            <TaskSection>
                <CheckBox
                    type="checkbox"
                    checked={ completed }
                    onChange={ handleCompletedClick }/>
                <TextAreaWrapper>
                    <TextArea
                        rows='1'
                        ref={inputRef}
                        disabled={inputRef}
                        defaultValue={title}
                        onInput={ expendTextArea }
                        onKeyPress={(e) => updateTitle(inputRef.current.value, e)} />
                </TextAreaWrapper>
            </TaskSection>
            <ButtonSection>
                <ChangeButton
                    onClick={ changeFocus }>
                        <StyledPen />
                </ChangeButton>
                <DeleteButton
                    onClick={ handleDeleteClick }>
                        <StyledBin />
                </DeleteButton>
            </ButtonSection>
        </TaskWrapper>
    )
}

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
        width: 230px;
        content: attr(data-replicated-value) " ";
        white-space: pre-wrap;
        visibility: hidden;
        grid-area: 1 / 1 / 2 / 2;
    }
`;

const TextArea = styled.textarea`
    width: 240px;
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

const ButtonSection = styled.div`
    display: flex;
    gap: 10px;
`;

const ChangeButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 55px;
    background-color: #ffb859;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

const DeleteButton = styled(ChangeButton)`
    width: 40px;
    background-color: #ff3939;
`;

const StyledPen = styled(Pen)`
    height: 100%;
    width: 50%;
`;

const StyledBin = styled(Bin)`
    height: 100%;
    width: 100%;
`;


export default Task;