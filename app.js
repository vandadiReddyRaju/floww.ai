const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const transactionRoutes = require('./routes/transactionRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
require('./db/database'); // Initialize the database

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/transactions', transactionRoutes);
app.use('/categories', categoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
