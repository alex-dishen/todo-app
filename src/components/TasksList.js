import styled from 'styled-components';
import PropTypes from 'prop-types';
import Task from './Task';

function TasksList({ tasks }) {
  return (
    <TasksWrapper>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
        />
      ))}
    </TasksWrapper>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.array,
};

const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default TasksList;
