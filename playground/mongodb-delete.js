// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log("unable to connect to mongoDb server")
    }
    console.log("connected to mongoDb server");

    var db = client.db('Todos');

    //delete many
    db.collection("Todos").deleteMany({ text: "eat lunch" }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log("unable to fetch");
    })

    //delete one
    db.collection("Todos").deleteOne({ text: "eat lunch" }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log("unable to fetch");
    })

    //delete one and find
    db.collection("Todos").findOneAndDelete({ text: "eat lunch" }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log("unable to fetch");
    })
    
    //client.close();
});

