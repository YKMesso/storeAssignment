export async function GET(req, res) {
// Make a note we are on
// the api. This goes to the console.
    console.log("in the putInCart api page")
// get the values
// that were sent across to us.
    const { searchParams } = new URL(req.url)
    const pname = searchParams.get('pname')
    const price = searchParams.get('price')
    const username = searchParams.get('username')
    console.log(pname);
    console.log(price);
    console.log(username);
// =================================================



    const { MongoClient } = require('mongodb');
    const url = 'mongodb+srv://mannyojomo:RichWebApp@storeassignment.wietkvg.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(url);
    const dbName = 'app'; // database name
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('shopping_cart'); // collection name
    //const myobj = {"pname": pname, "price": price, "username": username};
    //const insertResult = await collection.insertOne(myobj);
    const findResult = await collection.insertOne({pname: pname, price: price, username: username})
//==========================================================
// at the end of the process we need to send something back.
    return Response.json({ "data":"" + "inserted" + ""})
}
