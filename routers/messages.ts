import express from 'express';
import {promises as fs} from 'fs'


const messageRouter = express.Router();
const date = new Date;

const fileName = `./messages.txt`

messageRouter.get('/' , (req, res) => {
    res.send('lost 5 messaages' + date.toISOString());
})

messageRouter.post('/' , (req, res) => {
    const object = {
        date: date.toISOString(),
        ...req.body,
    }
    const run = async () => {
        try {
            await fs.writeFile(fileName, object)
        } catch (err) {
            console.log(err)
        }
    }
    run()
    console.log('body = ' + req.body)
    res.send('file was written')
})

export default messageRouter;