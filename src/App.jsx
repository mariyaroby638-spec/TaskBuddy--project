import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ProgressTracker from './components/ProgressTracker';
import './Style.css';

export default function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">

      <header>
        <h1 className="title">TaskBuddy</h1>
        <p className="tagline">Your Friendly Task Manager</p>
      </header>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />

      <ProgressTracker tasks={tasks} />

      {tasks.length > 0 && (
        <button
          className="clear-btn"
          onClick={clearTasks}
        >
          Clear All Task
        </button>
      )}

    </div>
  );
}