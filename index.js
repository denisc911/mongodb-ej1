const express = require('express')
const app = express()
const PORT = 3001
const { dbConnection } = require('./app.js')

app.use(express.json())
app.use('/products', require('./routes/Products.js'))




dbConnection()
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))