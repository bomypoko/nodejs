const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')

const connectDB = require('./Config/db')


const app = express()

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({ limit: '10mb'}))


const { readdirSync } = require('fs')


readdirSync('./Routes').map(item => {
   app.use('/api' , require('./Routes/' + item))
})


app.listen(2500 , () => {
    console.log('This sever is running on port 2500')
})