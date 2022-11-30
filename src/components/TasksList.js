import Task from './Task';
import styled from 'styled-components';

function TasksList({ tasks }) {
    return(
        <TasksWrapper>
            {tasks.map(task => {
                return (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        completed={task.completed} />
                )
            })}
        </TasksWrapper>
    )
}

const TasksWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export default TasksList;