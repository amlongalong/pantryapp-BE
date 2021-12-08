const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser') 
const app = express()
const port = 8000

const ListsRouter = require('./routes/listsRouter')
const ProductsRouter = require('./routes/productsRouter')
const RemindersRouter = require('./routes/remindersRouter')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sampledb_b7')

app.use(cors());
app.use(bodyParser.json()); 

app.use('/lists', ListsRouter) 
app.use('/products', ProductsRouter)
app.use('/reminders', RemindersRouter)


app.listen(port,() =>
console.log(`Example app listening on port ${port}!`));