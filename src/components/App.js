import { useEffect } from 'react';
import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';

import { fetchTasks } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  // const { isLoading, error } = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {/* {isLoading && <div>Loading ...</div>} */}
      {/* {!isLoading && !error && <TaskList />} */}
      <TaskList />
    </Layout>
  );
};