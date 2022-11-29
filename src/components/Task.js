import { ReactComponent as Pen } from '../assets/pen.svg';
import { ReactComponent as Bin } from '../assets/bin.svg';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTask } from '../redux/todoSlice'

function Task({ id, title, completed}) {

    const dispatch = useDispatch();

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

    return (
        <div>
            <input 
                type="checkbox"
                checked={ completed } 
                onChange={ handleCompletedClick }/>
            { title }
            <button 
                onClick={ handleDeleteClick }>delete
            </button>
        </div>
    )
}

export default Task;