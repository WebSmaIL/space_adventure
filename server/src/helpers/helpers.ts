import { OkPacket, ResultSetHeader, RowDataPacket } from 'mysql2';

export const toNumber = (i: string) => Number(i.split(':')[1]);
export const toObject = (res: RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader) => Object.values(JSON.parse(JSON.stringify(res)))
