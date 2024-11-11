
import React from 'react';
import ListItem from './ListItem';

const Doing = ({ doingTasks, onDelete, onMoveToDone }) => {
  return (
    <div className='doing'>
      <h2 style={{ color: 'white', marginBottom: '20px' }}>✨Doing</h2>
      {doingTasks.map(task => (
        <ListItem
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id, 'doing')}
          onMoveToDone={() => onMoveToDone(task)}
        />
      ))}
    </div>
  );
};

export default Doing;
