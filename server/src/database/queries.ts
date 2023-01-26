export const GET_ALL_USERS_QUERY = `SELECT * FROM users`;
export const GET_USER_BY_ID = `SELECT * FROM users WHERE id=?`;
export const DELETE_USER_BY_ID = `DELETE FROM users WHERE id=?`;
export const ADD_USER = `INSERT INTO users (id, name, login, password, email) VALUES (?, ?, ?, ?, ?)`;
