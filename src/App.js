import Header from './components/Header';
import TasksList from './components/TasksList';
import TasksStats from './components/TasksStats';
import { useSelector } from 'react-redux';
import './styles/normalize.css';

function App() {  
  const tasks = useSelector(state => state.tasks.tasks);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <>
      <Header />
      <TasksList tasks={tasks} />
      <TasksStats 
        notCompleted={tasks.length}
        completed={completedTasks.length}/>
    </>
  );
}

export default App;