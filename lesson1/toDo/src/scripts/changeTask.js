import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';

export const changeTask = e => {
  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList.find(task => task.id === taskId);
  const done = e.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

export const deleteTaskfunc = e => {
  const isDelete = e.target.classList.contains('list__item_delete-btn');

  if (!isDelete) {
    return;
  }

  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList.find(task => task.id === taskId);
  const done = e.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  deleteTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

export const doneOrDelete = e => {
  const checkboxEl = e.target.classList.contains('list-item__checkbox');
  const deleteEl = e.target.classList.contains('list__item_delete-btn');

  if (checkboxEl) {
    changeTask(e);
  }
  if (deleteEl) {
    deleteTaskfunc(e);
  }
};

// 1. prepare data
// 2. update data in db
// 3. read new data from server
// 4. save new data to front-end storage
// 5. update UI based on new data
