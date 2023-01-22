import { Response, Request } from 'express';
import { query } from '../../database';

interface IUser {
    id: number;
    name: string;
    isOnline: boolean;
}

const users: IUser[] = [
    { id: 1, name: 'Ivan', isOnline: true },
    { id: 2, name: 'Sanya', isOnline: false },
    { id: 3, name: 'Danya', isOnline: true },
];

const toNumber = (i: string) => Number(i.split(':')[1]);


class UsersController {
    async getUsers(req: Request, res: Response) {
        try {
            
            query(`SELECT * FROM users`, []).then((result)=>{
                res.send(result);
                res.status(200);
            })
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = users.find((user) => user.id === toNumber(id));
            if (!user) {
                throw new Error('This user is undefined');
            }
            res.send(user);
            res.status(200);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deleteUserById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const index = users.findIndex((user) => user.id === toNumber(id));
            console.log(index);
            if (index === -1) {
                throw new Error('This user is undefined');
            }
            users.splice(index, 1);
            res.send(`User with ${id} was deleted`);
            res.status(200);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async addUser(req: Request, res: Response) {
        try {
            const { id, name, isOnline } = req.body;
            if (!id || !name || isOnline === undefined) {
                throw new Error('You try to add incorrect user');
            }
            users.push({ id, name, isOnline });
            res.send(`User with ${id}, ${name}, ${isOnline} was added`);
            res.status(200);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const userOfRequest = req.body;
            if (!userOfRequest.id || !userOfRequest.name) {
                throw new Error('Your update incorrectly');
            }

            const user = users.find((user) => user.id === userOfRequest.id);
            if (!user) {
                throw new Error('This user is undefined');
            }

            user.name = userOfRequest.name;
            res.send(`User with ${userOfRequest.id} was updated`);
            res.status(200);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new UsersController();
