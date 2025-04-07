import './TodoListItem.css';
import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  item: Todo;
  onCheck: (checked: boolean) => void;
  onDelete: () => void;
};

export const TodoListItem: React.FC<Props> = ({ item, onCheck, onDelete }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.done}
        onChange={(event) => onCheck(event.currentTarget.checked)}
      />
      <p style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
        {item.text}
      </p>
      <button className="button-small" onClick={() => onDelete()}>
        x
      </button>
    </div>
  );
};
