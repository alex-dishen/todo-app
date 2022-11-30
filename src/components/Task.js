import { ReactComponent as Pen } from '../assets/pen.svg';
import { ReactComponent as Bin } from '../assets/bin.svg';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTask, changeTitle } from '../redux/todoSlice';
import { useRef } from 'react';

function Task({ id, title, completed}) {

    const dispatch = useDispatch();
    const inputRef = useRef(true);

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
        <div>
            <input 
                type="checkbox"
                checked={ completed } 
                onChange={ handleCompletedClick }/>
            <textarea 
                ref={inputRef}
                disabled={inputRef}
                defaultValue={title}
                onKeyPress={(e) => updateTitle(inputRef.current.value, e)}></textarea>
            <button
                onClick={ changeFocus }>
                    Change
            </button>
            <button 
                onClick={ handleDeleteClick }>
                    Delete
            </button>
        </div>
    )
}

export default Task;