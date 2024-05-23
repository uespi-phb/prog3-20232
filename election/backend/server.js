
const endpoints = require('./endpoints')

const express = require('express')
const app = express()
const port = 8000

app.use(express.static('./frontend'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/candidate', endpoints.candidate)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

