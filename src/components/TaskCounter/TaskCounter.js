import { useSelector } from 'react-redux';
import css from './TaskCounter.module.css';
import { sellectCoundedTask } from '../../redux/selectors';

export const TaskCounter = () => {
  const taskCount = useSelector(sellectCoundedTask);
  console.log('taskCount :>> ', taskCount);

  return (
    <div>
      <p className={css.text}>Active: {taskCount.active}</p>
      <p className={css.text}>Completed: {taskCount.completed}</p>
    </div>
  );
};
