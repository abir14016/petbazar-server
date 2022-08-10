const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello From petBazar');
})

app.listen(port, () => {
    console.log(`petBazar app listening on port ${port}`);
})