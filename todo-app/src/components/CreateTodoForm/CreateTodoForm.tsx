import './CreateTodoForm.css';
import React, { useState } from 'react';

type Props = {
  onSubmit: (text: string) => void;
};

export const CreateTodoForm: React.FC<Props> = ({ onSubmit }) => {
  const [text, setText] = useState('');
  return (
    <div className="create-todo-form">
      <input
        placeholder="新しいTodo"
        size={60}
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
      />
      <button onClick={() => onSubmit(text)}>追加</button>
    </div>
  );
};
