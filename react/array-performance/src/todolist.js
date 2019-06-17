import React, { useState, memo } from 'react';
require('./todolist.css');

export const Todolist = memo(props => {
  const [items, addItem] = useState([]);
  const [text, setText] = useState('');

  return (
    <div className={'Todolist'}>
      <p className={'title'}>
        {props.stack ? 'Added to top' : 'Add item to bottom'}
      </p>
      <input
        placeholder="Task"
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <button
        onClick={() => {
          addItem(props.stack ? [text, ...items] : [...items, text]);
          props.updateLast(text);
          setText('');
        }}
      >
        Add Task
      </button>

      <ol>
        {items.map(item => {
          console.log(item);
          return <li key={Math.random()}>{item}</li>;
        })}
      </ol>
    </div>
  );
});
