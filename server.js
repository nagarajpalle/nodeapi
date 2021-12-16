const express = require("express");
const cors = require("cors");
const db = require("./models/index");
const app = express();
const movies = require('./models/movies.model')
const users = require('./models/users.model')

// var mongoose = require('mongoose');
// var mongoDB = 'insert_your_database_url_here';
// mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
app.get("/getuserslist",async (req, res) => {
  await users.find()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});