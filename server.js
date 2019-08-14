const express = require('express')
const app = express()
const Port = 3332
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'))
app.get('https://api.coindesk.com/v1/bpi/historical/close.json', (req, res)=>{


  if (error) return next(error)
  res.status(200).send()
})
app.use((req, res, next) => {
  res.send(404)
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.stack)
})
app.listen(Port, ()=>{console.log(`Port ${Port} is listening, yo`)})