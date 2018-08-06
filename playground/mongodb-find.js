// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log("unable to connect to mongoDb server")
    }
    console.log("connected to mongoDb server");

    var db = client.db('Todos');
    db.collection("Users").find({name:"shay cohen"}).toArray().then((docs)=>{
            console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log("unable to fetch");
    })
     //client.close();
});

