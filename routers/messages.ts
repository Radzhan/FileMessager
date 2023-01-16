import express from 'express';
import {promises as fs } from 'fs'


const messageRouter = express.Router();
const date = new Date;

const fileName = `${date.toISOString()}.txt`

messageRouter.get('/' , (req, res) => {
    res.send('lost 5 messaages' + date.toISOString());
})

messageRouter.post('/' , async (req, res) => {
    const object = {
        ...req.body,
        date: date.toISOString(),
    }
    const run = async () => {
        try {
            await fs.writeFile(fileName, JSON.stringify(object))
            console.log('file was written')
        } catch (err) {
            console.log(err)
        }
    }
    run()
    res.send(object) 
})
export default messageRouter;