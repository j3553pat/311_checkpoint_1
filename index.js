const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.json())

app.use('/users', (req, res) => res.json('/route/users'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})