const mongoose = require('mongoose');
const express = require('express');

// TODO: define express as  app
const app = express();

// TODO: Database stuff
const DATABASE = "mongodb://mymongo:27017/testup";

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("DB Connected!");
  })
  .catch(() => {
    console.log("ERROR in DB Connection!");
  });



// TODO: define routes
app.get('/', (req, res) => {
  res.json({
    message: "You're visiting ROOT route...! "
  })
})

// TODO: define listener
app.listen(8000, () => {
  console.log("App is starting at port 8000 : ");
  
});