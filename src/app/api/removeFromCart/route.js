import {MongoClient} from "mongodb";
import app from "request";

export async function GET(req, res) {
    console.log("in the removeFromCart api page");
    app.delete('/api/removeFromCart', (req, res) => {
        // Logic to handle the DELETE request
    });
    console.log("DELETE funtion allowed");
    // get the values that were sent across to us.
    const { searchParams } = new URL(req.url);
    const pname = searchParams.get('pname');
    console.log(pname);
//===================================================
    const { MongoClient } = require('mongodb');
    const url = 'mongodb+srv://mannyojomo:RichWebApp@storeassignment.wietkvg.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(url);
    const dbName = 'app'; // database name
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('shopping_cart'); // collection name
    var deleteCriteria = { pname: pname, username: "sample@test.com" };
    // Use deleteOne to remove the specified item from the collection
    const deleteResult = await collection.deleteOne(deleteCriteria);

    return Response.json({"data":"" + "removed" + ""})

    if (deleteResult.deletedCount === 1) {
        console.log('Item removed from cart:', pname);
        return res.json({ "data": "removed" });
    } else {
        console.log('Item not found in cart:', pname);
        return res.json({ "data": "not found" });
    }
}