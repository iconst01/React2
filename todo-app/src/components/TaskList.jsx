import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finish React project' },
    { id: 2, title: 'Read a book' },
    { id: 3, title: 'Go grocery shopping' },
  ]);
  const [newTask, setNewTask] = useState('');
  const navigate = useNavigate(); 

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function to add a task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTask },
      ]);
      setNewTask(''); // Reset input after adding
    }
  };

  return (
    <div>
      <h1>Task List</h1>


      <div className="task-input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>


      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
         
            <span>{task.title}</span>

           
            <button onClick={() => navigate(`/task/${task.id}`)}>View Task</button>

         
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
