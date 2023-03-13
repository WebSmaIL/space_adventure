export const DELETE_USER_BY_ID = `DELETE FROM users WHERE id=?`;
export const ADD_USER = `INSERT INTO users (id, login, password, email, balance, level) VALUES (?, ?, ?, ?, ?, ?)`;
export const UPDATE_USER_LOGIN = `UPDATE users SET login=? WHERE id=?`;
export const UPDATE_USER_PASSWORD = `UPDATE users SET password=? WHERE id=?`;
export const UPDATE_USER_BALANCE = `UPDATE users SET balance=? WHERE id=?`;
export const UPDATE_USER_EMAIL = `UPDATE users SET email=? WHERE id=?`;
export const UPDATE_USER_LEVEL = `UPDATE users SET level=?, balance=? WHERE id=?`;


export const GET_LEADERS = (tableName: string, startNumber: number, limitNumber: number) => `SELECT * FROM ${tableName} ORDER BY score DESC LIMIT ${startNumber}, ${limitNumber}`;
export const GET_USER_PRESENCE_BY_ID = (tableName: string) => `SELECT * FROM ${tableName} WHERE user_id=?`;
export const ADD_LEADER = (tableName: string) => `INSERT INTO ${tableName} (user_id, score, login) VALUES (?, ?, ?)`;
export const UPDATE_LEADER= (tableName: string) => `UPDATE ${tableName} SET score=? WHERE user_id=?`;
export const GET_ALL = (tableName: string) => `SELECT * FROM ${tableName}`;
export const GET_BY_ID = (tableName: string) => `SELECT * FROM ${tableName} WHERE id=?`;
export const GET_BY_LOGIN = `SELECT * FROM users WHERE login=?`;
export const UPDATE_USER_AVATAR = `UPDATE users SET avatar_src=? WHERE id=?`;