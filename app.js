const express = require('express')
const app = express()
require('dotenv').config()

// Heroku dynamically sets a port

const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`server started on port ${PORT}`)
  /* eslint-enable no-console */
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/fail', (req, res) => {
  throw 'Fail health check'

  // eslint-disable-next-line no-unreachable
  res.send('this will never happen')
})

app.get('/version', (req, res) => {
  res.send('4') // change this string to ensure a new version deployed
})
