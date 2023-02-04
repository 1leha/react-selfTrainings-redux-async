import { Task } from 'components/Task/Task';
import { useSelector } from 'react-redux';
import css from './TaskList.module.css';
import { sellectFilteredTasks } from '../../redux/selectors';

export const TaskList = () => {
  const renderTasks = useSelector(sellectFilteredTasks);

  return (
    <ul className={css.list}>
      {renderTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
