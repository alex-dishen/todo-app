import { useSelector } from 'react-redux';
import Task from './Task';

function TasksList({ }) {
    const tasks = useSelector(state => state.tasks);
    const completedTasks = useSelector(state => state.tasks.filter(task => task.completed === true))

    return(
        <div>
            {tasks.map(task => {
                return (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        completed={task.completed}/>
                )
            })}
            <div>Total tasks: {tasks.length}</div>
            <div>Finished tasks: {completedTasks.length}</div>
        </div>
    )
}

export default TasksList;