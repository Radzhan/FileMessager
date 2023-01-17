import express from 'express';
import { promises as fs } from 'fs'
import { MessageApi } from '../types';

const messageRouter = express.Router();
const path = './messages';
const date = new Date;
let data: MessageApi[] = [];


messageRouter.get('/', (req, res) => {
    const showFile = async () => {
        const files = await fs.readdir(path);
        const newFiles = files.slice(-5);

        newFiles.forEach(async file => {
            data = [];
            try {
                const fileContents = await fs.readFile('./messages/' + file);
                data.push(JSON.parse(fileContents.toString()));
            } catch (e) {
                data = [];
            }
        });
    };
    showFile().catch(console.error);
    res.send(data);
});

messageRouter.post('/', async (req , res) => {
    const fileName = './messages/' + date.toISOString() + '.txt';
    const object: MessageApi = {
        message: req.body.message,
        dateTime: date.toISOString(),
    };
    const run = async () => {
        try {
            await fs.writeFile(fileName, JSON.stringify(object));
        } catch (err) {
            console.log(err);
        }
    }
    run().catch(console.error);
    res.send(object);
});
export default messageRouter;