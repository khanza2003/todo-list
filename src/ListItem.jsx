import React from 'react';

const ListItem = ({ task, onDelete, onMoveToDoing, onMoveToDone }) => {
  return (
    <div style={{ 
      color: 'white', 
      fontSize: '20px', 
      border: 'solid white', 
      borderRadius: '10px', 
      padding: '20px', 
      width: '400px',
      display: 'flex',
      justifyContent: 'space-between', 
      alignItems: 'center' 
    }}>
      <span>{task.text}</span>

      <div>
        {onMoveToDoing && (
          <button 
            onClick={onMoveToDoing} 
            style={{
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              marginLeft: '10px',
              padding: '10px',
              border: 'none',
              color: 'rgb(95, 95, 223)',
              background: 'pink',
              borderRadius: '10px',
              fontSize: '14px',
            }}
          >
            Doing✨
          </button>
        )}

        {onMoveToDone && (
          <button 
            onClick={onMoveToDone} 
            style={{
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              marginLeft: '10px',
              padding: '10px',
              border: 'none',
              color: 'rgb(95, 95, 223)',
              background: 'pink',
              borderRadius: '10px',
              fontSize: '14px',
            }}
          >
            Done✅
          </button>
        )}

        <button 
          onClick={onDelete} 
          style={{
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginLeft: '10px',
            padding: '10px',
            borderRadius: '10px',
            border: 'none',
            color: 'rgb(95, 95, 223)',
            background: 'pink',
            fontSize: '14px',
          }}
        >
          Delete🗑️
        </button>
      </div>
    </div>
  );
};

export default ListItem;
