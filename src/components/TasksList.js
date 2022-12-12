import styled from 'styled-components';
import PropTypes from 'prop-types';
import Task from './Task';

function TasksList({ completedTasks, notCompletedTasks }) {
  return (
    <TasksWrapper>
      <TaskStats>Tasks - {notCompletedTasks.length}</TaskStats>
      {notCompletedTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
        />
      ))}
      <TaskStats>Completed - {completedTasks.length}</TaskStats>
      {completedTasks.map((task) => (
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
  completedTasks: PropTypes.array,
  notCompletedTasks: PropTypes.array,
};

const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskStats = styled.div`
  margin: 30px 0 15px 0;
`;

export default TasksList;
