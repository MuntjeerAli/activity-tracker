import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import tasks from './routes/tasks.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;
app.get("/", (req, res) => {
    res.send("<h1>Activity Manager Application</h1>");
});

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => 
    app.listen(PORT, () => {
        console.log(`Server is running in: http://localhost:${PORT}`)
    })
).catch((err) => console.log(`${err}: did not connect`));

