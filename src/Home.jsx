import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';
import Doing from './Doing';
import Done from './Done';
import { Link } from 'react-router-dom'

const Home = () => {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const API_URL = 'http://localhost:5000'; // JSON Server URL

  // Fetch tasks from db.json
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksResponse = await axios.get(`${API_URL}/tasks`);
        const doingTasksResponse = await axios.get(`${API_URL}/doingTasks`);
        const doneTasksResponse = await axios.get(`${API_URL}/doneTasks`);
        
        setTasks(tasksResponse.data);
        setDoingTasks(doingTasksResponse.data);
        setDoneTasks(doneTasksResponse.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  // Add a task
  const addTask = async () => {
    if (!taskText.trim()) return;
    const newTask = { text: taskText };
    
    try {
      const response = await axios.post(`${API_URL}/tasks`, newTask);
      setTasks(prevTasks => [...prevTasks, response.data]);
      setTaskText('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Move a task to Doing
  const moveToDoing = async (task) => {
    try {
      await axios.delete(`${API_URL}/tasks/${task.id}`);
      const response = await axios.post(`${API_URL}/doingTasks`, task);
      setDoingTasks(prevDoingTasks => [...prevDoingTasks, response.data]);
      setTasks(tasks.filter(t => t.id !== task.id));
    } catch (error) {
      console.error('Error moving task to Doing:', error);
    }
  };

  // Move a task to Done
  const moveToDone = async (task) => {
    try {
      await axios.delete(`${API_URL}/doingTasks/${task.id}`);
      const response = await axios.post(`${API_URL}/doneTasks`, task);
      setDoneTasks(prevDoneTasks => [...prevDoneTasks, response.data]);
      setDoingTasks(doingTasks.filter(t => t.id !== task.id));
    } catch (error) {
      console.error('Error moving task to Done:', error);
    }
  };

  // Delete a task
  const deleteTask = async (id, category) => {
    try {
      if (category === 'todo') {
        await axios.delete(`${API_URL}/tasks/${id}`);
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
      } else if (category === 'doing') {
        await axios.delete(`${API_URL}/doingTasks/${id}`);
        setDoingTasks(prevDoingTasks => prevDoingTasks.filter(task => task.id !== id));
      } else {
        await axios.delete(`${API_URL}/doneTasks/${id}`);
        setDoneTasks(prevDoneTasks => prevDoneTasks.filter(task => task.id !== id));
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <Link  to='/'  style={{fontSize:'20px',marginTop:'10px', marginLeft: '1300px' , background: 'rgb(254, 164, 179)', padding: '10px 20px', borderRadius: '10px', color: 'rgb(95, 95, 223)', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',  transition: 'transform 0.1s ease' }} onMouseDown={(e) => e.target.style.transform = 'translateY(2px)'} onMouseUp={(e) => e.target.style.transform = 'translateY(0)'}>Back to Landing</Link>
      <h1 style={{ color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center', marginLeft: '460px' }}>
        To-Do List Management
        <img style={{ width: '250px' }} src="/images/bg2.png" alt="" />
      </h1>
      <input
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        style={{
          marginLeft: '500px',
          height: '35px',
          borderRadius: '10px',
          color: 'rgb(95, 95, 223)',
          fontSize: '17px',
          background: 'white',
          border: 'none',
          padding: '5px',
          width: '350px'
        }}
        type="text"
        placeholder="Enter a new task"
      />
      <button
        onClick={addTask}
        className='submit'
        style={{
          padding: '13px',
          marginLeft: '10px',
          borderRadius: '10px',
          fontSize: '17px',
          background: 'rgb(254, 164, 179)',
          color: 'rgb(95, 95, 223)',
          border: 'none',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.2s ease',
          cursor:'pointer'
        }}
      >
        Add Task
      </button>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '30px' }}>
        <Todo tasks={tasks} onDelete={deleteTask} onMoveToDoing={moveToDoing} />
        <Doing doingTasks={doingTasks} onDelete={deleteTask} onMoveToDone={moveToDone} />
        <Done doneTasks={doneTasks} onDelete={deleteTask} />
      </div>
    </div>
  );
};

export default Home;
