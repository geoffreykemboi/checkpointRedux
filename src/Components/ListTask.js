import { useSelector } from 'react-redux';
import Task from './Task';
import { useDispatch } from 'react-redux';
import { filterTasks } from '../Redux/ToDoSlice';

const ListTask = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleFilter = (filter) => {
    dispatch(filterTasks(filter));
  };

  return (
    <div>
      <div>
        <button onClick={() => handleFilter('done')}>Show Done</button>
        <button onClick={() => handleFilter('notDone')}>Show Not Done</button>
        <button onClick={() => handleFilter('all')}>Show All</button>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;