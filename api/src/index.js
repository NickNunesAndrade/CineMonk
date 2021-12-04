import db from './db';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


app.listen(process.env.PORT, 
    x => console.log( ` API subiuu !! ${process.env.PORT} `, ));