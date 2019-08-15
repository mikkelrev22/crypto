const express = require('express')
const app = express()
const Port = 3332
const morgan = require('morgan')
const bodyParser = require('body-parser')
const axios = require('axios')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/client/dist'))

app.get('/prices', (req, res, next)=>{
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json`)
  .then((response)=> {
    const sentData = {
      label: Object.keys(response.data.bpi),
      data: Object.values(response.data.bpi)
    }
    res.status(200).send(sentData)
  })
  .catch((error)=>{
    next(error)
  })
})

app.use((req, res, next) => {
  res.status(404)
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.stack)
})

app.listen(Port, ()=>{console.log(`Port ${Port} is listening, yo`)})