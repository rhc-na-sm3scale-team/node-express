/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Return the current user profile
*
* returns User
* */
const getUserProfile = () => new Promise(
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

module.exports = {
  getUserProfile,
};
