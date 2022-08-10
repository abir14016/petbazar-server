const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

//connect with mongoDB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tcarwbd.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const petCollection = client.db('petbazar').collection('pet');

        // pet api for home page
        app.get('/pet', async (req, res) => {
            const query = {};
            const cursor = petCollection.find(query);
            const pets = await cursor.toArray();
            res.send(pets);
        })
    }
    finally {

    }
}

run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Hello From petBazar');
});


app.listen(port, () => {
    console.log(`petBazar app listening on port ${port}`);
})