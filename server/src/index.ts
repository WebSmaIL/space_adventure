import dotenv from 'dotenv';
import express, { Express } from 'express';
import path from 'path';
import cors from 'cors';
import {
    leadersRouter,
    planetsRouter,
    userRouter,
    spaceshipsRouter,
} from './routes';
import fileUpload from 'express-fileupload';

dotenv.config();

const app: Express = express();

app.use(fileUpload({}));

app.use(express.json());
app.use(cors());

// ROUTERS
app.use('/api', userRouter);
app.use('/api', leadersRouter);
app.use('/api', planetsRouter);
app.use('/api', spaceshipsRouter);

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );

    // Request headers you wish to allow
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type'
    );

    
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");


    // Pass to next layer of middleware
    next();
});

app.use(express.static('files'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server listening on ${port} port`);
});
