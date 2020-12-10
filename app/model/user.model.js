const { query } = require("./db.js");

// constructor
const User = function (user) {
  this.id = user.id;
  this.username = user.username;
  this.password = user.password;
};

User.create = async (currentUser) => {
  const sql_command = `
    INSERT INTO  
    USER (USERNAME, USERPASSWORD) 
    VALUES ('${currentUser.username}', '${currentUser.password}');`;
  return await query(sql_command);
};

User.findByUsername = async (username) => {
  const sql_command = `
    SELECT
    *
    FROM USER
    WHERE USERNAME = '${username}';`;
  return await query(sql_command);
};

User.login = async (currentUser) => {
  const sql_command = `
    SELECT
    USERID
    FROM USER
    WHERE USERNAME = '${currentUser.username}' AND USERPASSWORD = '${currentUser.password}';`;
  return await query(sql_command);
};

User.getAll = async () => {
  const sql_command = `
    SELECT
    *
    FROM USER`;
  return await query(sql_command);
}

User.removeAll = async () => {
  const sql_command = `
    DELETE FROM USER;
    `;
  return await query(sql_command);
}

User.getById = async (userid) => {
  const sql_command = `
    SELECT
    *
    FROM USER
    WHERE USERID = '${userid}'`;
  return await query(sql_command);
}

module.exports = User;