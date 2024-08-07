const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config()
const ConnectionString = process.env.URL
const productRoutes = require('./router/productRoutes')

app.get('/', (req, res) => res.send('<h1>Hello res from server</h1>'))
app.use(express.json())

//routes
app.use('/products', productRoutes)

 app.listen(5000, () => {
    console.log('running on Port')
 })

 mongoose.connect(ConnectionString)
  .then(() => console.log('Connected!'))
  .catch(() =>console.log('connection failed'))