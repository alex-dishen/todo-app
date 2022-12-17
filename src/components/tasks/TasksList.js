import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Task from './Task';

function TasksList() {
  const tasks = useSelector((state) => {
    console.log(
      state.collections.collections.map((collection) => collection.tasks)
    );
    return state.collections.tasks;
  });
  const notCompletedTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);
  // localStorage.clear();
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

const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskStats = styled.div`
  margin: 30px 0 15px 0;
`;

export default TasksList;
