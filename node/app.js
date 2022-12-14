import express from "express";
import cors from 'cors';
import db from "./database/db.js";

import userRoutes from './routes/routes.js';

const app = express();

app.use(cors())
app.use(express.json())
app.use('/api', userRoutes);

try {
    db.authenticate()
    console.log("Conexion exitosa a la base de datos")
} catch (error) {
    console.log(`El error de conexion es ${error}`)
}

app.get('/', (req,res) => {
    res.send('Hola Mundo')
})

app.listen(8000, () => {
    console.log('Server UP and running in http://localhost:8000/')
})