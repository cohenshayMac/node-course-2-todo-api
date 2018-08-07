// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log("unable to connect to mongoDb server")
    }
    console.log("connected to mongoDb server");

    var db = client.db('Todos');
    db.collection("Todos").findOneAndUpdate({ _id: new ObjectID("5b67e8854e3d5810656d386d") },
        {
            $set: {
                completed: true
            }
        }, {
            retunrOriginal: false
        }).then((res) => {
            console.log(res);
        });
    //client.close();
});

