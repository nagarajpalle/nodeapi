var MongoClient = require('mongodb').MongoClient
// var util= require('util');
// const utf8Encoder = new util.TextEncoder();
// const utf8Decoder = new util.TextEncoder("utf-8", { ignoreBOM: true });

//Create a MongoDB client, open a connection to DocDB; as a replica set,
//  and specify the read preference as secondary preferred
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
var client = MongoClient.connect(
  'mongodb+srv://nagarajpalle:pa55WORD@cluster0.5i6rt.mongodb.net/sample_mflix?retryWrites=true&w=majority',

  function (err, client) {
    if (err)
      throw err;

    console.log("connected");
    //Specify the database to be used
    db = client.db('sample_mflix');

    //Specify the collection to be used
    col = db.collection('movies');

    app.get('/', function (req, res) {
      res.send('Hello World')
    })
    app.listen(3000, () => { });
    //Insert a single document
    //   col.insertOne({'hello':'Amazon DocumentDB'}, function(err, result){
    //     //Find the document that was previously written
    //     col.findOne({'hello':'DocDB;'}, function(err, result){
    //       //Print the result to the screen
    //       console.log(result);

    //       //Close the connection
    client.close()
    //     });
    //  });
  });
