import './TodoHome.css';
import { useTodo } from '../../hooks/useTodo';
import { CreateTodoForm } from '../../components/CreateTodoForm/CreateTodoForm';
import { TodoListItem } from '../../components/TodoListItem/TodoListItem';
import { ValueViewer } from '../../components/ValueViewer/ValueViewer';

export const TodoHome = () => {
  const {
    filteredTodoItems,
    keyword,
    showingDone,
    loading,
    setKeyword,
    setShowingDone,
    readTodoItems,
    createTodoItem,
    updateTodoItem,
    deleteTodoItem,
    todoItems,
  } = useTodo();

  return (
    <div className="todo-container">
      <h1>Todo</h1>

      <div className="todo-list-control">
        <input
          placeholder="キーワードフィルタ"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <input
          id="showing-done"
          type="checkbox"
          checked={showingDone}
          onChange={(event) => setShowingDone(event.target.checked)}
        />
        <label htmlFor="showing-done">完了したものも表示する</label>
        <button onClick={() => readTodoItems()}>更新</button>
      </div>

      {loading ? (
        <div className="dimmed">データを取得中です...</div>
      ) : filteredTodoItems.length === 0 ? (
        <div className="dimmed">該当するToDoはありません</div>
      ) : (
        <div className="todo-list">
          {filteredTodoItems.map((item) => (
            <TodoListItem
              key={item.id}
              item={item}
              onCheck={(checked) => updateTodoItem({ ...item, done: checked })}
              onDelete={() => deleteTodoItem(item)}
            />
          ))}
        </div>
      )}

      <CreateTodoForm onSubmit={(text) => createTodoItem(text)} />

      <ValueViewer value={{ keyword, todoItems, filteredTodoItems }} />
    </div>
  );
};
