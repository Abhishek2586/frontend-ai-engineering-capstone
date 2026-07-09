import React, { useState, useEffect } from 'react';
import './TaskManager.css';

const TaskManager = () => {
  // Initialize tasks from localStorage or default to an empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      try {
        return JSON.parse(savedTasks);
      } catch (e) {
        console.error("Error parsing tasks from local storage", e);
        return [];
      }
    }
    return [];
  });

  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  // Sync tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    const trimmedText = newTaskText.trim();
    
    if (!trimmedText) return; // Prevent empty tasks

    const newTask = {
      id: Date.now().toString(),
      text: trimmedText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filter tasks based on current filter state
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  // Calculate counts
  const totalTasksCount = tasks.length;
  const completedTasksCount = tasks.filter(t => t.completed).length;
  const activeTasksCount = totalTasksCount - completedTasksCount;

  return (
    <div className="task-manager">
      <header>
        <h2>Task Management App</h2>
      </header>

      <form onSubmit={addTask} className="task-form">
        <label htmlFor="newTask">Add a new task:</label>
        <div className="input-group">
          <input
            id="newTask"
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="e.g., Complete AI Engineering homework"
          />
          <button type="submit" disabled={!newTaskText.trim()}>Add Task</button>
        </div>
      </form>

      <div className="task-stats">
        <span>Total: {totalTasksCount}</span>
        <span>Active: {activeTasksCount}</span>
        <span>Completed: {completedTasksCount}</span>
      </div>

      <div className="task-filters">
        <button 
          onClick={() => setFilter('all')} 
          className={filter === 'all' ? 'active-filter' : ''}
          aria-pressed={filter === 'all'}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('active')} 
          className={filter === 'active' ? 'active-filter' : ''}
          aria-pressed={filter === 'active'}
        >
          Active
        </button>
        <button 
          onClick={() => setFilter('completed')} 
          className={filter === 'completed' ? 'active-filter' : ''}
          aria-pressed={filter === 'completed'}
        >
          Completed
        </button>
      </div>

      <section className="task-list-section">
        {filteredTasks.length === 0 ? (
          <div className="empty-state">
            <p>No tasks found. Add a task to get started!</p>
          </div>
        ) : (
          <ul className="task-list">
            {filteredTasks.map(task => (
              <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                <label className="task-label">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                    aria-label={`Mark task "${task.text}" as ${task.completed ? 'incomplete' : 'complete'}`}
                  />
                  <span className="task-text">{task.text}</span>
                </label>
                <button 
                  onClick={() => deleteTask(task.id)} 
                  className="delete-button"
                  aria-label={`Delete task "${task.text}"`}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default TaskManager;
