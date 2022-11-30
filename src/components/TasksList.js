import Task from './Task';

function TasksList({ tasks }) {
    return(
        <div>
            {tasks.map(task => {
                return (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        completed={task.completed} />
                )
            })}
        </div>
    )
}

export default TasksList;