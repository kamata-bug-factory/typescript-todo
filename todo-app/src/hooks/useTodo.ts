import { useEffect, useState } from 'react';
import { Todo } from '../types/Todo';
import { TodoApi } from '../utils/api';
import { TodoUtil } from '../utils/TodoUtil';

const todoApi = new TodoApi();

export const useTodo = () => {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [showingDone, setShowingDone] = useState(true);

  const readTodoItems = async () => {
    setLoading(true);
    try {
      const items = await todoApi.readItems();
      setTodoItems(items);
    } catch (error) {
      console.error('Failed to read todo items:', error);
    } finally {
      setLoading(false);
    }
  };

  const createTodoItem = async (text: string) => {
    try {
      await todoApi.createItem({ text, done: false });
      readTodoItems();
    } catch (error) {
      console.error('Failed to create item:', error);
    }
  };

  const updateTodoItem = async (newItem: Todo) => {
    try {
      await todoApi.updateItem(newItem);
      readTodoItems();
    } catch (error) {
      console.error('Failed to update item:', error);
    }
  };

  const deleteTodoItem = async (item: Todo) => {
    try {
      await todoApi.deleteItem(item.id);
      readTodoItems();
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  useEffect(() => {
    readTodoItems();
  }, []);

  const filteredTodoItems = TodoUtil.filterTodoItems(
    todoItems,
    keyword,
    showingDone
  );

  return {
    todoItems,
    filteredTodoItems,
    loading,
    keyword,
    showingDone,
    setKeyword,
    setShowingDone,
    readTodoItems,
    createTodoItem,
    updateTodoItem,
    deleteTodoItem,
  };
};
