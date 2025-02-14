const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))


app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log('server started on port 5000')
})

app.get('/health', (req, res) => {
  //throw 'error...'
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})
