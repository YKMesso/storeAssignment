const { MongoClient } = require('mongodb');

async function fetchData(email, pass, dob) {
    const url = 'mongodb+srv://mannyojomo:RichWebApp@storeassignment.wietkvg.mongodb.net/?retryWrites=true&w=majority';
    const dbName = 'app';
    const client = new MongoClient(url, { useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to the database');

        const db = client.db(dbName);
        const collection = db.collection('login');

        // Query to retrieve data
        const query = { "username": email, "pass": pass, "dob": dob };

        // Fetch data from MongoDB
        const result = await collection.find(query).toArray();

        console.log('Fetched data:', result);

        return result;
    } finally {
        await client.close();
        console.log('Connection closed');
    }
}

// Example of how to call the fetchData function with sample data
const email = 'sample@email.com';
const pass = 'samplePassword';
const dob = '1990-01-01';

fetchData(email, pass, dob);
