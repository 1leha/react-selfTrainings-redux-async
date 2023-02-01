import { Task } from 'components/Task/Task';
import { useSelector } from 'react-redux';
import css from './TaskList.module.css';
import { filterStatus } from '../../redux/constants';
import { getTasks, getGetFilterStatus } from '../../redux/selectors';

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getGetFilterStatus);

  const getSelectedTasks = (tasks, filter) => {
    switch (filter) {
      case filterStatus.active:
        return tasks.filter(task => !task.completed);
      case filterStatus.completed:
        return tasks.filter(task => task.completed);

      default:
        return tasks;
    }
  };

  const renderTasks = getSelectedTasks(tasks, filter);

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
