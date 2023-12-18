import http from 'http'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './src/routes/authRoutes.js'

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express()

app.use(express.json())
app.use(cors())

const server = http.createServer(app)

app.get('/', (req,res) => {
    return res.send("Hello from the server")
})

app.use('/api/auth', authRoutes);


server.listen(PORT, () => {
    console.log(`Server is currently listening in port ${PORT}`);
})