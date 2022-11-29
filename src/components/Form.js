import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todoSlice';

function Form() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const onAddClick = () => {
    dispatch(addTask({
      title: value
    }))
  };

  return (
    <form>
    <input
        type="text"
        value={value}
        onChange={ e => setValue(e.target.value) }
        />
    <button onClick={ onAddClick } type='button'>Add Task</button>
    </form>
  );
}

export default Form;