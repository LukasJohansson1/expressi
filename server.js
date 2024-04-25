const express = require('express')
const app = express()
const port = 3000

app.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest'
  let html = `<html> <head> </head><body> <h1> Hej ${name}! </h1> </body> </html>`
  res.send(html)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})