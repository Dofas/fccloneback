import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.static(resolve(__dirname, 'static')));

app.get('/', (req: Request, res: Response) => {
    res.status(201).json({ hello: 'world' });
});

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
});
