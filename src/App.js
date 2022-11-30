import Header from './components/Header';
import TasksList from './components/TasksList';
import { useSelector } from 'react-redux';
import './styles/normalize.css';

function App() {

  const tasks = useSelector(state => state.tasks);
  const completedTasks = useSelector(
    state => state.tasks.filter(task => task.completed === true)
  );

  return (
    <>
      <Header />
      <TasksList tasks={tasks} />
      <div>Total tasks: {tasks.length}</div>
      <div>Completed: {completedTasks.length}</div>
    </>
  );
}

export default App;