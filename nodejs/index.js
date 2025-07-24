const dotenv = require('dotenv');
const cors = require('cors')
const express = require('express');
const connectDB = require('./connection/db');
const userRouter = require('./routers/userRoutes')

dotenv.config();
connectDB();
const app = express();

app.use(express.json())

app.use(cors())

app.use('/api', userRouter)

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})