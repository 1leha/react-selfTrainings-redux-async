import { useSelector } from 'react-redux';
import css from './TaskCounter.module.css';
import { getTasks } from '../../redux/selectors';

export const TaskCounter = () => {
  const { data } = useSelector(getTasks);

  const taskCount = data.reduce(
    (counter, task) => {
      if (task.completed) {
        counter.completed += 1;
      } else {
        counter.active += 1;
      }
      return counter;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {taskCount.active}</p>
      <p className={css.text}>Completed: {taskCount.completed}</p>
    </div>
  );
};
