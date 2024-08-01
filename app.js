const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');

const app = express();

app.use(bodyParser.json());

const mongoURI = 'mongodb+srv://deniscabrera1990:<Ify3poQjj2VjcQqx>@clustermongo.g4qtwzq.mongodb.net/?retryWrites=true&w=majority&appName=clustermongo';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

app.use('/api', productRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

