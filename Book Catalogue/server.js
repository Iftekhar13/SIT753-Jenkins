const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3000;

// Import route file
const booksRoutes = require('./routes/books.routes');

// Mount the route at /api/food
app.use('/api/books', booksRoutes);

app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Books Catalog Home Page!');
});

// Health check route for monitoring
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Book Catalogue application is running'
  });
});

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://127.0.0.1:27017/booksdb')
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((error) => {
      console.error('MongoDB connection error:', error);
    });
}

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

module.exports = app;