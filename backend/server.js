// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// const resourceRoutes = require('./routes/resourceRoutes');
// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, './.env') });

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/resources', resourceRoutes);


// // Debugging: Log environment variables
// console.log('DATABASE_URL:', process.env.DATABASE_URL);
// console.log('JWT_SECRET:', process.env.JWT_SECRET);
// console.log('PORT:', process.env.PORT);

// // Database connection
// const dbURI = process.env.DATABASE_URL;
// if (!dbURI) {
//     console.error('DATABASE_URL is not defined in .env file');
//     process.exit(1);
// }

// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/resources', resourceRoutes);

// Debugging: Log environment variables
console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('JWT_SECRET:', process.env.JWT_SECRET);
console.log('PORT:', process.env.PORT);

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});