import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Task from './Task';

function TasksList() {
  // localStorage.clear();
  const collections = useSelector((state) => state.collections.collections);
  const currentCollectionID = useSelector(
    (state) => state.collections.collectionID
  );
  const currentCollection = collections.filter(
    (collection) => collection.id === currentCollectionID
  );
  const currentTasks =
    currentCollectionID === '' ? [] : currentCollection[0].tasks;

  const notCompletedTasks = currentTasks.filter((task) => !task.completed);
  const completedTasks = currentTasks.filter((task) => task.completed);
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
