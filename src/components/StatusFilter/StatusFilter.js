import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';

import { filterStatus } from '../../redux/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterStatus, sellectFilterStatus } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';

export const StatusFilter = () => {
  // Беру из стора стейт для фильтров
  const filter = useSelector(sellectFilterStatus);
  const dispatch = useDispatch();
  const handlerChangeFilter = filter => dispatch(changeFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === filterStatus.all}
        onClick={() => handlerChangeFilter(filterStatus.all)}
      >
        All
      </Button>
      <Button
        selected={filter === filterStatus.active}
        onClick={() => handlerChangeFilter(filterStatus.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === filterStatus.completed}
        onClick={() => handlerChangeFilter(filterStatus.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
