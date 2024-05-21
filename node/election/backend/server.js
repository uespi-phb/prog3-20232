
const express = require('express')
const app = express()

app.use(express.static('./frontend'))
app.use(express.json())

app.post('/candidate', (request, response) => {
  console.log(request.body)
  response.send()
})

app.listen(8000, () => {
  console.log('Server listening on port 8000')
})

