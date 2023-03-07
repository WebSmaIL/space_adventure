import mysql from 'mysql2/promise';

const db_config: mysql.PoolOptions = {
    host: 'websmail.beget.tech',
    user: 'websmail_spd',
    database: 'websmail_spd',
    password: '*W6YbmnU',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

const pool = mysql.createPool(db_config);

export async function query(sql: string, params: any) {
    const [results] = await pool.execute(sql, params);

    return results;
}
