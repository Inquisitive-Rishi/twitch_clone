const http = require('http')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const { log } = require('console');

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express()

app.use(express.json())
app.use(cors())

const server = http.createServer(app)

app.use('/', (req,res) => {
    res.send('Hello from the server')
})

server.listen(PORT, () => {
    console.log(`Server is currently listening in port ${PORT}`);
})