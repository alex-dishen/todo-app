import { useState } from 'react';
import Tasks from './components/Task';
import uniqid from 'uniqid';
import './styles/normalize.css';

function App() {

  const [task, setTask] = useState({id: uniqid(), text: ''});
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask({
      id: uniqid(),
      text: e.target.value
    })
  };

  const onAddClick = () => {
    setTasks([...tasks, task]);
    setTask({
      id:uniqid(),
      text: ''
    })
  };

  return (
    <>
      <input 
        type="text"
        value={task.text}
        onChange={handleInputChange} />
      <button onClick={onAddClick}>Add Task</button>
      <Tasks tasks={tasks}/>
    </>
  );
}

export default App;