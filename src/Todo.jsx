
import React from 'react';
import ListItem from './ListItem';

const Todo = ({ tasks, onDelete, onMoveToDoing }) => {
  return (
    <div className='todo'>
      <h2 style={{ color: 'white', marginBottom: '20px' }}>🎯To Do</h2>
      {tasks.map(task => (
        <ListItem
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id, 'todo')}
          onMoveToDoing={() => onMoveToDoing(task)}
        />
      ))}
    </div>
  );
};

export default Todo;
