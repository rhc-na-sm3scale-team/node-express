/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a Todo
* Creates a new instance of a `Todo`.
*
* todo Todo A new `Todo` to be created.
* returns Todo
* */
const createTodo = ({ todo }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        todo,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete a Todo
* Deletes an existing `Todo`.
*
* todoId UUID A unique identifier for a `Todo`.
* no response value expected for this operation
* */
const deleteTodo = ({ todoId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        todoId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get a Todo
* Gets the details of a single instance of a `Todo`.
*
* todoId UUID A unique identifier for a `Todo`.
* returns Todo
* */
const getTodo = ({ todoId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        todoId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* List All todos
* Gets a list of all `Todo` entities.
*
* returns List
* */
const gettodos = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update a Todo
* Updates an existing `Todo`.
*
* todoId UUID A unique identifier for a `Todo`.
* todo Todo Updated `Todo` information.
* returns Todo
* */
const updateTodo = ({ todoId, todo }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        todoId,
        todo,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createTodo,
  deleteTodo,
  getTodo,
  gettodos,
  updateTodo,
};
