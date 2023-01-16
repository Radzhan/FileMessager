import express from "express";
import messageRouter from "./routers/messages";

 const app = express();
 const port = 8000;

 app.use(express.json());
 app.use('/messages', messageRouter)

 app.listen(port, () => {
    console.log('we are live on ' + port)
 })