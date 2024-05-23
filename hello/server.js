
const express = require('express')
const app = express()
const port = 8000

app.get('/', (request, response) => {
  console.log(`${response.body}`)
  response.send(`<h1>Hello, world!</h1>`)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
