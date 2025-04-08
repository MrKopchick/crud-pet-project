import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.config.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());


app.get('/', async(req, res) => {
    try{
        const result = await pool.query('SELECT current_database()');
        res.send(result.rows[0].current_database); 
    }catch(err){
        console.log(err);
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});