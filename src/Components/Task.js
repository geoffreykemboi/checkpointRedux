import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../Redux/ToDoSlice';
import React, {useState} from 'react';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    if (newDescription.trim()) {
      dispatch(editTask({ id: task.id, description: newDescription }));
      setEditing(false);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      />
      {editing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <span>{task.description}</span>
      )}
      <button onClick={() => setEditing((prev) => !prev)}>
        {editing ? 'Cancel' : 'Edit'}
      </button>
    </div>
  );
};

export default Task;