const express = require('express')
const app = express()
const Port = 3332
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.listen(Port, ()=>{console.log(`Port ${Port} is listening, yo`)})