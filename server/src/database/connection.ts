import mysql from 'mysql2/promise';

const db_config = {
    host: 'websmail.beget.tech',
    user: 'websmail_spd',
    database: 'websmail_spd',
    password: '*W6YbmnU',
};

export async function query(sql: string, params: any) {
    const connection = await mysql.createConnection(db_config);
    const [results, ] = await connection.execute(sql, params);

    return results;
}
