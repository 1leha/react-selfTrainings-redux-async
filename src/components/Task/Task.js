import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import css from './Task.module.css';
import { toggleCompleted, toggleDelete } from '../../redux/tasksSlice';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleChange = id => dispatch(toggleCompleted(id));
  const handleDelete = id => dispatch(toggleDelete(id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={() => handleChange(task.id)}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={() => handleDelete(task.id)}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
