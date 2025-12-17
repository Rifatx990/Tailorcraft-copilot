const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/users', require('./routes/userRoutes'));

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Express app!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));