import { renderTasks } from './render.js';
import { getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';
import { onCreateTask } from './addTask.js';
import { doneOrDelete } from './changeTask.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(tasksList => {
    setItem('tasksList', tasksList);
    renderTasks();
  });

  const createBtnEl = document.querySelector('.create-task-btn');
  createBtnEl.addEventListener('click', onCreateTask);

  const listEl = document.querySelector('.list');
  listEl.addEventListener('click', doneOrDelete);
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);

// 1. get data from server
// 2. save data to front-end storage
