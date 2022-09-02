const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000
const app = express()
const routers =require('./routes/route');

// midelware............
app.use(cors())
app.use(express.json())



app.use('/user', routers)






app.get('/', (req, res) => {
  res.send('hello world')
})
app.all('*', (req, res) => {
  res.send('No route found')
})

app.listen(port, () => {
  console.log('listening port')
})
