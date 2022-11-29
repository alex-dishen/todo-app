import { useState } from 'react';
import Tasks from './components/Task';
import uniqid from 'uniqid';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/todoSlice';
import './styles/normalize.css';

function App() {

  // const [task, setTask] = useState({id: uniqid(), text: ''});
  // const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    // setTask({
    //   id: uniqid(),
    //   text: e.target.value
    // })
  };

  const onAddClick = () => {
    // setTasks([...tasks, task]);
    // setTask({
    //   id:uniqid(),
    //   text: ''
    // })
    dispatch(addTask({
      title: value
    }))
  };

  return (
    <>
      <input 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)} 
        />
      <button onClick={onAddClick}>Add Task</button>
      <Tasks />
    </>
  );
}

export default App;