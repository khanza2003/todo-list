import React from 'react';
import ListItem from './ListItem';

const Done = ({ doneTasks, onDelete }) => {
  return (
    <div className='done'>
      <h2 style={{ color: 'white', marginBottom: '20px' }}>✅Done</h2>
      {doneTasks.map(task => (
        <ListItem
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id, 'done')}
        />
      ))}
    </div>
  );
};

export default Done;