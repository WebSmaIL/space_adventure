export const GET_ALL_USERS_QUERY = `SELECT * FROM users`;
export const GET_USER_BY_ID = `SELECT * FROM users WHERE id=?`;
export const DELETE_USER_BY_ID = `DELETE FROM users WHERE id=?`;
export const ADD_USER = `INSERT INTO users (id, name, login, password, email) VALUES (?, ?, ?, ?, ?)`;
export const UPDATE_USER_BY_ID = `UPDATE users SET name=?, login=?, password=?, email=? WHERE id=?`;
export const GET_LEADERS = (tableName: string) => `SELECT * FROM ${tableName} ORDER BY score DESC LIMIT 10`;
export const GET_USER_PRESENCE_BY_ID = (tableName: string) => `SELECT * FROM ${tableName} WHERE user_id=?`;
export const ADD_LEADER = (tableName: string) => `INSERT INTO ${tableName} (user_id, score) VALUES (?, ?)`;
export const UPDATE_LEADER= (tableName: string) => `UPDATE ${tableName} SET score=? WHERE user_id=?`;