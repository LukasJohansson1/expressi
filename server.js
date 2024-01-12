const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Victor är en liten skogstomte han är en liten och kort gnom')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})