import { describe, expect, test } from 'vitest';
import { TodoUtil } from './TodoUtil';

const todoItems = [
  { id: 1, text: 'メモリーズ', done: false },
  { id: 2, text: 'メモリーズ・カスタム', done: true },
  { id: 3, text: '三日月ロック その3', done: false },
  { id: 4, text: '夜を駆ける', done: false },
];

describe('filterTodoItems', () => {
  test('キーワードでフィルターできる', () => {
    const result = TodoUtil.filterTodoItems(todoItems, 'メモリーズ', true);
    expect(result).toEqual([
      { id: 1, text: 'メモリーズ', done: false },
      { id: 2, text: 'メモリーズ・カスタム', done: true },
    ]);
  });

  test('完了済みタスクを除外できる', () => {
    const result = TodoUtil.filterTodoItems(todoItems, '', false);
    expect(result).toEqual([
      { id: 1, text: 'メモリーズ', done: false },
      { id: 3, text: '三日月ロック その3', done: false },
      { id: 4, text: '夜を駆ける', done: false },
    ]);
  });

  test('キーワードに一致しない場合は空配列', () => {
    const result = TodoUtil.filterTodoItems(todoItems, '夜に駆ける', true);
    expect(result).toEqual([]);
  });

  test('キーワードも完了除外も指定なしなら全件返す', () => {
    const result = TodoUtil.filterTodoItems(todoItems, '', true);
    expect(result).toEqual([
      { id: 1, text: 'メモリーズ', done: false },
      { id: 2, text: 'メモリーズ・カスタム', done: true },
      { id: 3, text: '三日月ロック その3', done: false },
      { id: 4, text: '夜を駆ける', done: false },
    ]);
  });
});
