// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log("unable to connect to mongoDb server")
    }
    console.log("connected to mongoDb server");

    // var db = client.db('Todos');
    // db.collection("Todos").insertOne({
    //     text: "something to do",
    //     completed: true
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops), undefined, 2);
    // });

    // db.collection("Users").insertOne({
    //     name: "shay cohen",
    //     age: 33,
    //     location: "herzeliya"
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()), undefined, 2);
    // });
     client.close();
});

