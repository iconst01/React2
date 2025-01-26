import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TaskDetail = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const initialTasks = [
    { id: 1, title: 'Finish React project' },
    { id: 2, title: 'Read a book' },
    { id: 3, title: 'Go grocery shopping' },
  ];

  const task = initialTasks.find((task) => task.id === parseInt(taskId));

  if (!task) {
    return <p>Task not found</p>;
  }

  const [title, setTitle] = useState(task.title);

  const handleSave = () => {
    console.log('Saved: ', title);
    navigate('/');
  };

  return (
    <div className="task-detail-container">
      <h1>Task Detail</h1>

      <div className="task-input-container">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Edit task title"
        />
      </div>

      <div className="task-detail-buttons">
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Task List
        </button>
      </div>
    </div>
  );
};

export default TaskDetail;
