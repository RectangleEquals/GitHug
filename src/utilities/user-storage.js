const database = require('../utilities/database');
const User = require('../models/user');

const add = async function(user, resolve, reject)
{
  await database.connect(_ => {
    try {
      const userObj = new User(user);
      userObj.save();
      resolve();
    } catch (error) {
      reject(error);
      return;
    }
  }, error => {
    reject(error);
    return;
  });
}

const get = function(key)
{
}

module.exports = { add, get };