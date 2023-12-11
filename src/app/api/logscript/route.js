import { MongoClient } from "mongodb";

export async function GET(req, res) {
    console.log("in the api page");

    const { email, dob, password } = req.query; // Assuming these parameters are passed in the query string
    const url = 'mongodb+srv://mannyojomo:RichWebApp@storeassignment.wietkvg.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(url);
    const dbName = 'app';

    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('login');

        // Check if user exists with given email, dob, and password
        const user = await collection.findOne({ email, dob, password });

        if (user) {
            // User is authenticated, redirect to dashboard
            res.writeHead(302, { Location: '/dashboard' });
            res.end();
        } else {
            // Authentication failed
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Authentication failed' }));
        }
    } finally {
        await client.close();
    }
}