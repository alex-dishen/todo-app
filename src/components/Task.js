import { ReactComponent as Pen } from '../assets/pen.svg';
import { ReactComponent as Bin } from '../assets/bin.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleComplete, deleteTask } from '../redux/todoSlice'

function Tasks({ }) {
    const tasks = useSelector(state => state.tasks);
    const completedTasks = useSelector(state => state.tasks.filter(task => task.completed === true))
    const dispatch = useDispatch();
    const handleCompletedClick = (id, completed) => {
        dispatch(toggleComplete({id: id, completed: !completed, }))
    };
    const handleDeleteClick = (id) => {
        dispatch(deleteTask({id: id}))
    };
    return(
        <div>
            {tasks.map(task => {
                return (
                    <div key={task.id}>
                        <input 
                        type="checkbox"
                        checked={task.completed} 
                        onChange={() => handleCompletedClick(task.id, task.completed)}/>
                        {task.title}
                        <button 
                        onClick={() => handleDeleteClick(task.id)}>delete</button>
                    </div>
                )
            })}
            <div>Total tasks: {tasks.length}</div>
            <div>Finished tasks: {completedTasks.length}</div>
        </div>
    )
}

export default Tasks;