import TasksList from './components/TasksList';
import Form from './components/Form';
import { useSelector } from 'react-redux';
import './styles/normalize.css';

function App() {

  const tasks = useSelector(state => state.tasks);
  const completedTasks = useSelector(
    state => state.tasks.filter(task => task.completed === true)
  );

  return (
    <>
      <Form />
      <TasksList tasks={tasks} />
      <div>Total tasks: {tasks.length}</div>
      <div>Completed: {completedTasks.length}</div>
    </>
  );
}

export default App;