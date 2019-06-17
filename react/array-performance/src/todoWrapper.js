import React, { useState } from 'react';
import { Todolist } from './todolist';

export default () => {
  const [lastAddedItem, updateLast] = useState('');
  return (
    <div>
      {lastAddedItem}
      <Todolist updateLast={updateLast} />
      <Todolist updateLast={updateLast} stack={true} />
    </div>
  );
};
